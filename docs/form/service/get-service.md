### <span style="color:green">GET</span> Récupérer un devis

````
BASE_URL/service/{apiKey}/get/order/{uuid}
````

<br/> <br/>

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Récupération d'un devis
Ce guide vous aide à comprendre comment récupérer un devis.


## Informations envoyées dans la requête

Lors de la récupération d'un devis, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/service/{apiKey}/get/order/{uuid}' \'

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
