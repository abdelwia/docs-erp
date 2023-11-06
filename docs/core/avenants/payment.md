



### <span style="color:yellow">GET</span> Générer un lien de paiement pour un avenant

````
BASE_URL/avenant/generate/payment/link/{uuid}
````

## EN-TÊTES

| Authorization | Bearer TOKEN |
| ------------- | ----------- |


## Exemple de Requête

```curl
curl --location BASE_URL/avenant/generate/payment/link/{uuid}' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "links": []
}
```

:::