### <span style="color:green">GET</span> Récupérer un section

````
BASE_URL/section/list/{stepUuid}
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Récupération une section
Ce guide vous aide à comprendre comment récupérer une section.


## Informations envoyées dans la requête

Lors de la récupération d'une section, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```curl
curl --location 'BASE_URL/section/list/{stepUuid}' 

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "section": {}
    },
    200,
    {},
    {
        "groups": {
            "0":"manager", 
            "1":"infos",
            "2": "userManager",
            "3": "photo",
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
