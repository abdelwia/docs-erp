### <span style="color:orange">POST</span>  Payment initialization

````
BASE_URL/v1/payment/init
````

<br/> <br/> 

# Initiate Payment

This guide will help you initiate a payment to any operator that our API supports.


## Corridors

Here are the countries and their supported payment methods:

| Country Code | Country Name | Supports Mobile Wallet? | Supports Credit Card? | Currency | 
| ------------- | ----------- |----------- |----------- |----------- |
| BJ | Benin | Yes | Yes | XOF | 
| CI | Côte d'Ivoire | Yes | Yes | XOF | 


## Available Payment Methods

Here are the available payment methods per country and their minimum and maximum transaction limits:



| Country Code | Country Name | Payment methods | Min amount | Max amount | 
| ------------- | ----------- |----------- |----------- |----------- |
| BJ | Benin | CREDIT_CARD, MOOV_BJ, MTN_BJ | 200 | 1500000 | 
| CI | Côte d'Ivoire | CREDIT_CARD, MOOV_CI, MTN_CI, ORANGE_CI, WAVE_CI | 200 | 1500000 | 


## Payment Statuses

Payments may have one of the following statuses:


| Status| Description | 
| ------------- | ----------- |
| new | The payment is newly created | 
| success |The payment is successful | 
| pending | The payment is pending | 
| failed |The payment has failed | 
| refunded |The payment has been refunded| 
| cancelled |The payment has been cancelled| 


## Valid Currencies

Below are the valid currencies:


| Currency| Description | 
| ------------- | ----------- |
| XOF | West African Economic and Monetary Union | 
| EUR |Euro | 


## Valid Payee Phone Number

A payee's phone number should be in E.164 format. This starts with a plus sign (+), followed by the country code and then the phone number. For example, a number for Côte d'Ivoire (CIV) would look like: +2250102030405.


## Valid Channel Strings

Below are the valid channel strings:


| Channel | Description | 
| ------------- | ----------- |
| mobile_money |Payment made through mobile money service | 
| credit_card |Payment made using a credit card | 
| wave |Payment made through a mobile wallet application called Wave | 


## Request Information

Here are the parameters you need to include in your request:


|Parameter | Type | Is Mandatory | Description | 
| ------------- | ----------- |----------- |----------- |
| merchant_transaction_id | string | Yes | The merchant's unique identifier for the transaction | 
| amount	 | integer | Yes | The amount of the payment | 
| currency	 | valid_currency_string | Yes |The currency in which the payment is made | 
| description	 | string | No |	A brief description of the payment transaction |
| payee	 | valid_payee_phone_number | Yes | Phone number of the payee | 
| payee_first_name	 | string | No | First name of the payee | 
| payee_last_name	 | string | No | Last name of the payee | 
| channel	 | valid_channel_string | Yes | The channel used to make the payment | 
| webhook_url	 | string | No | The URL to which the payment confirmation will be sent | 
| custom_field	 | string | No |An optional custom field for additional information | 


Please note that you can force the using of a payment method by adding "payment_method" with a valid one



## Response Information
Here are the parameters you will receive in your response:


|Response Parameter | Type | Description | 
| ------------- | ----------- |----------- |
| code | integer | The HTTP status code returned by the API |
| message | string | A message indicating the result of the API operation |
| data | object | An object containing the payment processing details |
| data.payment_status | string | The current status of the payment |
| data.payment_token | string |A unique identifier for the payment transaction |
| data.payment_method | string | The payment method used for the transaction |
| data.payment_type | string | The type of payment made |
| data.country | string | The country where the payment was made |
| data.country_prefix | string | The country code prefix for the mobile number |
| data.channel | string | The channel used to initiate the payment |
| data.payment_meta | object | Additional metadata related to the payment transaction |
| data.payment_meta.otp | boolean | Indicates whether the payment requires an OTP code |
| data.payment_meta.otp_length | integer | The length of the OTP code required |
| data.payment_meta.redirect_customer_to_url_processing | boolean | ndicates whether the customer should be redirected to a URL for processing |
| data.process_request_data | object |Additional data required for processing the payment |
| data.process_request_data.payment_token | boolean |Indicates whether a payment token is required for processing the payment|
| data.process_request_data.otp_code | boolean |Indicates whether an OTP code is required for processing the payment|
| data.process_request_data.payment_token | string	 |Instructions for the customer on how to complete the payment|




## Simulating Payment Statuses : Test Phase Only

The API allows you to simulate different payment statuses during the testing phase. These pattern below trigger different payment states and responses, allowing you to verify that your system correctly handles various scenarios.

### Channel "mobile_money" Testing

Here is a list of test phone numbers and their associated payment statuses:

|Payee | Type Transaction | Final Status | 
| ------------- | ----------- |----------- |
| +2250707000200 | One Step | success |
| +2250707000201 | Two  Step | success |
| +2250707000205 | One Step | failed with generic error |
| +2250707000202 | Two Step | failed with specific error |
| +2250707000203 | Two Step | failed with specific error |
| +2250707000204 | Two Step | failed with generic error |
| +2250707000206 | One Step | failed with specific error |
| +2250707000206 | One Step | failed with specific error |
| Any other number | Two Step | failed with generic error |

## AUTHORIZATION 
###### Bearer Token

| Token |  TOKEN |
| ------------- | ----------- |

## HEADERS

| Authorization | Basic TOKEN |
| ------------- | ----------- |


## Body

###### raw (json)


```json

{
    "merchant_transaction_id": "845bf095-da3c-4516-98ed-b29c0e59df79",
    "amount": 500,
    "currency": "XOF",
    "description": "Payment description",
    //"payee": "+2250707000200",
    "payee_first_name": "Amidou",
    "payee_last_name": "Amada",
    "channel": "mobile_money",
    "webhook_url": "https://webhook.site/3533c510-719c-4f52-9c2d-be163501db09",
    "success_url": "http://my-url1.com",
    "error_url": "http://my-url1.com",
    "custom_field": "any_string"
}

```






## Example Request

```curl
curl --location 'BASE_URL/v1/payment/init' \
--header 'Authorization: Basic TOKEN' \
--data '{
	"merchant_transaction_id": "string",
    "amount": "integer",
	"currency": "valid_currency_string",
    "description": "Payment description",
    "payee": "valid_payee_phone_number",
    "payee_fist_name": "payee_fist_name",
    "payee_last_name": "payee_last_name",
	"channel": "valid_channel_string",
	"webhook_url": "http://my-url.com",
    "custom_field": "any_string"
}'

```


## Example Response ([Success] [otp_type])

::: details Body  

```json
    {
  "code": 201,
  "message": "CREATED",
  "data": {
    "payment_token": "be45970d-3888-4272-acc4-d52561da3758",
    "payment_status": "new",
    "payment_method": "ORANGE_CI",
    "payment_type": "direct",
    "country": "CI",
    "country_prefix": "+225",
    "channel": "mobile_money",
    "payment_url": "https://gateway.page/pay/be45970d-3888-4272-acc4-d52561da3758",
    "meta": {
      "otp": false,
      "otp_length": 0,
      "redirect_customer_to_url_processing": false,
      "before_payment_instructions": "Make sure you have enough balance.",
      "after_payment_instructions": "Check your account for the transaction details."
    }
  }
}
```
:::


::: details Headers (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::



## Example Response ([Success] [direct_type])

::: details Body  

```json
    {
  "code": 201,
  "message": "CREATED",
  "data": {
    "payment_token": "be45970d-3888-4272-acc4-d52561da3758",
    "payment_status": "new",
    "payment_method": "ORANGE_CI",
    "payment_type": "direct",
    "country": "CI",
    "country_prefix": "+225",
    "channel": "mobile_money",
    "payment_url": "https://gateway.page/pay/be45970d-3888-4272-acc4-d52561da3758",
    "meta": {
      "otp": false,
      "otp_length": 0,
      "redirect_customer_to_url_processing": false,
      "before_payment_instructions": "Make sure you have enough balance.",
      "after_payment_instructions": "Check your account for the transaction details."
    }
  }
}
```
:::


::: details Headers (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::



## Example Response ([Success] [direct_type])

::: details Body  

```json
    {
  "code": 201,
  "message": "CREATED",
  "data": {
    "payment_token": "be45970d-3888-4272-acc4-d52561da3758",
    "payment_status": "new",
    "payment_method": "ORANGE_CI",
    "payment_type": "direct",
    "country": "CI",
    "country_prefix": "+225",
    "channel": "mobile_money",
    "payment_url": "https://gateway.page/pay/be45970d-3888-4272-acc4-d52561da3758",
    "meta": {
      "otp": false,
      "otp_length": 0,
      "redirect_customer_to_url_processing": false,
      "before_payment_instructions": "Make sure you have enough balance.",
      "after_payment_instructions": "Check your account for the transaction details."
    }
  }
}
```
:::


::: details Headers (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
