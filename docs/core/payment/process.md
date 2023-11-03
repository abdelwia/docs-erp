### <span style="color:orange">POST</span> Traiter une Transaction

```plaintext
POST BASE_URL/payment/process/{uuid}
```

Traite la transaction associée à l'UUID spécifié.

## Paramètres de la Requête

| Paramètre | Type   | Description                   |
| --------- | ------ | ----------------------------- |
| uuid      | string | Identifiant unique de la transaction. |

## En-têtes

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Corps de la Requête

Aucun corps de requête requis.

## Exemple de Requête

```curl
curl --location --request POST 'BASE_URL/payment/process/{uuid}' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

```json
{
    "status": "success"
}
```

**Remarques :**

- Cette route permet de traiter une transaction.
- La transaction est recherchée en fonction de l'UUID spécifié.
- Si la transaction n'a pas le statut "Succès", une exception est levée.
- En fonction du type de transaction (commande ou avenant), le traitement approprié est effectué.
- Un reçu est généré pour la transaction.
- Un statut de succès est renvoyé en réponse.