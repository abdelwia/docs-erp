### <span style="color:green">GET</span>  Transfer Status

````
BASE_URL/v1/payout/transfer/:transfer_token
````


# Retrieve Transfer Details
This guide helps you to understand how to retrieve transfer transaction details that were previously initialized using the OrizonPay API.

## Using the Endpoint
To use this endpoint, replace the  `:transfer_token ` in the endpoint URL with the unique payment token assigned to the transaction during the payment initialization process.



## Usage

This endpoint can be used to retrieve the status of a transfer transaction and to reconcile it with your own internal records. It is useful when you need to verify transaction details or handle any disputes or customer inquiries regarding the transaction.

Remember to handle all sensitive information returned from this endpoint with care to ensure the privacy and security of your customers.




## HEADERS

| Authorization | Basic TOKEN |
| ------------- | ----------- |

## PATH VARIABLES

| payment_token | 992883ba-ce2b-46fd-9fc3-4154c77f692f |
| ------------- | ----------- |


## Example Request

```curl


curl --location 'BASE_URL/v1/payout/transfer/992883ba-ce2b-46fd-9fc3-4154c77f692f' \
--header 'Authorization: Basic TOKEN'

```

## Example Response 

::: details Body  

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "transfer_token": "992883ba-ce2b-46fd-9fc3-4154c77f692f",
    "merchant_transaction_id": "1612a5a0-dfc5-4175-ab62-8f657d689670",
    "country_name": "Côte d'Ivoire",
    "country_code": "CI",
    "amount": 500,
    "description": "Payment description",
    "channel": "mobile_money",
    "receiver_account": "+2250707000200",
    "receiver_first_name": "Amidou",
    "receiver_last_name": "Amada",
    "webhook_url": "https://webhook.site/3533c510-719c-4f52-9c2d-be163501db09",
    "custom_field": "any_string",
    "status": "new"
  }
}
```
:::


::: details Headers (12)

 *Server*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      nginx/1.25.1 

 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   application/json


 *Transfer-Encoding*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      chunked

 *Connection*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  keep-alive
 
 *Vary*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Accept-Encoding



 *X-Powered-By*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  PHP/8.2.8


 *Cache-Control*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; no-cache, private

 
 *Date*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tue, 18 Jul 2023 09:57:51 GMT
 

  *X-RateLimit-Limit*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  600

  *X-RateLimit-Remaining*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  598

*Access-Control-Allow-Origin*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  *


*Content-Encoding*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  gzip

  
 



:::
