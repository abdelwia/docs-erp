### <span style="color:yellow">PUT</span> Gérer la réponse de paiement Wave

````
BASE_URL/wave
````

## Description

Cette route permet de gérer la réponse de paiement Wave.

## Requête

### HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Réponse

### Exemple de Requête

```curl
curl -X PUT BASE_URL/wave'
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
