### <span style="color:green">GET</span> Interdire un utilisateur dans un tenant

````
BASE_URL/user/{id}/disallow/tenant/{code}
````

<br/> <br/>

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Interdiction d'un utilisateur dans un tenant
Ce guide vous aide à comprendre comment Interdire un utilisateur dans un tenant.


## Informations envoyées dans la requête

Lors de l''interdiction d'un utilisateur dans un tenant, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/user/{id}/disallow/tenant/{code}' \'

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
                "roles": ["ROLE_ADMIN", "ROLE_USER"]
            }
    },
    200,
    {}
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
