
### <span style="color:yellow">PUT</span> Mettre à Jour les Classements des Types d'Item

```plaintext
PUT BASE_URL/item/type/update/ranks
```

Met à jour les classements des types d'item.

## Paramètres de la Requête

| Paramètre | Type  | Description                       |
| --------- | ----- | --------------------------------- |
| ranks     | array | Un tableau contenant les nouveaux classements. |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Corps de la Requête

```json
{
    "ranks": [
        // Nouveaux classements
    ]
}
```

## Exemple de Requête

```txt
txt --location --request PUT 'BASE_URL/item/type/update/ranks' \
--header 'Authorization: Bearer TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "ranks": [
        // Nouveaux classements
    ]
}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "itemTypes": [
        // Liste des types d'item mise à jour
    ]
}
```

:::
