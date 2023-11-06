### <span style="color:green">GET</span> Récupérer la liste des utilisateurs

````
BASE_URL/user/list/
````

<br/> <br/>

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Récupération de la liste des utilisateurs
Ce guide vous aide à comprendre comment récupérer la liste des utilisateurs.


## Informations envoyées dans la requête

Lors de la récupération de la liste des utilisateurs, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/user/list/' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "users": [
{
                "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", 
                "name": "DOE",
                "code": "àç!§js",
                "username": "doe225",
                "email": "doe@mail.com",
                "contact": "0708090605",
                "tenants": "TEST",
                "crmId": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
                "roles": ["ROLE_ADMIN", "ROLE_USER"]
            },
            {
                "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", 
                "name": "DOE",
                "code": "àç!§js",
                "username": "doe225",
                "email": "doe@mail.com",
                "contact": "0708090605",
                "tenants": "TEST",
                "crmId": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
                "roles": ["ROLE_ADMIN", "ROLE_USER"]
            },
            {
                "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", 
                "name": "DOE",
                "code": "àç!§js",
                "username": "doe225",
                "email": "doe@mail.com",
                "contact": "0708090605",
                "tenants": "TEST",
                "crmId": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
                "roles": ["ROLE_ADMIN", "ROLE_USER"]
            }
            ]
    },
    200,
    {},
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
