
### <span style="color:YELLOW">PUT</span>  Modifier les information d'un consumer
````
BASE_URL/contract/renew/{uuid}
````

## HEADERS

| Authorization | Basic TOKEN |
| ------------- | ----------- |


## Example Request

```curl


curl --location BASE_URL/branch/contract/{uuid}' \
--header 'Authorization: Basic TOKEN'

```


## Example Response

::: details Body  

```json
{
    "status": "success",
    "branch": {
        "id": 7,
        "label": "test",
        "icon": "fab fa-adobe",
        "slug": "individuel-test",
        "description": null,
        "ranking": 2,
        "active": true,
        "color": "",
        "version": null,
        "startDate": "",
        "uuid": "1ee5b97a-357f-6766-9848-00505646c51f",
        "createdAt": "2023-09-25T11:35:33+00:00",
        "updatedAt": "2023-11-01T18:48:46+00:00",
        "createBy": "user@wiassur.com",
        "updateBy": "user@wiassur.com",
        "removeBy": null,
        "printables": [],
        "photo": "",
        "engineVersion": null
    }
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