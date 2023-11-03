
### <span style="color:green">GET</span> Liste des Transactions de Paiement

```plaintext
GET BASE_URL/payment/list/{start}/{end}
```

Récupère la liste des transactions de paiement entre les dates spécifiées.

## Paramètres de la Requête

| Paramètre | Type   | Description                      |
| --------- | ------ | -------------------------------- |
| start     | string | Date de début (au format YYYY-MM-DD). |
| end       | string | Date de fin (au format YYYY-MM-DD).   |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request GET 'BASE_URL/payment/list/{start}/{end}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "payments": [
        {
            // Informations sur la transaction de paiement
        },
        // ...
    ]
}
```

:::

**Remarque :** La réponse contient la liste des transactions de paiement pour la période spécifiée.

