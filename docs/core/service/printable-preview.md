### <span style="color:green">GET</span> Aperçu imprimable

````
BASE_URL/printable/preview/{itemUuid}/{printableUuid}
````

## Description

Cette route permet d'obtenir un aperçu imprimable pour un élément (`itemUuid`) et un imprimable spécifique (`printableUuid`).

## Paramètres de l'URL

| Paramètre       | Type   | Description                                      |
| --------------- | ------ | ------------------------------------------------ |
| `itemUuid`      | string | L'UUID de l'élément.                             |
| `printableUuid` | string | L'UUID de l'imprimable spécifique à afficher.     |

## Requête

### Méthode

- `GET`

## Réponse

### Exemple de Requête

```curl
curl --location BASE_URL/printable/preview/{itemUuid}/{printableUuid}
```

### Exemple de Réponse en cas de succès

Le contenu de l'aperçu imprimable sera renvoyé.

### Exemple de Réponse en cas d'erreur

::: details Corps  

```json
{
    "status": "error",
    "message": "Message d'erreur"
}
```

:::
