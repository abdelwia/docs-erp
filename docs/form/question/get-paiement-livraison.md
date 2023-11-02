### <span style="color:green">GET</span> Récupérer la liste des paiements à la livraison

````
BASE_URL/order/delivery/list
````

<br/> <br/>

# HEADERS

| Authorization | Basic TOKEN |
| ------------- | ----------- |

<br/> <br/>

# Récupération la liste des paiements à la livraison
Ce guide vous aide à comprendre comment récupérer la liste des paiements à la livraison.


## Informations envoyées dans la requête

Lors de la récupération de la liste des paiements à la livraison, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/order/delivery/list' \'

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
            "2": "slug"
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
