### <span style="color:green">GET</span> Liste des exigences de contrat

````
BASE_URL/avenant/list/requirements
````

## Méthode

- `GET`

## EN-TÊTES

| Authorization | Bearer TOKEN |
| ------------- | ----------- |
| Content-Type | application/json |

## Exemple de Requête

```curl
curl --location BASE_URL/avenant/list/requirements' \
--header 'Authorization: Bearer TOKEN' \
--header 'Content-Type: application/json'
```

## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "categories": [
        // Liste des catégories de branche
    ],
    "insurers": [
        // Liste des assureurs
    ],
    "partners": [
        // Liste des partenaires
    ],
    "types": [
        // Liste des types d'avenant
    ]
}
```

:::