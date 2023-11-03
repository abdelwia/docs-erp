### <span style="color:orange">POST</span>  Payment Process

````
BASE_URL/v1/payment/process
````

<br/> <br/> 

# Process Payment
This guide helps you to understand how to process a payment that has already been initialized using the API.


## Response Information

Upon processing the payment, the API will return the following information:


|Response Parameter | Type | Description | 
| ------------- | ----------- |----------- |
| code | integer | The HTTP status code returned by the API |
| message | string | A message indicating the result of the API operation |
| data | object |An object containing the details of the payment transaction |
| data.payment_token | string |A unique identifier for the payment transaction |
| data.merchant_transaction_id | string | The merchant's unique identifier for the transaction |
| data.amount | integer | The amount of the payment in the smallest currency unit (e.g., cents) |
| data.currency | string | The currency code for the payment (in ISO 4217 format) |
| data.description | string | A description of the payment provided by the merchant |
| data.payee | string | The phone number of the payee in E.164 format (e.g., +2250707070707) |
| data.amount | integer | The amount of the payment in the smallest currency unit (e.g., cents) |
| data.payment_method | string | The payment method used for the transaction |
| data.payment_type | string | The type of payment made |
| data.payment_reference | string | A unique reference for the payment transaction (assigned by the payment gateway or processor) |
| data.custom_field | string |A custom field or additional information provided by the merchant |
| data.payment_status | string | The current status of the payment transaction |
| data.payment_message | string | A message associated with the payment status (e.g., "success", "failed") |
| data.payment_processing_url | string |A URL for processing the payment (if required by the payment method) |

This response information can be used by the merchant to update the transaction's status on their end, provide a receipt to the customer, or handle any next steps required based on the payment's status.


## HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |


## Body

###### raw (json)


```json

{
    "payment_token": "payment_token",
    "otp_code": "1234",
    "payee": "+2250707895086",
    "payment_method": "ORANGE_CI"
}
```






## Example Request

```curl
curl --location 'BASE_URL/v1/payment/process' \
--header 'Authorization: Bearer TOKEN' \
--data '{
    "payment_token": "91ce0608-16b3-4bf4-a2d8-1ab46e776cc2",
    "otp_code": "1234"
}'

```


## Example Response ([Success])

::: details Body  

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "payment_token": "91ce0608-16b3-4bf4-a2d8-1ab46e776cc2",
    "merchant_transaction_id": "string",
    "amount": 100,
    "currency": "XOF",
    "description": "Payment description",
    "payee": "+22507070707",
    "payment_method": "ORANGE_CI",
    "payment_reference": "CI.230312.1042.343DG",
    "custom_field": "{userId: 12345}",
    "payment_status": "success",
    "payment_message": "SUCCESS",
    "payment_processing_url": null
  }
}
```
:::


::: details Headers (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::



## Example Response ([pending])

::: details Body  

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "payment_token": "91ce0608-16b3-4bf4-a2d8-1ab46e776cc2",
    "merchant_transaction_id": "string",
    "amount": 100,
    "currency": "XOF",
    "description": "Payment description",
    "payee": "+22507070707",
    "payment_method": "ORANGE_CI",
    "payment_reference": "CI.230312.1042.343DG",
    "custom_field": "{userId: 12345}",
    "payment_status": "pending",
    "payment_status_code": "100",
    "payment_status_message": "WAITING_CUSTOMER_PAYMENT",
    "payment_processing_url": null
  }
}
```
:::


::: details Headers (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::



## Example Response ([Failed])

::: details Body  

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "payment_token": "91ce0608-16b3-4bf4-a2d8-1ab46e776cc2",
    "merchant_transaction_id": "string",
    "amount": 100,
    "currency": "XOF",
    "description": "Payment description",
    "payee": "+22507070707",
    "payment_method": "ORANGE_CI",
    "payment_reference": "CI.230312.1042.343DG",
    "custom_field": "{userId: 12345}",
    "payment_status": "failed",
    "payment_status_code": "300",
    "payment_status_message": "BALANCE_INSUFFICIENT",
    "payment_processing_url": null
  }
}
```
:::


::: details Headers (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
