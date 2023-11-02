### <span style="color:green">GET</span> Récupérer une cotation

````
BASE_URL/api/get/data/{uuid}
````

<br/> <br/> 

# Récupération d'une cotation
Ce guide vous aide à comprendre comment récupérer une cotation.


## Informations envoyées dans la requête

Lors de la récupération de la cotation, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/get/data/{uuid}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "data": {},
        "responseGroup": {},
        "responseCount": 10,
        "res": {},
        "responseCountAfter": {},
    },
    200,
    {},
    {
        "groups": {
            "0":"response-group", 
            "1":"infos",
            "2": "response"
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
