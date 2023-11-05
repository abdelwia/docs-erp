### <span style="color:orange">POST</span> Calculer la prime

````
BASE_URL/calculate/premium
````

## Description

Cette route permet de calculer la prime d'assurance en fonction des données fournies.

## Requête

### Méthode

- `POST`

### HEADERS

| Content-Type | application/json |
| ------------ | ----------------- |

### Corps de la requête

```json
{
    // Données pour le calcul de la prime
}
```

## Réponse

### Exemple de Requête

```curl
curl --location BASE_URL/calculate/premium' \
--header 'Content-Type: application/json' \
--data-raw '{
    // Données pour le calcul de la prime
}'
```

### Exemple de Réponse en cas de succès

::: details Corps  

```json
{
    "status": "success",
    "data": {
        // Détails sur la prime calculée
    }
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
