### <span style="color:orange">POST</span> Renouveler les offres de contrat
````
BASE_URL/selfcare/renew/contract/offers/{uuid}
````

Permet de renouveler les offres de contrat pour un élément spécifique identifié par son UUID.

## Paramètres de la Requête

| Paramètre | Type   | Description                                      |
| --------- | ------ | ------------------------------------------------ |
| `uuid`    | string | L'identifiant unique de l'élément à renouveler.  |

## Corps de la Requête

Le corps de la requête doit être un JSON contenant les informations nécessaires au renouvellement des offres.

```json
{
    "items": [
        // Liste des objets à renouveler
    ],
    "insurer": {
        "id": 123,
        "slug": "nom-de-l-assureur"
    },
    "branch": "nom-de-la-branche",
    "partner": null
}
```

## En-Têtes

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location BASE_URL/selfcare/renew/contract/offers/{uuid}' \
--header 'Authorization: Bearer TOKEN' \
--request POST \
--header 'Content-Type: application/json' \
--data-raw '{
    "items": [
        // Liste des objets à renouveler
    ],
    "insurer": {
        "id": 123,
        "slug": "nom-de-l-assureur"
    },
    "branch": "nom-de-la-branche",
    "partner": null
}'
```

## Réponse

En cas de succès, la réponse sera un JSON avec le statut et les garanties renouvelées.

```json
{
    "statut": "succès",
    "garanties": {
        // garantie   
    }
}
```

En cas d'erreur, la réponse sera un JSON avec le statut et un message d'erreur.

```json
{
    "statut": "erreur",
    "message": "Cette offre n'est plus disponible"
}
```
