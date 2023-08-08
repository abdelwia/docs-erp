### <span style="color:orange">POST</span> Effectuer un Transfert

````
BASE_URL/v1/payout/transfer
````

# Effectuer un Transfert

Ce guide vous aidera à effectuer un transfert vers n'importe quel corridor disponible.

Ces canaux sont : mobile_money, airtime

## Statuts de Transfert
Un transfert peut avoir l'un des statuts suivants:


| Statut| Description | 
| ------------- | ----------- |
| nouveau | Le paiement vient d'être créé | 
| succès | Le paiement a réussi | 
| en attente | Le paiement est en attente | 
| échec | Le paiement a échoué | 
| remboursé | Le paiement a été remboursé| 
| annulé | Le paiement a été annulé|


## HEADERS

| Authorization | Basic TOKEN |
| ------------- | ----------- |


## Corps

###### raw (json)


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
    "custom_field": "chaîne_personnalisée"
}

```





## Exemple de Requête

```curl


curl --location 'BASE_URL/v1/payout/transfer' \
--header 'Authorization: Basic TOKEN' \
--data '{
    "merchant_transaction_id": "1737c07c-3026-4942-86e8-bd59ee3b0b13",
    "amount": 500,
    "currency": "XOF",
    "description": "Description du paiement",
    "channel": "mobile_money",
    "country_code": "CI",
    "receiver_account": "+2250707000200",
    "receiver_first_name": "Amidou",
    "receiver_last_name": "Amada",
    "webhook_url": "https://webhook.site/3533c510-719c-4f52-9c2d-be163501db09",
    "custom_field": "chaîne_personnalisée"
}'

```

## Exemple de Réponse

::: details Corps  

```json

{
  "code": 201,
  "message": "CRÉÉ",
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


::: details Headers (10)

 *Server*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      nginx/1.25.1 

 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   application/json


 *Transfer-Encoding*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      chunked

 *Connection*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  keep-alive



 *X-Powered-By*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  PHP/8.2.8


 *Cache-Control*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; no-cache, private

 
 *Date*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mar, 18 Juil 2023 09:46:18 GMT
 

  *X-RateLimit-Limit*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  600

  *X-RateLimit-Remaining*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  599

*Access-Control-Allow-Origin*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  *



  
 



:::

