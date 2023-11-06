### <span style="color:green">GET</span> Récupérer un survey

````
BASE_URL/get/{slug}
````

<br/> <br/>

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Récupération d'un survey
Ce guide vous aide à comprendre comment récupérer un survey.


## Informations envoyées dans la requête

Lors de la récupération d'un survey, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/get/{slug}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "survey": {}
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
