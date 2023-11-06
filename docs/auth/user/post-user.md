### <span style="color:orange">POST</span> Créer/Modifier un utilisateur

````
BASE_URL/user/edit
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Création ou modification un utilisateur
Ce guide vous aide à comprendre comment créer ou modifier un utilisateur.


## Informations envoyées dans la requête

Lors de la création ou de la modification d'un utilisateur, les informations envoyées peuvent être les suivantes :


## Corps

###### brut (json)


```json

{
    "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", // Ajouter en modification
    "name": "DOE",
    "code": "àç!§js",
    "username": "doe225",
    "email": "doe@mail.com",
    "contact": "0708090605",
    "tenants": "TEST",
    "crmId": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
    "roles": ["ROLE_ADMIN", "ROLE_USER"]
}
```

## Exemple de Requête

```curl
curl --location 'BASE_URL/user/edit' \
--data '{
    "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
    "name": "DOE",
    "username": "doe225",
    "email": "doe@mail.com",
    "contact": "0708090605",
    "crmId": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
    "roles": ["ROLE_ADMIN", "ROLE_USER"]
}'

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
