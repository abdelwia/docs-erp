### <span style="color:orange">POST</span> Enregistrer la signature d'un avenant

````
BASE_URL/save/avenant/signature/{uuid}
````

## Description

Cette route permet d'enregistrer la signature d'un avenant à partir d'un fichier envoyé dans la requête.

## Paramètres de l'URL

| Paramètre   | Type   | Description                            |
| ----------- | ------ | -------------------------------------- |
| `uuid`      | string | L'UUID de l'avenant.                   |

## Requête

### Méthode

- `POST`

### HEADERS

| Content-Type | multipart/form-data |
| ------------ | ------------------- |

### Corps de la requête

Un fichier de signature doit être inclus dans la requête sous la clé `signature`.

## Réponse

### Exemple de Requête

```curl
curl -X POST BASE_URL/save/avenant/signature/{uuid}' \
--header 'Content-Type: multipart/form-data' \
--form 'signature=@/chemin/vers/le/fichier/signature.png'
```

### Exemple de Réponse en cas de succès

::: details Corps  

```json
{
    "status": "success"
}
```

:::

### Exemple de Réponse en cas d'erreur

::: details Corps  

```json
{
    "status": "error"
}
```

:::