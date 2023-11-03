### <span style="color:green">GET</span> Reçu

```plaintext
GET BASE_URL/payment/receipt/{uuid}
```

Récupère les détails du reçu pour l'identifiant UUID spécifié.

## Paramètres de la Requête

| Paramètre | Type   | Description                   |
| --------- | ------ | ----------------------------- |
| uuid      | string | Identifiant unique du reçu. |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request GET 'BASE_URL/payment/receipt/{uuid}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "receipt": {
        // Informations sur le reçu
    }
}
```

:::

**Remarque :** La réponse contient les détails du reçu pour l'UUID spécifié. Le contenu est au format HTML pour un rendu approprié.