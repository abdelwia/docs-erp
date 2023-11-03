### <span style="color:orange">POST</span> Éditer la Propriété Personnalisée de l'Item

```plaintext
POST BASE_URL/item/property/edit/custom
```

Édite une propriété personnalisée d'item.

## Paramètres de la Requête

| Paramètre     | Type   | Description                        |
| ------------- | ------ | ---------------------------------- |
| itemProperty  | object | Les détails de la propriété à éditer. |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Corps de la Requête

```json
{
    "itemProperty": {
        // Les détails de la propriété à éditer
    }
}
```

## Exemple de Requête

```txt
txt --location --request POST 'BASE_URL/item/property/edit/custom' \
--header 'Authorization: Bearer TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "itemProperty": {
        // Les détails de la propriété à éditer
    }
}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "message": "La propriété a été modifiée",
    "properties": {
        // Détails des propriétés modifiées
    }
}
```

:::

