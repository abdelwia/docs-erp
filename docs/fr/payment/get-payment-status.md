### <span style="color:green">GET</span> État du paiement

````
BASE_URL/v1/payment/:payment_token
````


# Récupérer les détails de la transaction de paiement
Ce guide vous aide à comprendre comment récupérer les détails de la transaction de paiement qui ont été préalablement initialisés à l'aide de l'API.

## Utilisation du point de terminaison
Pour utiliser ce point de terminaison, remplacez `:payment_token` dans l'URL du point de terminaison par le jeton de paiement unique attribué à la transaction lors du processus d'initialisation du paiement.

## Informations de réponse
L'API renverra une réponse JSON contenant les détails de la transaction de paiement, comprenant notamment les informations suivantes :

* Le montant du paiement
* La devise dans laquelle le paiement a été effectué
* Le statut actuel de la transaction de paiement
* La méthode de paiement utilisée pour la transaction
* La référence unique de la transaction de paiement attribuée par la passerelle de paiement ou le processeur
* Tout champ personnalisé ou information supplémentaire fournie par le commerçant
* Une URL pour le traitement du paiement si nécessaire pour la méthode de paiement


## Utilisation
Ce point de terminaison peut être utilisé pour récupérer le statut d'une transaction de paiement et pour concilier le paiement avec vos propres enregistrements internes. Il est utile lorsque vous devez vérifier les détails de la transaction ou gérer tout litige ou demande de renseignements de la part des clients concernant la transaction.

N'oubliez pas de traiter avec précaution toutes les informations sensibles renvoyées par ce point de terminaison afin de garantir la confidentialité et la sécurité de vos clients.


## EN-TÊTES

| Authorization | Basic TOKEN |
| ------------- | ----------- |

## VARIABLES DE CHEMIN

| payment_token | payment_token |
| ------------- | ----------- |


## Exemple de demande

```curl


curl --location 'BASE_URL/v1/payment/payment_token' \
--header 'Authorization: Basic TOKEN'

```

## Exemple de réponse ([Échec] [direct_type])

::: details Corps  

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "payment_token": "91ce0608-16b3-4bf4-a2d8-1ab46e776cc2",
    "merchant_transaction_id": "string",
    "amount": 100,
    "currency": "XOF",
    "description": "Description du paiement",
    "payee": "+22507070707",
    "payment_method": "ORANGE_CI",
    "payment_processing_reference": "CI.230312.1042.343DG",
    "custom_field": "{userId: 12345}",
    "payment_status": "success",
    "payment_status_code": "200",
    "payment_status_message": "SUCCÈS"
  }
}
```
:::


::: details En-têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::

