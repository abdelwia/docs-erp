
### <span style="color:yellow">GET</span> Activer / Desactiver un Assureur


```
BASE_URL/insurer/list/toggle/activation/{uuid}
````

## HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |


## Example Request

```curl


curl --location BASE_URL/insurer/list/toggle/activation/{uuid}' \
--header 'Authorization: Bearer TOKEN'

```


## Example Response

::: details Body  

```json
{
    "status": "success",
    "guarantess":{
        // guarantee   
         }
}


```




:::

