### <span style="color:green">GET</span> Récupérer un partenaire d'une zone

````
BASE_URL//partner/api/get/user/{uuid}
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

<br/> <br/>

# Récupération d'un partenaire d'une zone
Ce guide vous aide à comprendre comment récupérer un partenaire d'une zone.


## Informations envoyées dans la requête

Lors de la récupération d'un partenaire d'une zone, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL//partner/api/get/user/{uuid}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "user": {
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
    },
    200,
    {},
    {
        "groups": {
            "0":"partner", 
            "1":"infos",
            "2":"photo"
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
