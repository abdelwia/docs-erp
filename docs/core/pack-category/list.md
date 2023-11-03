
### <span style="color:green">GET</span> Liste des Catégories de Pack

```plaintext
GET BASE_URL/pack/category/list/{slug}
```

Récupère la liste des catégories de pack pour une branche spécifiée.

## Paramètres de la Requête

| Paramètre | Type   | Description               |
| --------- | ------ | ------------------------- |
| slug      | string | Le slug de la branche.    |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request GET 'BASE_URL/pack/category/list/{slug}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "packCategories": [
        // Liste des catégories de pack
    ]
}
```

:::

