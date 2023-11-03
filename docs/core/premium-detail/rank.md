### <span style="color:orange">POST</span> Mettre à Jour les Classements des Modèles de Détails Premium

```plaintext
POST BASE_URL/premium/detail/model/update/ranks
```

Met à jour les classements des modèles de détails premium.

## Paramètres de la Requête

| Paramètre | Type   | Description                           |
| --------- | ------ | ------------------------------------- |
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

```curl
curl --location --request POST 'BASE_URL/premium/detail/model/update/ranks' \
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
    "status": "success"
}
```

:::
