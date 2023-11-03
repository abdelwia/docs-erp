### <span style="color:yellow">PUT</span> Modifier le Type d'Item

```plaintext
PUT BASE_URL/item/type/edit
```

Modifie un type d'item.

## Paramètres de la Requête

| Paramètre | Type   | Description                        |
| --------- | ------ | ---------------------------------- |
| item      | object | Les détails du type d'item à éditer. |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Corps de la Requête

```json
{
    "item": {
        // Les détails du type d'item à éditer
    }
}
```

## Exemple de Requête

```txt
txt --location --request PUT 'BASE_URL/item/type/edit' \
--header 'Authorization: Bearer TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "item": {
        // Les détails du type d'item à éditer
    }
}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "itemType": {
        // Détails du type d'item modifié
    }
}
```

:::

