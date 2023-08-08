### <span style="color:green">GET</span>  État du Transfert

````
BASE_URL/v1/payout/transfer/:transfer_token
````


# Récupérer les Détails du Transfert
Ce guide vous aide à comprendre comment récupérer les détails d'une transaction de transfert qui a été précédemment initialisée à l'aide de l'API OrizonPay.

## Utilisation de l'Endpoint
Pour utiliser cet endpoint, remplacez `:transfer_token` dans l'URL de l'endpoint par le jeton unique de paiement attribué à la transaction lors du processus d'initialisation du paiement.



## Utilisation

Cet endpoint peut être utilisé pour récupérer le statut d'une transaction de transfert et pour la réconcilier avec vos propres enregistrements internes. Il est utile lorsque vous avez besoin de vérifier les détails de la transaction ou de gérer tout litige ou toute demande de renseignements de la part des clients concernant la transaction.

N'oubliez pas de manipuler avec précaution toutes les informations sensibles renvoyées par cet endpoint pour garantir la confidentialité et la sécurité de vos clients.




## EN-TÊTES

| Autorisation | Jeton de Base |
| ------------- | ----------- |

## VARIABLES D'URL

| payment_token | 992883ba-ce2b-46fd-9fc3-4154c77f692f |
| ------------- | ----------- |


## Exemple de Requête

```curl


curl --location 'BASE_URL/v1/payout/transfer/992883ba-ce2b-46fd-9fc3-4154c77f692f' \
--header 'Authorization: Basic TOKEN'

```

## Exemple de Réponse 

::: details Corps  

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "transfer_token": "992883ba-ce2b-46fd-9fc3-4154c77f692f",
    "merchant_transaction_id": "1612a5a0-dfc5-4175-ab62-8f657d689670",
    "country_name": "Côte d'Ivoire",
    "country_code": "CI",
    "amount": 500,
    "description": "Description du paiement",
    "channel": "mobile_money",
    "receiver_account": "+2250707000200",
    "receiver_first_name": "Amidou",
    "receiver_last_name": "Amada",
    "webhook_url": "https://webhook.site/3533c510-719c-4f52-9c2d-be163501db09",
    "custom_field": "chaîne_personnalisée",
    "status": "nouveau"
  }
}
```
:::


::: details En-têtes (12)

 *Server*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      nginx/1.25.1 

 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   application/json


 *Transfer-Encoding*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      chunked

 *Connection*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  keep-alive
 
 *Vary*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Accept-Encoding



 *X-Powered-By*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  PHP/8.2.8


 *Cache-Control*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; no-cache, private

 
 *Date*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mar, 18 Jul 2023 09:57:51 GMT
 

  *X-RateLimit-Limit*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  600

  *X-RateLimit-Remaining*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  598

*Access-Control-Allow-Origin*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  *


*Content-Encoding*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  gzip

  
 



:::

