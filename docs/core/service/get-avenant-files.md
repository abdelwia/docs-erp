### <span style="color:green">GET</span> Obtenir les fichiers d'un avenant

````
BASE_URL/get/avenant/files/{uuid}
````

## Description

Cette route permet d'obtenir les fichiers associés à un avenant en fonction de son UUID.

## Paramètres de l'URL

| Paramètre   | Type   | Description                            |
| ----------- | ------ | -------------------------------------- |
| `uuid`      | string | L'UUID de l'avenant.                   |

## Requête

### HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Réponse

### Exemple de Requête

```curl
curl --location BASE_URL/get/avenant/files/{uuid}' \
--header 'Authorization: Bearer TOKEN'
```

### Exemple de Réponse

::: details Corps  

```json
{
    // Informations sur les fichiers d'avenant
}
```

:::
