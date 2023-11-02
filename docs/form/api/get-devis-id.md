### <span style="color:green">GET</span> Récupération d'un devis

````
BASE_URL/api/get/order/{uuid}
````

<br/> <br/> 

# Récupération d'un devis
Ce guide vous aide à comprendre comment récupérer un devis.


## Informations envoyées dans la requête

Lors de la récupération d'un devis, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/get/order/{uuid}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "data": {},
        "categories": {}
    },
    200,
    {},
    {
        "groups": {
            "0":"order-view", 
            "1":"infos",
            "2":"slug"
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
