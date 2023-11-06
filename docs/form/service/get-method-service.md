### <span style="color:green">GET</span> Définir une methode de paiement

````
BASE_URL/service/{apiKey}/set/oder/payment/method/{uuid}/{method}
````

<br/> <br/>

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Définition d'une méthode de paiement
Ce guide vous aide à comprendre comment Définir une methode de paiement.


## Informations envoyées dans la requête

Lors de la définition d'une méthode de paiement, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/service/{apiKey}/set/oder/payment/method/{uuid}/{method}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "order": {}
    },
    200,
    {},
    {
        "groups": {
            "0":"order", 
            "1":"infos",
            "2":"manager"
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
