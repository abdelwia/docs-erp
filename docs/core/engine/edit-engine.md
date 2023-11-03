
### <span style="color:yellow">PUT</span>  Modifier le moteur
````
BASE_URL/engine/edit/{branchSlug}
````

## HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |


## Example Request

```txt


txt --location BASE_URL/engine/edit/{branchSlug}' \
--header 'Authorization: Bearer TOKEN'

```


## Example Response

::: details Body  

```json
{
    "status": "success",
    "engine": {
        \\engine infos
    }
}


```




:::

