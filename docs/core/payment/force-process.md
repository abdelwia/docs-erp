### <span style="color:orange">POST</span> Forcer le Traitement de la Transaction

```plaintext
POST BASE_URL/payment/force/process/{uuid}
```

Force le traitement de la transaction associée à l'UUID spécifié.

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
curl --location --request POST 'BASE_URL/payment/force/process/{uuid}' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

```json
{
    "status": "success",
    "contract": "uuid_du_contrat"
}
```

**Remarques :**

- Cette route permet de forcer le traitement d'une transaction.
- Un utilisateur doit avoir le rôle administrateur pour pouvoir utiliser cette fonctionnalité.
- La transaction est mise à jour avec un statut de succès et une date de paiement est enregistrée.
- En fonction du type de transaction (commande ou avenant), le traitement approprié est effectué.
- Le bénéficiaire de l'avenant est également mis à jour avec l'identifiant de l'utilisateur qui a émis le reçu.
- Un reçu est généré pour la transaction.
- Le UUID du contrat associé à la transaction est renvoyé en réponse.