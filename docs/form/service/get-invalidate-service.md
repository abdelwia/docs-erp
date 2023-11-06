### <span style="color:green">GET</span> Invalider la methode de paiement

````
BASE_URL/service/{apiKey}/invalidate/order/{uuid}
````

<br/> <br/>

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Invalidation de la méthode de paiement
Ce guide vous aide à comprendre comment Invalider la methode de paiement.


## Informations envoyées dans la requête

Lors de l'invalidation de la méthode de paiement, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/service/{apiKey}/invalidate/order/{uuid}' \'

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
