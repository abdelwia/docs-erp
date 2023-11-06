
### <span style="color:green">GET</span> Liste des objets inclus dans un avenant

````
BASE_URL/avenant/get/items/{uuid}
````

## EN-TÊTES

| Authorization | Bearer TOKEN |
| ------------- | ----------- |


## Exemple de Requête

```curl
curl --location BASE_URL/avenant/get/items/{uuid}' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "root": {
        // racine de l'avenant
    },
    "itemIns": [
        // liste des objets inclus
    ]
}
```

:::
