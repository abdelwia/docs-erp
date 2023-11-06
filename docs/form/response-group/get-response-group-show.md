### <span style="color:green">GET</span> Afficher un response group

````
BASE_URL/response/group/show/{uuid}
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Affichage d'un response group
Ce guide vous aide à comprendre comment afficher un response group.


## Informations envoyées dans la requête

Lors de l'affichage d'un response group, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```curl
curl --location 'BASE_URL/response/group/show/{uuid}' 

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
            "0":"manager", 
            "1":"infos",
            "2": "userManager",
            "3": "photo",
            "4": "responseGroup",
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
