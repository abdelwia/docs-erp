### <span style="color:green">GET</span> Tableau de bord du gestionnaire 

````
BASE_URL/data/dashboard
````

## Description

Cette route permet d'obtenir les informations du tableau de bord du gestionnaire .

## Requête

### HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |
| Content-Type  | application/json |

### Corps de la Requête

```json
{
    "search": {
        "start": "date_de_début",
        "end": "date_de_fin"
    }
}
```

| Paramètre   | Type   | Description                                      |
| ----------- | ------ | ------------------------------------------------ |
| `search`    | object | Un objet contenant les dates de début et de fin. |
| `start`     | string | Date de début au format "Y-m-d".                 |
| `end`       | string | Date de fin au format "Y-m-d".                   |

## Réponse

### Exemple de Requête

```curl
curl --location BASE_URL/data/dashboard' \
--header 'Authorization: Bearer TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "search": {
        "start": "2023-01-01",
        "end": "2023-12-31"
    }
}'
```

### Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "emissions": [
        {
            // Informations sur les émissions
        },
        {
            // Informations sur les émissions
        },
        // ...
    ],
    "categories": [
        {
            // Informations sur les catégories de succursales
        },
        {
            // Informations sur les catégories de succursales
        },
        // ...
    ],
    "customers": {
        // Informations sur les clients
    }
}
```

:::