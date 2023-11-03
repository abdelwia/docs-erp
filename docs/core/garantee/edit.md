
### <span style="color:orange">POST</span> Creer / Modifier une garantie

````
BASE_URL/guarantee/edit/{branchSlug}
````

## HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |


## Example Request

```txt


txt --location BASE_URL/guarantee/edit/{branchSlug}' \
--header 'Authorization: Bearer TOKEN'

```


## Example Response

::: details Body  

```json
{
    "status": "success",
    "guarantee": {
       // guarantee
    }
}


```




:::

