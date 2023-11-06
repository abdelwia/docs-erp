### <span style="color:green">GET</span> Récupérer un response group

````
BASE_URL/get/logs/{uuid}
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Récupération ou modification un response group
Ce guide vous aide à comprendre comment récupérer un response group.


## Informations envoyées dans la requête

Lors de la récupération d'un response group, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```curl
curl --location 'BASE_URL/get/logs/{uu}' 

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "responseGroup": {}
    },
    200,
    {},
    {
        "groups": {
            "0":"log", 
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
