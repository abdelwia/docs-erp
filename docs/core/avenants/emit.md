

### <span style="color:orange">POST</span> Emettre un avenant

````
BASE_URL/avenant/emit/{uuid}
````

## EN-TÊTES

| Authorization | Bearer TOKEN |
| ------------- | ----------- |


## Exemple de Requête

```curl
curl --location BASE_URL/avenant/emit/{uuid}' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success"
}
```

:::