### <span style="color:green">GET</span> Obtenir les offres

````
BASE_URL/get/offers
````

## Description

Cette route permet d'obtenir les offres en fonction des données fournies.

## Requête

### Méthode

- `GET`

### HEADERS

| Content-Type | application/json |
| ------------ | ----------------- |

### Corps de la requête

```json
{
    // Données pour obtenir les offres
}
```

## Réponse

### Exemple de Requête

```curl
curl --location BASE_URL/get/offers' \
--header 'Content-Type: application/json' \
--data-raw '{
    // Données pour obtenir les offres
}'
```

### Exemple de Réponse en cas de succès

::: details Corps  

```json
{
    "status": "success",
    "offers": [
        {
            // Informations sur l'offre
        },
        {
            // Informations sur l'offre
        },
        // ...
    ]
}
```

:::

### Exemple de Réponse en cas d'erreur

::: details Corps  

```json
{
    "status": "failed",
    "error": "Trace de l'erreur",
    "file": "Chemin du fichier:Numéro de ligne",
    "message": "Message d'erreur"
}
```

:::