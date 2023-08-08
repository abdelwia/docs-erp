### Auth

# Magma OnePay API V1

Magma OnePay API V1 allows your app to interact with our payment/transfer platform. This guide will help you set up and manage your API keys, understand different operating modes, and use the keys properly for secure transactions.

## Understanding API Keys
API keys are the "passwords" that let your application access Magma OnePay API V1. Keep these keys private to maintain the security of your transactions. You can manage these keys from your Dashboard. Note that sharing these keys in public places like GitHub or in client-side code is not recommended due to security risks.

## Getting API Keys
You can find your API keys by logging into your account and going to the Dashboard. If you're having trouble accessing them, reach out to the owner of your account. They may need to grant you additional permissions.

## API Key Types
There are four API keys that we provides to you :

1. **Test mode secret key:**  For making server-side API calls in test mode.
2. **Test mode publishable key:** For client-side code testing in apps.
3. **Live mode secret key:** For making server-side API calls in live mode.
4. **Live mode publishable key:** For client-side code in apps once they're live.


## Modes of Operation
Magma OnePay API V1 operates in two modes: test mode and live mode.

* *Test mode:* Use this mode when you're still developing your app. It simulates API interactions but doesn't process real payments.
* *Live mode:* Use this mode when your app is ready to process real transactions and accept actual payments.

## How to Use Your API Keys
Depending on the mode you're in (test or live), use the corresponding keys.

* *Secret keys:* Use these for server-side API calls. Keep these keys secure; don't expose them publicly.
* *Publishable keys:* These can be included in your app's client-side code. They're used to collect payment information safely.


## Keep Your API Keys Secure
Your secret API key can perform any transaction on your behalf. To keep it safe:

* Limit access to people who really need it.
* Keep it out of version control systems.
* Use a password manager or a secrets management service to store it.
* Don't include your secret API key in mobile apps or other extractable locations.