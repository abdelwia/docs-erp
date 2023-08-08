### <span style="color:orange">POST</span> Initialisation du paiement

````
BASE_URL/v1/payment/init
````

<br/> <br/> 

# Initier un paiement

Ce guide vous aidera à initier un paiement à n'importe quel opérateur pris en charge par l'API V1 de Magma OnePay.


## Corridors

Voici les pays et leurs méthodes de paiement prises en charge :

| Code de pays | Nom du pays | Prend en charge le portefeuille mobile ? | Prend en charge la carte de crédit ? | Devise | 
| ------------- | ----------- |----------- |----------- |----------- |
| BJ | Bénin | Oui | Oui | XOF | 
| CI | Côte d'Ivoire | Oui | Oui | XOF | 


## Méthodes de paiement disponibles

Voici les méthodes de paiement disponibles par pays et leurs limites de transaction minimale et maximale :



| Code de pays | Nom du pays | Méthodes de paiement | Montant min | Montant max | 
| ------------- | ----------- |----------- |----------- |----------- |
| BJ | Bénin | CREDIT_CARD, MOOV_BJ, MTN_BJ | 200 | 1500000 | 
| CI | Côte d'Ivoire | CREDIT_CARD, MOOV_CI, MTN_CI, ORANGE_CI, WAVE_CI | 200 | 1500000 | 


## Statuts de paiement

Les paiements peuvent avoir l'un des statuts suivants :


| Statut | Description | 
| ------------- | ----------- |
| nouveau | Le paiement vient d'être créé | 
| succès | Le paiement a réussi | 
| en attente | Le paiement est en attente | 
| échec | Le paiement a échoué | 
| remboursé | Le paiement a été remboursé | 
| annulé | Le paiement a été annulé | 


## Devises valides

Voici les devises valides :


| Devise | Description | 
| ------------- | ----------- |
| XOF | Union économique et monétaire ouest-africaine | 
| EUR | Euro | 


## Numéro de téléphone du bénéficiaire valide

Le numéro de téléphone du bénéficiaire doit être au format E.164. Cela commence par un signe plus (+), suivi du code du pays, puis du numéro de téléphone. Par exemple, un numéro pour la Côte d'Ivoire (CIV) ressemblerait à ceci : +2250102030405.


## Chaînes de canal valides

Voici les chaînes de canal valides :


| Canal | Description | 
| ------------- | ----------- |
| mobile_money | Paiement effectué via un service d'argent mobile | 
| credit_card | Paiement effectué avec une carte de crédit | 
| wave | Paiement effectué via une application de portefeuille mobile appelée Wave | 


## Informations de demande

Voici les paramètres que vous devez inclure dans votre demande :


| Paramètre | Type | Est obligatoire | Description | 
| ------------- | ----------- |----------- |----------- |
| merchant_transaction_id | chaîne | Oui | L'identifiant unique du commerçant pour la transaction | 
| montant	 | entier | Oui | Le montant du paiement | 
| devise	 | chaîne de devise valide | Oui | La devise dans laquelle le paiement est effectué | 
| description	 | chaîne | Non | Une brève description de la transaction de paiement |
| bénéficiaire	 | numéro de téléphone de bénéficiaire valide | Oui | Numéro de téléphone du bénéficiaire | 
| bénéficiaire_prenom	 | chaîne | Non | Prénom du bénéficiaire | 
| bénéficiaire_nom	 | chaîne | Non | Nom de famille du bénéficiaire | 
| canal	 | chaîne de canal valide | Oui | Le canal utilisé pour effectuer le paiement | 
| webhook_url	 | chaîne | Non | L'URL à laquelle la confirmation de paiement sera envoyée | 
| champ_personnalisé	 | chaîne | Non | Un champ personnalisé facultatif pour des informations supplémentaires | 


Veuillez noter que vous pouvez forcer l'utilisation d'une méthode de paiement en ajoutant "payment_method" avec une méthode valide



## Informations de réponse
Voici les paramètres que vous recevrez dans votre réponse :


| Paramètre de réponse | Type | Description | 
| ------------- | ----------- |----------- |
| code | entier | Le code d'état HTTP renvoyé par l'API |
| message | chaîne | Un message indiquant le résultat de l'opération API |
| data | objet | Un objet contenant les détails du traitement du paiement |
| data.payment_status | chaîne | Le statut actuel du paiement |
| data.payment_token | chaîne | Un identifiant unique pour la transaction de paiement |
| data.payment_method | chaîne | La méthode de paiement utilisée pour la transaction |
| data.payment_type | chaîne | Le type de paiement effectué |
| data.country | chaîne | Le pays où le paiement a été effectué |
| data.country_prefix | chaîne | Le préfixe du code du pays pour le numéro de mobile |
| data.channel | chaîne | Le canal utilisé pour initier le paiement |
| data.payment_meta | objet | Des métadonnées supplémentaires liées à la transaction de paiement |
| data.payment_meta.otp | booléen | Indique si le paiement nécessite un code OTP |
| data.payment_meta.otp_length | entier | La longueur du code OTP requis |
| data.payment_meta.redirect_customer_to_url_processing | booléen | Indique si le client doit être redirigé vers une URL pour le traitement |
| data.process_request_data | objet | Données supplémentaires requises pour le traitement du paiement |
| data.process_request_data.payment_token | booléen | Indique si un jeton de paiement est requis pour le traitement du paiement |
| data.process_request_data.otp_code | booléen | Indique si un code OTP est requis pour le traitement du paiement |
| data.process_request_data.payment_token | chaîne	 | Instructions pour le client sur la façon de finaliser le paiement |




## Simulation des statuts de paiement : Phase de test uniquement

L'API vous permet de simuler différents statuts de paiement pendant la phase de test. Les modèles ci-dessous déclenchent différents états et réponses de paiement, vous permettant de vérifier que votre système gère correctement différentes situations.

### Test du canal "mobile_money"

Voici une liste de numéros de téléphone de test et de leurs statuts de paiement associés :

| Bénéf

iciaire | Type de transaction | Statut final | 
| ------------- | ----------- |----------- |
| +2250707000200 | Étape unique | succès |
| +2250707000201 | Deux étapes | succès |
| +2250707000205 | Étape unique | échec avec une erreur générique |
| +2250707000202 | Deux étapes | échec avec une erreur spécifique |
| +2250707000203 | Deux étapes | échec avec une erreur spécifique |
| +2250707000204 | Deux étapes | échec avec une erreur générique |
| +2250707000206 | Étape unique | échec avec une erreur spécifique |
| +2250707000206 | Étape unique | échec avec une erreur spécifique |
| Tout autre numéro | Deux étapes | échec avec une erreur générique |

## AUTORISATION 
###### Jeton Bearer

| Jeton |  TOKEN |
| ------------- | ----------- |

## EN-TÊTES

| Authorization | Basic TOKEN |
| ------------- | ----------- |


## Corps

###### brut (json)


```json

{
    "merchant_transaction_id": "845bf095-da3c-4516-98ed-b29c0e59df79",
    "amount": 500,
    "currency": "XOF",
    "description": "Description du paiement",
    //"payee": "+2250707000200",
    "payee_first_name": "Amidou",
    "payee_last_name": "Amada",
    "channel": "mobile_money",
    "webhook_url": "https://webhook.site/3533c510-719c-4f52-9c2d-be163501db09",
    "success_url": "http://mon-url1.com",
    "error_url": "http://mon-url1.com",
    "custom_field": "n'importe_quelle_chaine"
}

```






## Exemple de demande

```curl
curl --location 'BASE_URL/v1/payment/init' \
--header 'Authorization: Basic TOKEN' \
--data '{
	"merchant_transaction_id": "chaîne",
    "amount": "entier",
	"currency": "chaîne_de_devise_valide",
    "description": "Description du paiement",
    "payee": "numéro_de_téléphone_de_bénéficiaire_valide",
    "payee_fist_name": "prenom_du_beneficiaire",
    "payee_last_name": "nom_de_famille_du_beneficiaire",
	"channel": "chaîne_de_canal_valide",
	"webhook_url": "http://mon-url.com",
    "custom_field": "n'importe_quelle_chaine"
}'

```


## Exemple de réponse ([Succès] [type_otp])

::: details Corps  

```json
    {
  "code": 201,
  "message": "CREATED",
  "data": {
    "payment_token": "be45970d-3888-4272-acc4-d52561da3758",
    "payment_status": "new",
    "payment_method": "ORANGE_CI",
    "payment_type": "direct",
    "country": "CI",
    "country_prefix": "+225",
    "channel": "mobile_money",
    "payment_url": "https://gateway.page/pay/be45970d-3888-4272-acc4-d52561da3758",
    "meta": {
      "otp": false,
      "otp_length": 0,
      "redirect_customer_to_url_processing": false,
      "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
      "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
    }
  }
}
```
:::


::: details En-têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::



## Exemple de réponse ([Succès] [type_direct])

::: details Corps  

```json
    {
  "code": 201,
  "message": "CREATED",
  "data": {
    "payment_token": "be45970d-3888-4272-acc4-d52561da3758",
    "payment_status": "new",
    "payment_method": "ORANGE_CI",
    "payment_type": "direct",
    "country": "CI",
    "country_prefix": "+225",
    "channel": "mobile_money",
    "payment_url": "https://gateway.page/pay/be45970d-3888-4272-acc4-d52561da3758",
    "meta": {
      "otp": false,
      "otp_length": 0,
      "redirect_customer_to_url_processing": false,
      "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
      "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
    }
  }
}
```
:::


::: details En-têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::



## Exemple de réponse ([Succès] [type_direct])

::: details Corps  

```json
    {
  "code": 201,
  "message": "CREATED",
  "data": {
    "payment_token": "be45970d-3888-4272-acc4-d52561da3758",
    "payment_status": "new",
    "payment_method": "ORANGE_CI",
    "payment_type": "direct",
    "country": "CI",
    "country_prefix": "+225",
    "channel": "mobile_money",
    "payment_url": "https://gateway.page/pay/be45970d-3888-4272-acc4-d52561da3758",
    "meta": {
      "otp": false,
      "otp_length": 0,
      "redirect_customer_to_url_processing": false,
      "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
      "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
    }
  }
}
```
:::


::: details En-têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::

