
### <span style="color:green">GET</span> Obtenir le lien de paiement pour l'avenant
````
BASE_URL/get/avenant/payment/link/{uuid}/{method}
````

Permet d'obtenir un lien de paiement pour l'avenant spécifique identifié par son UUID.

## Paramètres de la Requête

| Paramètre | Type   | Description                                      |
| --------- | ------ | ------------------------------------------------ |
| `uuid`    | string | L'identifiant unique de l'avenant.               |
| `method`  | string | La méthode de paiement à utiliser.               |

## En-Têtes

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location BASE_URL/get/avenant/payment/link/{uuid}/{method}'
```

## Réponse

En cas de succès, la réponse sera un JSON contenant le statut et le lien de paiement.

```json
{
    "status": "success",
    "link": "URL_du_lien_de_paiement"
}
```
