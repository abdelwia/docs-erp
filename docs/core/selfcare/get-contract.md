### <span style="color:green">GET</span> Obtenir un contrat 
````
BASE_URL/contract/{uuid}
````

Permet d'obtenir les détails d'un contrat spécifique identifié par son UUID.

## Paramètres de la Requête

| Paramètre | Type   | Description                                      |
| --------- | ------ | ------------------------------------------------ |
| `uuid`    | string | L'identifiant unique du contrat à obtenir.       |

## En-Têtes

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location BASE_URL/contract/{uuid}'
```

## Réponse

En cas de succès, la réponse sera un JSON contenant le statut et les détails du contrat.

```json
{
    "status": "success",
    "contract": {
        // Détails du contrat
    }
}
```

Si le contrat avec l'UUID spécifié est trouvé, les détails du contrat seront renvoyés. Sinon, le champ "contract" sera null.
