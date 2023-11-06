

### <span style="color:green">GET</span> Récupérer les informations d'une branche

````
BASE_URL/branch/get/data/{slug}
````

## Paramètres

- `{slug}` : Slug de la branche

## EN-TÊTES

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location BASE_URL/branch/get/data/SLUG' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "branch": {
        // Informations de la branche
    }
}
```

:::