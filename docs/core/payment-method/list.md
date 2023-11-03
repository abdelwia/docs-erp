### <span style="color:green">GET</span> Liste des Méthodes de Paiement

```plaintext
GET BASE_URL/payment/method/list
```

Récupère la liste de toutes les méthodes de paiement.


## Exemple de Requête

```curl
curl --location --request GET 'BASE_URL/payment/method/list'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "methods": [
        {
            // détails de la méthode de paiement
        },
        // ...
    ]
}
```

:::

**Remarque :** La réponse contient un tableau de méthodes de paiement avec leurs détails.

