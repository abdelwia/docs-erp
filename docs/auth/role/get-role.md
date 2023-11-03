### <span style="color:green">GET</span> Récupérer tous les roles

````
BASE_URL/role/list
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

<br/> <br/>

# Récupération de tous les roles
Ce guide vous aide à comprendre comment Récupérer tous les roles.


## Informations envoyées dans la requête

Lors de la récupération de tous les roles, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/role/list' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "role": [
            {
                "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
                "label": "label",
                "code": "àç!§js",
                "description": "Lorem ipsum dolor sit amet, consectetur adip",
                "parent": {
                    "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
                    "label": "label",
                    "code": "àç!§js",
                    "description": "Lorem ipsum dolor sit amet, consectetur adip",
                    "parent": {},
                },
            }
        ]
    },
    200,
    {},
    {
        "groups": {
            "0":"role", 
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
