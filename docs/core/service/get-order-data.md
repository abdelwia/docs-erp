### <span style="color:green">GET</span> Obtenir les données de commande

````
BASE_URL/get/order/data
````

## Description

Cette route permet d'obtenir les données nécessaires pour effectuer une commande.

## Requête

### Méthode

- `GET`

### HEADERS

| Content-Type | application/json |
| ------------ | ----------------- |

### Corps de la requête

```json
{
    "branchSlug": "particulier-auto",
    "insurerSlug": "atlantique",
    "partner": "code_du_partenaire"
}
```

## Réponse

### Exemple de Requête

```curl
curl --location BASE_URL/get/order/data' \
--header 'Content-Type: application/json' \
--data-raw '{
    "branchSlug": "particulier-auto",
    "insurerSlug": "atlantique",
    "partner": "code_du_partenaire"
}'
```

### Exemple de Réponse en cas de succès

::: details Corps  

```json
{
    "status": "success",
    "branch": {
        // Informations sur la branche
    },
    "insurer": {
        // Informations sur l'assureur
    },
    "paymentMethods": [
        {
            // Informations sur les méthodes de paiement
        },
        {
            // Informations sur les méthodes de paiement
        },
        // ...
    ],
    "partner": {
        // Informations sur le partenaire
    }
}
```

:::