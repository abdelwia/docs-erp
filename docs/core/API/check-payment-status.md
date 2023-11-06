### <span style="color:green">GET</span> Vérifier le Statut d'un Paiement

```plaintext
GET BASE_URL/api/check/payment/status/{uuid}
```

Vérifie le statut d'un paiement.

#### Paramètres de la Requête

| Paramètre | Type   | Description              |
| --------- | ------ | ------------------------ |
| uuid      | string | L'identifiant de la transaction |

#### Exemple de Requête

```txt
txt --location --request GET 'BASE_URL/api/check/payment/status/{uuid}'
```

#### Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "payment": {
        // Informations de la transaction
    }
}
```

:::