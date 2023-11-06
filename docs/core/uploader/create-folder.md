
### <span style="color:orange">POST</span> Créer un dossier

````
BASE_URL/api/uploader/create/folder
````

## Description

Cette route permet de créer un nouveau dossier.

## Requête

### HEADERS

| Content-Type | application/json |
| ------------ | ---------------- |

### Corps de la Requête

Aucun corps de requête n'est nécessaire.

## Réponse

### Exemple de Requête

```curl
curl --location BASE_URL/api/uploader/create/folder' \
--header 'Content-Type: application/json' \
--request POST
```

### Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "uuid": "identifiant_unique_du_dossier"
}
```

:::

