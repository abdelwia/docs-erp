### <span style="color:green">GET</span> Obtenir les données d'un comparaison

````
BASE_URL/get/comparator/data/{branchSlug}
````

## Description

Cette route permet d'obtenir les données nécessaires pour la comparaison entre différentes options d'assurance.

## Paramètres de l'URL

| Paramètre       | Type   | Description                                      |
| --------------- | ------ | ------------------------------------------------ |
| `branchSlug`    | string | Le slug de la branche pour laquelle effectuer la comparaison. |

## Requête

### Méthode

- `GET`

### Réponse

### Exemple de Requête

```curl
curl --location BASE_URL/get/comparator/data/{branchSlug}
```

### Exemple de Réponse en cas de succès

::: details Corps  

```json
{
    "status": "success",
    "branch": {
        // Informations sur la branche
    },
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