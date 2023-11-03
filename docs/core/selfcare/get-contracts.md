### <span style="color:green">GET</span> Obtenir les contrats d'utilisateur
````
BASE_URL/contracts
````

Permet d'obtenir les contrats associés à l'utilisateur actuellement connecté.

## Paramètres de la Requête

Aucun paramètre requis.

## En-Têtes

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location BASE_URL/contracts'
```

## Réponse

En cas de succès, la réponse sera un JSON contenant le statut et la liste des contrats.

```json
{
    "status": "success",
    "contracts": [
        // Liste des contrats
    ]
}
```

La liste des contrats sera au format JSON et contiendra les détails de chaque contrat, tels que l'alias, les étiquettes d'actifs, les identifiants d'actifs, etc.

