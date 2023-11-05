### <span style="color:green">GET</span> Obtenir les données d'initialisation

````
BASE_URL/init/data
````

## Description

Cette route permet d'obtenir les données initiales nécessaires.

## Requête

### Méthode

- `GET`

### HEADERS

| Content-Type | application/json |
| ------------ | ----------------- |

## Réponse

### Exemple de Requête

```curl
curl --location BASE_URL/init/data'
```

### Exemple de Réponse en cas de succès

::: details Corps  

```json
{
    "status": "success",
    "paymentMethods": [
        {
            // Informations sur les méthodes de paiement
        },
        {
            // Informations sur les méthodes de paiement
        },
        // ...
    ]
}
```

:::