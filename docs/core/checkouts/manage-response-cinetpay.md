
### <span style="color:yellow">PUT</span> Gérer la réponse de paiement Cinetpay

````
BASE_URL/cinetpay/{token}
````

## Description

Cette route permet de gérer la réponse de paiement de Cinetpay.

## Paramètres de l'URL

| Paramètre   | Type   | Description                                  |
| ----------- | ------ | -------------------------------------------- |
| `token`      | string | Le token associé au paiement.                    |

## Requête

### HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Réponse

### Exemple de Requête

```curl
curl -X PUT BASE_URL/cinetpay/{token}' \
--header 'Authorization: Bearer TOKEN'
```

### Exemple de Réponse

::: details Corps  

```json
{
    "status": "success"
}
```

:::
