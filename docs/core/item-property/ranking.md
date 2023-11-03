### <span style="color:orange">POST</span> Mettre à Jour les Classements des Propriétés

```plaintext
POST BASE_URL/item/property/update/ranks
```

Met à jour les classements des propriétés d'item.

## Paramètres de la Requête

| Paramètre | Type   | Description                                  |
| --------- | ------ | -------------------------------------------- |
| ranks     | array  | Un tableau contenant les nouveaux classements. |

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
txt --location --request POST 'BASE_URL/item/property/update/ranks' \
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
    "itemProperties": [
        // Liste des propriétés d'item mise à jour
    ]
}
```

:::

