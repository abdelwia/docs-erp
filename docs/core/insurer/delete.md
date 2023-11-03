
### <span style="color:red">DELETE</span> Supprimer un assureur
````
BASE_URL/insurer/delete/{uuid}
````

## HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |


## Example Request

```curl


curl --location BASE_URL/insurer/delete/{uuid}' \
--header 'Authorization: Bearer TOKEN'

```


## Example Response

::: details Body  

```json
{
    "status": "success",
    "insurers":{
        // insurers   
         }
}


```




:::

