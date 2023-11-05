### <span style="color:green">GET</span> Liste des langues et des traductions

````
BASE_URL/translation/language/list
````

## Description

Cette route permet d'obtenir la liste des langues actives et des traductions disponibles.

## Requête

### HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Réponse

### Exemple de Requête

```curl
curl --location BASE_URL/translation/language/list' \
--header 'Authorization: Bearer TOKEN'
```

### Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "locales": [
        {
            // Informations sur la langue
        },
        {
            // Informations sur la langue
        },
        // ...
    ],
    "ui": [
        {
            // Informations sur l'interface utilisateur
        },
        {
            // Informations sur l'interface utilisateur
        },
        // ...
    ]
}
```

:::