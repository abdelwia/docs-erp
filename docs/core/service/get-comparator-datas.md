### <span style="color:green">GET</span> Obtenir les données de comparaison

````
BASE_URL/get/comparator/datas
````

## Description

Cette route permet d'obtenir les données nécessaires pour la comparaison entre différentes options d'assurance.

## Requête

### Méthode

- `GET`

### Réponse

### Exemple de Requête

```curl
curl --location BASE_URL/get/comparator/datas
```

### Exemple de Réponse en cas de succès

::: details Corps  

```json
{
    "status": "success",
    "categories": [
        {
            // Informations sur la catégorie de branche
        },
        {
            // Informations sur la catégorie de branche
        },
        // ...
    ],
    "insurers": [
        {
            // Informations sur l'assureur et ses packs
        },
        {
            // Informations sur l'assureur et ses packs
        },
        // ...
    ]
}
```

:::