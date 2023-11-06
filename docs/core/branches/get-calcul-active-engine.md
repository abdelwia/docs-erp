
### <span style="color:green">GET</span> Récupérer le moteur de calcul actif d'une branche

````
BASE_URL/branch/get/engine/{slug}
````

## Paramètres

- `{slug}` : Slug de la branche

## EN-TÊTES

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location BASE_URL/branch/get/engine/SLUG' \
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
