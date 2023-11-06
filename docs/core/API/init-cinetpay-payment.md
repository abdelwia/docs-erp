

### <span style="color:green">GET</span> Initialiser le Paiement avec Cinetpay

```plaintext
GET BASE_URL/api/init/cinetpay/checkout/{uuid}
```

Initialise le paiement avec Cinetpay pour une commande spécifique.

#### Paramètres de la Requête

| Paramètre | Type   | Description              |
| --------- | ------ | ------------------------ |
| uuid      | string | L'identifiant de la commande |

#### Exemple de Requête

```txt
txt --location --request GET 'BASE_URL/api/init/cinetpay/checkout/{uuid}'
```

#### Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "url": "URL_DU_PAIEMENT_CINETPAY"
}
```

:::