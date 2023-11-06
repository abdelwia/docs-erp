
### <span style="color:yellow">PUT</span> Modifier les informations d'une catégorie de branche

````
BASE_URL/branch/category/edit
````

## Méthode

- `PUT`

## EN-TÊTES

| Authorization| Bearer TOKEN |
| ------------- | ----------- |
| Content-Type | application/json |

## Corps de la Requête

```json
{
    "category": {
        // Nouvelles informations de la catégorie de branche
    }
}
```

## Exemple de Requête

```curl
curl --location BASE_URL/branch/category/edit' \
--header 'Authorization: Bearer TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "category": {
        // Nouvelles informations de la catégorie de branche
    }
}'
```

## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "category": {
        // Informations de la catégorie de branche modifiées
    }
}
```

:::
