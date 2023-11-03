Voici la documentation pour la fonction que tu as fournie :

### <span style="color:orange">POST</span> Nouveau Contrat

````
BASE_URL/contract/new/{slug}
````

## Description

Cette route permet d'obtenir la liste des informations nécessaires pour créer un nouveau contrat.

## Paramètres de l'URL

| Paramètre   | Type   | Description                                  |
| ----------- | ------ | -------------------------------------------- |
| `slug`      | string | Le slug de la succursale.                    |

## Requête

### HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Réponse

### Exemple de Requête

```curl
curl --location BASE_URL/contract/new/{slug}' \
--header 'Authorization: Bearer TOKEN'
```

### Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "items": [
        {
            // Informations sur l'objet
        },
        {
            // Informations sur l'objet
        },
        // ...
    ],
    "branch": {
        // Informations sur la branche
    },
    "itemProperties": [
        {
            // Informations sur la propriété
        },
        {
            // Informations sur la propriété
        },
        // ...
    ],
    "branchCategory": {
        // Informations sur la catégorie de branche
    },
    "packCategories": [
        {
            // Informations sur la catégorie de pack
        },
        {
            // Informations sur la catégorie de pack
        },
        // ...
    ],
    "guarantees": [
        {
            // Informations sur la garantie
        },
        {
            // Informations sur la garantie
        },
        // ...
    ],
    "packs": [
        {
            // Informations sur le pack
        },
        {
            // Informations sur le pack
        },
        // ...
    ],
    "premiumDetailModels": [
        {
            // Informations sur le modèle de détail de prime
        },
        {
            // Informations sur le modèle de détail de prime
        },
        // ...
    ],
    "insurers": [
        {
            // Informations sur l'assureur
        },
        {
            // Informations sur l'assureur
        },
        // ...
    ]
}
```

:::