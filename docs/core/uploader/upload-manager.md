Voici la documentation pour les deux fonctions que tu as fournies :

### <span style="color:orange">POST</span> Gestionnaire de téléchargement

````
BASE_URL/api/uploader
````

## Description

Cette route permet de gérer le téléchargement de fichiers.

## Requête

### HEADERS

| Content-Type | multipart/form-data |
| ------------ | ------------------- |

### Corps de la Requête

Le corps de la requête doit contenir le fichier à télécharger.

## Réponse

### Exemple de Requête

```curl
curl --location BASE_URL/api/uploader' \
--header 'Content-Type: multipart/form-data' \
--form 'file=@/chemin/vers/le/fichier'
```

### Exemple de Réponse

::: details Corps  

```json
{
    "success": true,
    "status": "finished",
    "id": "0dba7c4b-018f-487e-9452-3ad6d0fdb165",
    "folderUuid": null,
    "filename": "0dba7c4b-018f-487e-9452-3ad6d0fdb165.jpeg",
    "link": "uploads/0dba7c4b-018f-487e-9452-3ad6d0fdb165.jpeg",
    "generated": true
}
```

:::
