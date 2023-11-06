### <span style="color:orange">POST</span> Mettre à jour les versions des APIs

````
BASE_URL/update/apis/versions
````

## Description

Cette route permet de mettre à jour les versions des APIs en fonction des données fournies.

## Requête

### Méthode

- `POST`

### HEADERS

| Content-Type | application/json |
| ------------ | ----------------- |

### Corps de la requête

```json
{
    "apis": [
        {
            // Informations sur l'API
        },
        {
            // Informations sur l'API
        },
        // ...
    ]
}
```

## Réponse

### Exemple de Requête

```curl
curl --location BASE_URL/update/apis/versions' \
--header 'Content-Type: application/json' \
--data-raw '{
    "apis": [
        {
            // Informations sur l'API
        },
        {
            // Informations sur l'API
        },
        // ...
    ]
}'
```

### Exemple de Réponse en cas de succès

::: details Corps  

```json
{
    "status": "success"
}
```

:::
