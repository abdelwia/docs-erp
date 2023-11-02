### <span style="color:green">GET</span> Liste complète des branches

````
BASE_URL/branch/list
````

## HEADERS

| Authorization | Basic TOKEN |
| ------------- | ----------- |


## Example Request

```curl


curl --location 'BASE_URL/branch/list' \
--header 'Authorization: Basic TOKEN'

```


## Example Response

::: details Body  

```json

{
    "status": "success",
   
            "branches": [
                {
                    "id": 2,
                    "label": "Sant\u00e9",
                    "icon": "fad fa-briefcase-medical",
                    "slug": "individuel-sante",
                    "description": null,
                    "ranking": 1,
                    "active": true,
                    "packCategories": [],
                    "color": "#3abb90",
                    "version": null,
                    "startDate": "",
                    "uuid": "1ee56cb1-b9cf-6dce-b761-00505646c51f",
                    "createdAt": "2023-09-19T09:01:23+00:00",
                    "updatedAt": "2023-09-25T10:30:00+00:00",
                    "createBy": "user@wiassur.com",
                    "updateBy": "user@wiassur.com",
                    "removeBy": null,
                    "printables": [],
                    "photo": "4ef728e1-73bc-4d3f-ba9c-4d3ef3938259.png",
                    "engineVersion": null
                },
                {
                    "id": 1,
                    "label": "Auto",
                    "icon": "fad fa-car",
                    "slug": "individuel-auto",
                    "description": null,
                    "ranking": 2,
                    "active": true,
                    "packCategories": [
                        {
                            "id": 1,
                            "label": "Diamant",
                            "slug": "diamant",
                            "description": "",
                            "ranking": 1,
                            "uuid": "1ee565cd-9f43-6914-894f-00505646c51f",
                            "createdAt": "2023-09-18T19:52:08+00:00",
                            "updatedAt": null,
                            "createBy": "user@wiassur.com",
                            "updateBy": null,
                            "removeBy": null
                        }
                    ],
                    "color": "",
                    "version": 1,
                    "startDate": "today",
                    "uuid": "1ee5656f-023e-699c-aeea-00505646c51f",
                    "createdAt": "2023-09-18T19:09:49+00:00",
                    "updatedAt": "2023-10-03T12:28:48+00:00",
                    "createBy": "user@wiassur.com",
                    "updateBy": "user@wiassur.com",
                    "removeBy": null,
                    "printables": [],
                    "photo": "c73caabd-9d8f-47ed-81e1-a17977b86726.svg",
                    "engineVersion": 1
                },
                {
                    "id": 7,
                    "label": "test",
                    "icon": "fab fa-adobe",
                    "slug": "individuel-test",
                    "description": null,
                    "ranking": 2,
                    "active": null,
                    "packCategories": [],
                    "color": "",
                    "version": null,
                    "startDate": "",
                    "uuid": "1ee5b97a-357f-6766-9848-00505646c51f",
                    "createdAt": "2023-09-25T11:35:33+00:00",
                    "updatedAt": "2023-09-25T11:36:43+00:00",
                    "createBy": "user@wiassur.com",
                    "updateBy": "user@wiassur.com",
                    "removeBy": null,
                    "printables": [],
                    "photo": "",
                    "engineVersion": null
                }
            ],
         
       
        },
       
    


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