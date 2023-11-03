Voici la documentation pour la fonction que tu as fournie :

### <span style="color:green">GET</span> Rechercher un customer

````
BASE_URL/customer/search/{value}
````

## Description

Cette route permet de rechercher un client en fonction de la valeur spécifiée.

## Paramètres de l'URL

| Paramètre   | Type   | Description                                  |
| ----------- | ------ | -------------------------------------------- |
| `value`      | string | La valeur de recherche pour le client.        |

## Requête

### HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Réponse

### Exemple de Requête

```curl
curl --location BASE_URL/customer/search/{value}' \
--header 'Authorization: Bearer TOKEN'
```

### Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "customers": [
        {
            // Informations sur le client
        },
        {
            // Informations sur le client
        },
        // ...
    ]
}
```

:::

Cela devrait correspondre à la documentation pour cette fonction. Si tu as besoin de plus d'informations ou d'autres ajustements, n'hésite pas à me le dire !