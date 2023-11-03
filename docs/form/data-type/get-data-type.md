### <span style="color:green">GET</span> Récupérer une liste de Type de données

````
BASE_URL/question/type/list
````

<br/> <br/> 

# HEADERS

| Authorization | Basic TOKEN |
| ------------- | ----------- |

<br/> <br/>

# Récupération d'une liste de Type de données
Ce guide vous aide à comprendre comment récupérer une liste de Type de données.


## Informations envoyées dans la requête

Lors de la récupération d'une liste de Type de données, les informations envoyées peuvent être les suivantes :

## Exemple de Requête

```txt
curl --location 'BASE_URL/question/type/list' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "types": {}
    },
    200,
    [],
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
