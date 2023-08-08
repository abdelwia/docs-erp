### <span style="color:green">GET</span>  Méthodes de Paiement

````
BASE_URL/v1/misc/payin/services
````

Cet endpoint fournit des informations sur les méthodes de paiement disponibles, y compris leurs noms, canaux et les pays où elles sont disponibles.

Chaque méthode est représentée comme un objet au sein du tableau "data". Chaque objet possède les propriétés suivantes :

* `name:` Le nom de la méthode (par exemple, "Crédit Mobile" ou "Transfert d'Argent").
* `channel:` Le canal par lequel la méthode de paiement opère (par exemple, "crédit_mobile" ou "mobile_money").
* `available_countries:` Un tableau de pays où la méthode de paiement est disponible. Chaque pays est représenté comme un objet avec les propriétés :
     *  `name:` Le nom du pays.
     *   `prefix:` L'indicatif téléphonique du pays.
     *   `code:` Le code ISO à deux lettres du pays.


Par exemple, la méthode "Crédit Mobile" est disponible dans de nombreux pays, y compris le Bénin (`+229`, `BJ`), le Burkina Faso (`+226`, `BF`), et ainsi de suite.

La réponse de l'endpoint commence par un message d'état, qui inclut :

*   `code:` Le code de statut HTTP de la réponse (dans ce cas, `200`, indiquant une requête réussie).
*   `message:` Une brève description du statut de réponse (dans ce cas, `OK`).


Ces informations peuvent être utiles pour comprendre quelles types de transferts peuvent être effectués via votre service et où ces transferts peuvent être envoyés.

## HEADERS

| Authorization | Basic TOKEN |
| ------------- | ----------- |



## Exemple de Requête

```curl


curl --location 'BASE_URL/v1/misc/payout/services' \
--header 'Authorization: Basic TOKEN'

```

## Exemple de Réponse

::: details Corps  

```json
{
  "code": 200,
  "message": "OK",
  "data": [
    {
      "name": "Crédit Mobile",
      "channel": "credit_mobile",
      "available_countries": [
        {
          "name": "Bénin",
          "prefix": "+229",
          "code": "BJ"
        },
        {
          "name": "Burkina Faso",
          "prefix": "+226",
          "code": "BF"
        },
        {
          "name": "Cameroun",
          "prefix": "+237",
          "code": "CM"
        },
        {
          "name": "Côte d'Ivoire",
          "prefix": "+225",
          "code": "CI"
        },
        {
          "name": "Guinée (Conakry)",
          "prefix": "+224",
          "code": "GN"
        },
        {
          "name": "Mali",
          "prefix": "+223",
          "code": "ML"
        },
        {
          "name": "Sénégal",
          "prefix": "+221",
          "code": "SN"
        },
        {
          "name": "Togo",
          "prefix": "+228",
          "code": "TG"
        }
      ]
    },
    {
      "name": "Transfert d'Argent",
      "channel": "mobile_money",
      "available_countries": [
        {
          "name": "Bénin",
          "prefix": "+229",
          "code": "BJ"
        },
        {
          "name": "Côte d'Ivoire",
          "prefix": "+225",
          "code": "CI"
        }
      ]
    }
  ]
}

```


:::


::: details Headers (12)

 *Server*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      nginx/1.25.1 

 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   application/json


 *Transfer-Encoding*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      chunked

 *Connection*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  keep-alive
 
 *Vary*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Accept-Encoding



 *X-Powered-By*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  PHP/8.2.7


 *Cache-Control*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; no-cache, private

 
 *Date*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Mer, 12 Juil 2023 17:51:07 GMT
 

  *X-RateLimit-Limit*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  600

  *X-RateLimit-Remaining*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  598

*Access-Control-Allow-Origin*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  *


*Content-Encoding*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  gzip

  
 



:::

