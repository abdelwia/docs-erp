### <span style="color:green">GET</span> Valider la methode de paiement

````
BASE_URL/service/{apiKey}/validate/order/{uuid}/{avenantUuid}
````

<br/> <br/>

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Validation de la méthode de paiement
Ce guide vous aide à comprendre comment valider la methode de paiement.


## Informations envoyées dans la requête

Lors de la Validation de la méthode de paiement, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/service/{apiKey}/validate/order/{uuid}/{avenantUuid}' \'

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
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
