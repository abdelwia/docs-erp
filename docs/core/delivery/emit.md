### <span style="color:green">GET</span> Émettre un contrat

````
BASE_URL/emit/{uuid}
````

## Description

Cette route permet d'émettre un contrat en utilisant son identifiant unique (`uuid`).

## Paramètres de l'URL

| Paramètre   | Type   | Description                                  |
| ----------- | ------ | -------------------------------------------- |
| `uuid`      | string | L'identifiant unique du contrat.              |

## Requête

### HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Réponse

### Exemple de Requête

```curl
curl --location BASE_URL/emit/{uuid}' \
--header 'Authorization: Bearer TOKEN'
```

### Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "uuid": "identifiant_unique_du_contrat"
}
```

:::
