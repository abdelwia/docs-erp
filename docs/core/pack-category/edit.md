### <span style="color:yellow">PUT</span> Modifier la Catégorie de Pack

```plaintext
PUT BASE_URL/pack/category/edit
```

Modifie une catégorie de pack.

## Paramètres de la Requête

| Paramètre | Type   | Description               |
| --------- | ------ | ------------------------- |
| pc        | object | Les détails de la catégorie de pack à éditer. |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Corps de la Requête

```json
{
    "pc": {
        // Les détails de la catégorie de pack à éditer
    }
}
```

## Exemple de Requête

```curl
curl --location --request PUT 'BASE_URL/pack/category/edit' \
--header 'Authorization: Bearer TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "pc": {
        // Les détails de la catégorie de pack à éditer
    }
}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "packCategory": {
        // Détails de la catégorie de pack modifiée
    }
}
```

:::

