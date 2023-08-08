### <span style="color:orange">POST</span> Traitement du paiement

````
BASE_URL/v1/payment/process
````

<br/> <br/> 

# Traitement du paiement
Ce guide vous aide à comprendre comment traiter un paiement qui a déjà été initialisé à l'aide de l'API.


## Informations de réponse

Lors du traitement du paiement, l'API renverra les informations suivantes:


| Paramètre de réponse | Type | Description | 
| ------------- | ----------- |----------- |
| code | entier | Le code d'état HTTP renvoyé par l'API |
| message | chaîne | Un message indiquant le résultat de l'opération API |
| data | objet | Un objet contenant les détails de la transaction de paiement |
| data.payment_token | chaîne | Un identifiant unique pour la transaction de paiement |
| data.merchant_transaction_id | chaîne | L'identifiant unique du commerçant pour la transaction |
| data.amount | entier | Le montant du paiement en unités de devise les plus petites (par exemple, cents) |
| data.currency | chaîne | Le code de devise pour le paiement (au format ISO 4217) |
| data.description | chaîne | Une description du paiement fournie par le commerçant |
| data.payee | chaîne | Le numéro de téléphone du bénéficiaire au format E.164 (par exemple, +2250707070707) |
| data.amount | entier | Le montant du paiement en unités de devise les plus petites (par exemple, cents) |
| data.payment_method | chaîne | La méthode de paiement utilisée pour la transaction |
| data.payment_type | chaîne | Le type de paiement effectué |
| data.payment_reference | chaîne | Une référence unique pour la transaction de paiement (assignée par la passerelle de paiement ou le processeur) |
| data.custom_field | chaîne | Un champ personnalisé ou des informations supplémentaires fournies par le commerçant |
| data.payment_status | chaîne | Le statut actuel de la transaction de paiement |
| data.payment_message | chaîne | Un message associé au statut du paiement (par exemple, "succès", "échec") |
| data.payment_processing_url | chaîne | Une URL pour le traitement du paiement (si nécessaire pour la méthode de paiement) |

Ces informations de réponse peuvent être utilisées par le commerçant pour mettre à jour le statut de la transaction de leur côté, fournir un reçu au client ou gérer les étapes suivantes nécessaires en fonction du statut du paiement.


## EN-TÊTES

| Authorization | Basic TOKEN |
| ------------- | ----------- |


## Corps

###### brut (json)


```json

{
    "payment_token": "payment_token",
    "otp_code": "1234",
    "payee": "+2250707895086",
    "payment_method": "ORANGE_CI"
}
```






## Exemple de demande

```curl
curl --location 'BASE_URL/v1/payment/process' \
--header 'Authorization: Basic TOKEN' \
--data '{
    "payment_token": "91ce0608-16b3-4bf4-a2d8-1ab46e776cc2",
    "otp_code": "1234"
}'

```


## Exemple de réponse ([Succès])

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
    "payment_reference": "CI.230312.1042.343DG",
    "custom_field": "{userId: 12345}",
    "payment_status": "success",
    "payment_message": "SUCCÈS",
    "payment_processing_url": null
  }
}
```
:::


::: details En-têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::



## Exemple de réponse ([en attente])

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
    "payment_reference": "CI.230312.1042.343DG",
    "custom_field": "{userId: 12345}",
    "payment_status": "en attente",
    "payment_status_code": "100",
    "payment_status_message": "EN_ATTENTE_DU_PAIEMENT_DU_CLIENT",
    "payment_processing_url": null
  }
}
```
:::


::: details En-têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::



## Exemple de réponse ([Échec])

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
    "payment_reference": "CI.230312.1042.343DG",
    "custom_field": "{userId: 12345}",
    "payment_status": "échec",
    "payment_status_code": "300",
    "payment_status_message": "SOLDE_INSUFFISANT",
    "payment_processing_url": null
  }
}
```
:::


::: details En-têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::


