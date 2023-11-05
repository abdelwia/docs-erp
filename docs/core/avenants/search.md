### <span style="color:orange">POST</span> Rechercher des avenants

````
BASE_URL/avenant/search
````

## Méthode

- `POST`

## EN-TÊTES

| Authorization | Bearer TOKEN |
| ------------- | ----------- |
| Content-Type | application/json |

## Corps de la Requête

```json
{
    "searched": {
        // Filtres de recherche (voir ci-dessous)
    }
}
```

### Filtres de Recherche

- `partner` (optionnel) : Code du partenaire

## Exemple de Requête

```curl
curl --location BASE_URL/avenant/search' \
--header 'Authorization: Bearer TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "searched": {
        "partner": "code_partenaire"
    }
}'
```

## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "avenants": [
        // Liste des avenants correspondants aux critères de recherche
    ],
    "matchCount": 10,
    "total": 50
}
```

:::
