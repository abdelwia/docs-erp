### <span style="color:green">GET</span>  État du Paiement

````
BASE_URL/v1/payment/:payment_token
````

# Récupération des Détails de la Transaction de Paiement
Ce guide vous aide à comprendre comment récupérer les détails de la transaction de paiement qui ont été précédemment initialisés à l'aide de l'API.

## Utilisation du Point d'Accès
Pour utiliser ce point d'accès, remplacez `:payment_token` dans l'URL du point d'accès par le jeton de paiement unique attribué à la transaction lors du processus d'initialisation du paiement.

## Informations de Réponse
L'API renverra une réponse JSON contenant les détails de la transaction de paiement, notamment, mais sans s'y limiter, les informations suivantes :

* Le montant du paiement
* La devise dans laquelle le paiement a été effectué
* L'état actuel de la transaction de paiement
* La méthode de paiement utilisée pour la transaction
* La référence unique de la transaction de paiement attribuée par la passerelle de paiement ou le processeur
* Tous les champs personnalisés ou informations supplémentaires fournies par le commerçant
* Une URL pour le traitement du paiement si nécessaire selon la méthode de paiement

## Utilisation
Ce point d'accès peut être utilisé pour récupérer l'état d'une transaction de paiement et la concilier avec vos propres enregistrements internes. Il est utile lorsque vous avez besoin de vérifier les détails de la transaction ou de gérer des litiges ou des demandes de renseignements des clients concernant la transaction.

N'oubliez pas de traiter avec soin toutes les informations sensibles renvoyées par ce point d'accès pour assurer la confidentialité et la sécurité de vos clients.

## EN-TÊTES

| Autorisation | Jeton de Base |
| ------------- | ----------- |

## VARIABLES DE CHEMIN

| payment_token | payment_token |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location 'BASE_URL/v1/payment/payment_token' \
--header 'Authorization: Jeton de Base'
```

## Exemple de Réponse

::: details Corps  

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "payment_token": "91ce0608-16b3-4bf4-a2d8-1ab46e776cc2",
    "merchant_transaction_id": "chaîne",
    "amount": 100,
    "currency": "XOF",
    "description": "Description du paiement",
    "payee": "+22507070707",
    "payment_method": "ORANGE_CI",
    "payment_processing_reference": "CI.230312.1042.343DG",
    "custom_field": "{userId: 12345}",
    "payment_status": "succès",
    "payment_status_code": "200",
    "payment_status_message": "SUCCÈS"
  }
}
```
:::

::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
