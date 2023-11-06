### <span style="color:green">GET</span> Identifier un utilisateur

````
BASE_URL/service/{apiKey}/who/is/user/{identifier}
````

<br/> <br/>

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Identification d'un utilisateur
Ce guide vous aide à comprendre comment identifier un utilisateur.


## Informations envoyées dans la requête

Lors de l'identification d'un utilisateur, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/service/{apiKey}/who/is/user/{identifier}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "user": {
                "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", 
                "name": "DOE",
                "code": "àç!§js",
                "username": "doe225",
                "email": "doe@mail.com",
                "contact": "0708090605",
                "tenants": "TEST",
                "crmId": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
                "roles": ["ROLE_MANAGER"]
            }
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
