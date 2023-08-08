# Magma OnePay API V1

Magma OnePay API is designed following REST principles. It uses easy-to-predict, resource-centric URLs, and it both accepts and gives back information in JSON format. Plus, it applies standard HTTP rules for response codes, authentication, and verbs.

We will separately provide you with the BASEURL value.

You can use the API in a safe testing environment, which won't touch your live data or connect with any banking or mobile money networks. The type of API key you use for verifying the request will decide if it's in live or test mode.

Please remember, all API requests need to be sent over HTTPS. Attempts made over non-secure HTTP will not work. Also, API requests made without authentication will fail.