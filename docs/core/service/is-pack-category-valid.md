### <span style="color:green">GET</span> Vérifier si une catégorie de pack est valide

````
BASE_URL/service/is/pack/category/valid/{branchSlug}/{uuid}
````

## Description

Cette route permet de vérifier si une catégorie de pack est valide en fonction du slug de la succursale (`branchSlug`) et de l'UUID de la catégorie de pack (`uuid`) spécifiés.

## Paramètres de l'URL

| Paramètre   | Type   | Description                                     |
| ----------- | ------ | ----------------------------------------------- |
| `branchSlug` | string | Le slug de la succursale.                        |
| `uuid`      | string | L'UUID de la catégorie de pack.                   |

## Requête

### HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Réponse

### Exemple de Requête

```curl
curl --location BASE_URL/service/is/pack/category/valid/{branchSlug}/{uuid}' \
--header 'Authorization: Bearer TOKEN'
```

### Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "response": true
}
```

:::