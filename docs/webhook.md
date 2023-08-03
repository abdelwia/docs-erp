# Integrating Webhook

The API payment webhook is a powerful tool that keeps your system updated about the status of transactions processed through the API. This guide will walk you through the steps to integrate the API payment webhook with your system.

## Step 1: Set up a webhook URL


The first step is to create an endpoint in your application that will receive and handle incoming webhook POST requests. This URL must be publicly accessible and should use HTTPS to ensure the security of the data being transmitted.


## Step 3: Handle the webhook payload

The payload sent from the webhook POST request contains information about the event that triggered the webhook and the details of the event. You'll need to parse this payload and use the data to update your system.


Here are some of the fields you can expect in the payload:

* `event :` The type of event that triggered the webhook (e.g., 'payment.success.webhook' or 'payment.failed.webhook').
* `data :` An array containing detailed information about the event:
    * `payment_token :`  A unique identifier for the payment intent.
    * `merchant_transaction_id :`   Your internal reference for the transaction.
    * `amount :`The payment amount.
    * `currency :`The payment currency.
    * `payee :`The recipient of the payment.
    * `payment_method :`The payment method used for the transaction.
    * `payment_processing_reference :`The payment method used for the transaction.
    * `payment_method :`A reference from the payment processor.
    * `payment_status:` The current status of the payment (e.g., 'success', 'failed').
    * `payment_status_code:` The payment processor's status code for the transaction.
    * `payment_status_message:`A message from the payment processor describing the transaction status.

To ensure the incoming request genuinely originated from the API, you'll need to validate the 'X-SIGNATURE' header. Use your webhook secret key and the HMAC SHA-256 algorithm to calculate a signature and compare it with the received signature. Discard any requests where the calculated signature doesn't match the received signature.

Here's an example in PHP:

```php
$payload = json_encode($data); // Assume $data is the 'data' array from the webhook payload
$receivedSignature = $_SERVER['HTTP_X_SIGNATURE']; // Assume this is the received 'X-OrizonPay-SIGNATURE' header
$privateKey = 'your_private_key';
$calculatedSignature = hash_hmac('sha256', $payload, $privateKey);
if (hash_equals($calculatedSignature, $receivedSignature)) {
    echo "Signature is valid!";
   // Process the webhook information here
} else {
    echo "Signature is invalid!";
}

```
And here's an equivalent example in JavaScript:

```javascript
import * as crypto from 'crypto';
const payload = JSON.stringify(data); // Assume data is the 'data' array from the webhook payload
const receivedSignature = 'received_signature'; // Assume this is the received 'X-SIGNATURE' header
const privateKey = 'your_private_key';
const hmac = crypto.createHmac('sha256', privateKey);
hmac.update(payload);
const calculatedSignature = hmac.digest('hex');
if (calculatedSignature === receivedSignature) {
    console.log('Signature is valid!');
    // Process the webhook information here
} else {
    console.log('Signature is invalid!');
}
```




## Step 5: Send a response

After you have processed the webhook, return an HTTP status code 200 response to acknowledge receipt. This tells the OrizonPay API's system that you've successfully received the webhook, so it doesn't need to send it again.