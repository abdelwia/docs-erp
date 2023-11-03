### <span style="color:green">GET</span>  Payment Status

````
BASE_URL/v1/payment/:payment_token
````


# Retrieve Payment Transaction Details
This guide helps you to understand how to retrieve payment transaction details that were previously initialized using API.

## Using the Endpoint
To use this endpoint, replace the  `:payment_token` in the endpoint URL with the unique payment token assigned to the transaction during the payment initialization process.

## Response Information
The API will return a JSON response containing the details of the payment transaction, including but not limited to the following information:

* The amount of the payment
* The currency in which the payment was made
* The current status of the payment transaction
* The payment method used for the transaction
* The unique reference for the payment transaction assigned by the payment gateway or processor
* Any custom fields or additional information provided by the merchant
* A URL for processing the payment if required by the payment method


## Usage
This endpoint can be used to retrieve the status of a payment transaction and to reconcile the payment with your own internal records. It is useful when you need to verify transaction details or handle any disputes or customer inquiries regarding the transaction.

Remember to handle all sensitive information returned from this endpoint with care to ensure the privacy and security of your customers.


## HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## PATH VARIABLES

| payment_token | payment_token |
| ------------- | ----------- |


## Example Request

```curl


curl --location 'BASE_URL/v1/payment/payment_token' \
--header 'Authorization: Bearer TOKEN'

```

## Example Response 

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
    "payment_processing_reference": "CI.230312.1042.343DG",
    "custom_field": "{userId: 12345}",
    "payment_status": "success",
    "payment_status_code": "200",
    "payment_status_message": "SUCCESS"
  }
}
```
:::


::: details Headers (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
