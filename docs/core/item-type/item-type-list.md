
### <span style="color:green">GET</span> Liste des Types d'Item

```plaintext
GET BASE_URL/item/type/list/{slug}
```

Récupère la liste des types d'item.

## Paramètres de la Requête

| Paramètre | Type   | Description               |
| --------- | ------ | ------------------------- |
| slug      | string | Le slug de la branche.    |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```txt
txt --location --request GET 'BASE_URL/item/type/list/{slug}' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "itemTypes": [
        // Liste des types d'item
    ]
}
```

:::

