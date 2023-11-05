### <span style="color:green">GET</span> Récupérer les informations d'un avenant

````
BASE_URL/avenant/get/data/{uuid}
````

## EN-TÊTES

| Authorization | Bearer TOKEN |
| ------------- | ----------- |


## Exemple de Requête

```curl
curl --location BASE_URL/avenant/get/data/{uuid}' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "avenant": {
        // informations sur l'avenant
    },
    "paymentMethods": [
        // méthodes de paiement disponibles
    ]
}
```

:::