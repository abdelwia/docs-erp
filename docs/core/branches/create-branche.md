### <span style="color:green">GET</span>  Créer une branche

````
BASE_URL/branch/{uuid}
````

## HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |


## Example Request

```curl


curl --location BASE_URL/branch/{uuid}' \
--header 'Authorization: Bearer TOKEN'

```


## Example Response

::: details Body  

```json
{
    "status": "success",
    "data"
}


```




:::


::: details Headers (12)

 *Server*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      cloudflare

 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   application/json


 *Transfer-Encoding*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      chunked

 *Connection*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  keep-alive
 
 *Vary*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Accept-Encoding



 *X-Powered-By*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  PHP/8.2.7


 *Cache-Control*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; no-cache, private

 
 *Date*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Mon, 26 Jun 2023 19:54:39 GMT
 

  *X-RateLimit-Limit*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  600

  *X-RateLimit-Remaining*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  599

*Access-Control-Allow-Origin*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  *


*Content-Encoding*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  gzip

  
 





:::