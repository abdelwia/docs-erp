### <span style="color:green">GET</span> Liste des livraisons en attente

````
BASE_URL/delivery/list
````

## Description

Cette route permet d'obtenir la liste des livraisons en attente.

## Requête

### HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Réponse

### Exemple de Requête

```curl
curl --location BASE_URL/delivery/list' \
--header 'Authorization: Bearer TOKEN'
```

### Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "deliveries": [
        {
            // Informations sur la livraison
        },
        {
            // Informations sur la livraison
        },
        // ...
    ]
}
```

:::
