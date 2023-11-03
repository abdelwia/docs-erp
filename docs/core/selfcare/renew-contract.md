### <span style="color:orange">POST</span> Renouveler le contrat
````
BASE_URL/selfcare/renew/contract/{uuid}
````

Permet de renouveler un contrat spécifique identifié par son UUID.

## Paramètres de la Requête

| Paramètre | Type   | Description                                      |
| --------- | ------ | ------------------------------------------------ |
| `uuid`    | string | L'identifiant unique du contrat à renouveler.    |

## Corps de la Requête

Le corps de la requête ne doit pas contenir de données spécifiques.

## En-Têtes

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location BASE_URL/selfcare/renew/contract/{uuid}' \
--header 'Authorization: Bearer TOKEN' \
--request POST \
--header 'Content-Type: application/json'
```

## Réponse

En cas de succès, la réponse sera un JSON avec les détails du contrat renouvelé.

```json
{
    "status": "success",
    "order": {
        // Détails de l'ordre
    },
    "paymentMethods": [
        // Méthodes de paiement
    ]
}
```

En cas d'erreur, la réponse sera un JSON avec le statut et un message d'erreur.

```json
{
    "status": "error",
    "offer": null
}
```
