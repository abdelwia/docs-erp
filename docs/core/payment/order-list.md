### <span style="color:green">GET</span> Liste des Paiements pour une Commande

```plaintext
GET BASE_URL/payment/order/list/{uuid}
```

Récupère la liste des paiements associés à une commande spécifiée par l'identifiant UUID.

## Paramètres de la Requête

| Paramètre | Type   | Description                           |
| --------- | ------ | ------------------------------------- |
| uuid      | string | Identifiant unique de la commande.     |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request GET 'BASE_URL/payment/order/list/{uuid}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "payments": [
        {
            // Informations sur le paiement
        },
        // Autres paiements...
    ]
}
```

:::

**Remarque :** La réponse contient la liste des paiements associés à la commande spécifiée par l'UUID. Chaque paiement est représenté par un objet JSON avec les détails pertinents.