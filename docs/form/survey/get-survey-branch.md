### <span style="color:green">GET</span> Récupérer la liste des survey par branche

````
BASE_URL/survey/list/{slug}
````

<br/> <br/>

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Récupération de la liste des survey par branche
Ce guide vous aide à comprendre comment récupérer la liste des survey par branche.


## Informations envoyées dans la requête

Lors de la récupération de la liste des survey par branche, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/survey/list/{slug}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "surveys": [
            {},
            {},
            {},
            {},
            ]
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
