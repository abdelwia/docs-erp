

### <span style="color:green">GET</span> Informations sur le Pack

```plaintext
GET BASE_URL/pack/get/data/{id}
```

Récupère les informations sur un pack spécifié.

## Paramètres de la Requête

| Paramètre | Type   | Description         |
| --------- | ------ | ------------------- |
| id        | string | L'ID du pack.       |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request GET 'BASE_URL/pack/get/data/{id}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "pack": {
        // Informations sur le pack
    }
}
```

:::
