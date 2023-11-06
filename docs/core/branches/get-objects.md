
### <span style="color:green">GET</span> Récupérer les objets d'une branche

````
BASE_URL/branch/item/types/{slug}
````

## Paramètres

- `{slug}` : Slug de la branche

## EN-TÊTES

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location BASE_URL/branch/item/types/SLUG' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "itemTypes": [
        // Liste des types d'objets de la branche
    ]
}
```

:::