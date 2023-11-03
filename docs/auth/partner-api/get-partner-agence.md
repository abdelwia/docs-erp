### <span style="color:green">GET</span> Récupérer tous les partenaires d'une agence

````
BASE_URL/partner/api/agency/user/list/{code}
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Récupération de tous les partenaires d'une agence
Ce guide vous aide à comprendre comment récupérer tous les partenaires d'une agence.


## Informations envoyées dans la requête

Lors de la récupération de tous les partenaires d'une agence, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/partner/api/agency/user/list/{code}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "partenaires": [
            {
            "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", // Ajouter en modification
            "name": "DOE",
            "code": "àç!§js",
            "username": "doe225",
            "email": "doe@mail.com",
            "password": "àç!§js",
            "contact": "0708090605",
            "tenants": "TEST",
            "crmId": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
            "roles": ["ROLE_ADMIN", "ROLE_USER"]
        },
        {
            "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", // Ajouter en modification
            "name": "DOE",
            "code": "àç!§js",
            "username": "doe225",
            "email": "doe@mail.com",
            "password": "àç!§js",
            "contact": "0708090605",
            "tenants": "TEST",
            "crmId": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
            "roles": ["ROLE_ADMIN", "ROLE_USER"]
        },
        {
            "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", // Ajouter en modification
            "name": "DOE",
            "code": "àç!§js",
            "username": "doe225",
            "email": "doe@mail.com",
            "password": "àç!§js",
            "contact": "0708090605",
            "tenants": "TEST",
            "crmId": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
            "roles": ["ROLE_ADMIN", "ROLE_USER"]
        }
        ]
    },
    200,
    {},
    {
        "groups": {
            "0":"user", 
            "1":"infos",
            "2": "photo"
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
