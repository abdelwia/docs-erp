

### <span style="color:orange">POST</span> Envoyer un lien de paiement court

````
BASE_URL/avenant/send/payment/short
````

## EN-TÊTES

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location BASE_URL/avenant/send/payment/short' \
--header 'Authorization: Bearer TOKEN'
--data-raw '{
    "uuid": "uuid",
    "link": "lien",
    "contact": "contact"
}'
```

## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success"
}
```

:::

J'espère que cela correspond à ce que tu attendais ! Si tu as besoin de plus d'informations ou des modifications, n'hésite pas à me le dire.