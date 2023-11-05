### <span style="color:green">POST</span> Mettre à jour le schéma de la base de données

````
BASE_URL/update/schema
````

## Description

Cette route permet de mettre à jour le schéma de la base de données.

## Requête

### Méthode

- `POST`

### HEADERS

| Content-Type | application/json |
| ------------ | ----------------- |

### Corps de la requête

```json
{
    // Pas de données requises
}
```

## Réponse

### Exemple de Requête

```curl
curl --location --request POST 'BASE_URL/update/schema' \
--header 'Content-Type: application/json'
```

### Exemple de Réponse en cas de succès

::: details Corps  

```json
{
    "status": "success",
    "updated": [
        // Noms des bases de données mises à jour
    ],
    "errors": [
        // Erreurs rencontrées lors de la mise à jour
    ]
}
```

:::