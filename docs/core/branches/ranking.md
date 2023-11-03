### <span style="color:orange">POST</span>   Actualiser l'orde d'affichage des branches

````
BASE_URL/branch/update/ranks
````

## AUTHORIZATION 
###### Bearer Token

| Token |  TOKEN |
| ------------- | ----------- |

## HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |



## Body

###### raw (json)


```json

{
   "ranks": [
    {
      "uuid": "1ee5656f-023e-699c-aeea-00505646c51f",
      "ranking": 1
    },
    {
      "uuid": "1ee56cb1-b9cf-6dce-b761-00505646c51f",
      "ranking": 2
    },
    {
      "uuid": "1ee5b97a-357f-6766-9848-00505646c51f",
      "ranking": 3
    }
  ]
}

```



## Example Request

```curl
curl --location 'BASE_URL/branch/update/ranks' \
--header 'Authorization: Bearer TOKEN' \
--data '{
  "ranks": [
    {
      "uuid": "1ee5656f-023e-699c-aeea-00505646c51f",
      "ranking": 1
    },
    {
      "uuid": "1ee56cb1-b9cf-6dce-b761-00505646c51f",
      "ranking": 2
    },
    {
      "uuid": "1ee5b97a-357f-6766-9848-00505646c51f",
      "ranking": 3
    }
  ]

}'

```


## Example Response

::: details Body  

```json
{
    "status": "success",
    "categories": [
        {
            "id": 1,
            "label": "Particulier",
            "slug": "particulier-1",
            "branches": [
                {
                    "id": 1,
                    "label": "Auto",
                    "icon": "fad fa-car",
                    "slug": "individuel-auto",
                    "description": null,
                    "ranking": 1,
                    "active": true,
                    "color": "",
                    "version": 1,
                    "startDate": "today",
                    "uuid": "1ee5656f-023e-699c-aeea-00505646c51f",
                    "createdAt": "2023-09-18T19:09:49+00:00",
                    "updatedAt": "2023-11-01T18:51:55+00:00",
                    "createBy": "user@wiassur.com",
                    "updateBy": "user@wiassur.com",
                    "removeBy": null,
                    "printables": [],
                    "photo": "c73caabd-9d8f-47ed-81e1-a17977b86726.svg",
                    "engineVersion": 1
                },
                {
                    "id": 2,
                    "label": "Sant\u00e9",
                    "icon": "fad fa-briefcase-medical",
                    "slug": "individuel-sante",
                    "description": null,
                    "ranking": 2,
                    "active": true,
                    "color": "#3abb90",
                    "version": null,
                    "startDate": "",
                    "uuid": "1ee56cb1-b9cf-6dce-b761-00505646c51f",
                    "createdAt": "2023-09-19T09:01:23+00:00",
                    "updatedAt": "2023-11-01T18:51:55+00:00",
                    "createBy": "user@wiassur.com",
                    "updateBy": "user@wiassur.com",
                    "removeBy": null,
                    "printables": [],
                    "photo": "4ef728e1-73bc-4d3f-ba9c-4d3ef3938259.png",
                    "engineVersion": null
                },
                {
                    "id": 7,
                    "label": "test",
                    "icon": "fab fa-adobe",
                    "slug": "individuel-test",
                    "description": null,
                    "ranking": 3,
                    "active": true,
                    "color": "",
                    "version": null,
                    "startDate": "",
                    "uuid": "1ee5b97a-357f-6766-9848-00505646c51f",
                    "createdAt": "2023-09-25T11:35:33+00:00",
                    "updatedAt": "2023-11-01T18:51:55+00:00",
                    "createBy": "user@wiassur.com",
                    "updateBy": "user@wiassur.com",
                    "removeBy": null,
                    "printables": [],
                    "photo": "",
                    "engineVersion": null
                }
            ],
            "color": "#00cdd5",
            "uuid": "1ee5656b-ccfd-6010-9e3f-00505646c51f",
            "createdAt": "2023-09-18T19:08:22+00:00",
            "updatedAt": "2023-10-09T09:22:18+00:00",
            "createBy": "user@wiassur.com",
            "updateBy": "user@wiassur.com",
            "removeBy": null
        },
        {
            "id": 2,
            "label": "ENTREPRISE",
            "color": "#bdbdbd",
            "slug": "entreprise",
            "branches": [
                {
                    "id": 3,
                    "label": "AUTO",
                    "icon": "fad fa-car-alt",
                    "slug": "entreprise-auto",
                    "description": null,
                    "ranking": 1,
                    "active": true,
                    "color": "",
                    "version": null,
                    "startDate": "",
                    "uuid": "1ee579f8-f37b-65a6-a65b-00505646c51f",
                    "createdAt": "2023-09-20T10:22:10+00:00",
                    "updatedAt": "2023-10-03T09:32:53+00:00",
                    "createBy": "user@wiassur.com",
                    "updateBy": "user@wiassur.com",
                    "removeBy": null,
                    "printables": [],
                    "photo": "479e796b-35d4-41c0-8326-85968af797a4.svg",
                    "engineVersion": null
                },
                {
                    "id": 4,
                    "label": "Sant\u00e9",
                    "icon": "fad fa-briefcase-medical",
                    "slug": "entreprise-sante",
                    "description": null,
                    "ranking": 2,
                    "active": true,
                    "color": "#47bdaf",
                    "version": 1,
                    "startDate": "today",
                    "uuid": "1ee57ee3-f177-645e-bfff-00505646c51f",
                    "createdAt": "2023-09-20T19:45:26+00:00",
                    "updatedAt": "2023-10-03T12:29:54+00:00",
                    "createBy": "user@wiassur.com",
                    "updateBy": "user@wiassur.com",
                    "removeBy": null,
                    "printables": [],
                    "photo": "203f00f2-82a6-4594-aaa7-167c0e3eb683.svg",
                    "engineVersion": 1
                },
                {
                    "id": 5,
                    "label": "yolloy",
                    "icon": "fab fa-alipay",
                    "slug": "entreprise-yolloy",
                    "description": null,
                    "ranking": 2,
                    "active": false,
                    "color": "",
                    "version": null,
                    "startDate": "",
                    "uuid": "1ee5b91b-4bcc-6672-897d-00505646c51f",
                    "createdAt": "2023-09-25T10:53:05+00:00",
                    "updatedAt": "2023-09-26T08:59:12+00:00",
                    "createBy": "user@wiassur.com",
                    "updateBy": "user@wiassur.com",
                    "removeBy": null,
                    "printables": [],
                    "photo": "",
                    "engineVersion": null
                },
                {
                    "id": 9,
                    "label": "RC Pro",
                    "icon": "fas fa-user-tie",
                    "slug": "entreprise-rc-pro",
                    "description": null,
                    "ranking": 3,
                    "active": false,
                    "color": "#00cbd8",
                    "version": null,
                    "startDate": "",
                    "uuid": "1ee5e28d-c6cf-6aea-92b4-00505646c51f",
                    "createdAt": "2023-09-28T18:00:08+00:00",
                    "updatedAt": "2023-10-03T12:30:39+00:00",
                    "createBy": "desiree@wiassur.com",
                    "updateBy": "user@wiassur.com",
                    "removeBy": null,
                    "printables": [],
                    "photo": "6dd5e195-2269-458d-b3ab-77ef88429c61.svg",
                    "engineVersion": null
                },
                {
                    "id": 10,
                    "label": "MRP",
                    "icon": "fas fa-shield",
                    "slug": "entreprise-mrp",
                    "description": null,
                    "ranking": 4,
                    "active": null,
                    "color": "",
                    "version": null,
                    "startDate": "",
                    "uuid": "1ee5ea7d-16aa-691a-84db-00505646c51f",
                    "createdAt": "2023-09-29T09:08:56+00:00",
                    "updatedAt": "2023-10-03T09:33:15+00:00",
                    "createBy": "user@wiassur.com",
                    "updateBy": "user@wiassur.com",
                    "removeBy": null,
                    "printables": [],
                    "photo": "3be33ed9-aa48-4fac-9517-e17fd47ea1ac.svg",
                    "engineVersion": null
                }
            ],
            "uuid": "1ee579f4-e90f-68aa-8109-00505646c51f",
            "createdAt": "2023-09-20T10:20:21+00:00",
            "updatedAt": "2023-10-03T09:23:03+00:00",
            "createBy": "user@wiassur.com",
            "updateBy": "user@wiassur.com",
            "removeBy": null
        },
        {
            "id": 3,
            "label": "PARTICULIER",
            "color": "#ffa3eb",
            "slug": "particulier",
            "branches": [
                {
                    "id": 6,
                    "label": "MRH",
                    "icon": "fad fa-home",
                    "slug": "particulier-mrh",
                    "description": null,
                    "ranking": 0,
                    "active": true,
                    "color": "#ffa8a8",
                    "version": 1,
                    "startDate": "today",
                    "uuid": "1ee5b978-7163-6766-9c46-00505646c51f",
                    "createdAt": "2023-09-25T11:34:45+00:00",
                    "updatedAt": "2023-10-03T10:23:36+00:00",
                    "createBy": "user@wiassur.com",
                    "updateBy": "user@wiassur.com",
                    "removeBy": null,
                    "printables": [],
                    "photo": "1bba6278-89a6-4a61-b4e1-9ace6f08da08.svg",
                    "engineVersion": 1
                },
                {
                    "id": 8,
                    "label": "test2",
                    "icon": "fab fa-artstation",
                    "slug": "particulier-test2",
                    "description": null,
                    "ranking": 1,
                    "active": null,
                    "color": "",
                    "version": null,
                    "startDate": "",
                    "uuid": "1ee5b97e-a995-6ade-bfff-00505646c51f",
                    "createdAt": "2023-09-25T11:37:32+00:00",
                    "updatedAt": null,
                    "createBy": "user@wiassur.com",
                    "updateBy": null,
                    "removeBy": null,
                    "printables": [],
                    "photo": "",
                    "engineVersion": null
                },
                {
                    "id": 11,
                    "label": "lorem",
                    "icon": "",
                    "slug": "particulier-lorem",
                    "description": null,
                    "ranking": 2,
                    "active": null,
                    "color": "",
                    "version": null,
                    "startDate": "",
                    "uuid": "1ee78e40-1906-64da-8c98-00505646c51f",
                    "createdAt": "2023-11-01T18:25:16+00:00",
                    "updatedAt": null,
                    "createBy": "user@wiassur.com",
                    "updateBy": null,
                    "removeBy": null,
                    "printables": [],
                    "photo": "",
                    "engineVersion": null
                }
            ],
            "uuid": "1ee57a2a-83aa-6718-883f-00505646c51f",
            "createdAt": "2023-09-20T10:44:21+00:00",
            "updatedAt": "2023-09-29T12:29:41+00:00",
            "createBy": "user@wiassur.com",
            "updateBy": "user@wiassur.com",
            "removeBy": null
        }
    ]
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