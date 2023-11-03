
### <span style="color:green">GET</span> Liste des Modèles de Détails Premium

```plaintext
GET BASE_URL/premium/detail/model/list/{branchSlug}
```

Récupère la liste des modèles de détails premium pour une succursale donnée.

## Paramètres de la Requête

| Paramètre  | Type   | Description                     |
| ---------- | ------ | ------------------------------- |
| branchSlug | string | Le slug de la succursale.       |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request GET 'BASE_URL/premium/detail/model/list/{branchSlug}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "premiumDetailModels": [
        // Liste des modèles de détails premium
    ]
}
```

:::