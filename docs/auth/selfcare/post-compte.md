### <span style="color:orange">POST</span> Créer un compte

````
BASE_URL/selfcare/create/account
````

<br/> <br/> 

# Création un compte
Ce guide vous aide à comprendre comment créer un compte.


## Informations envoyées dans la requête

Lors de la création d'un compte, les informations envoyées peuvent être les suivantes :


## Corps

###### brut (json)


```json

{
    "username": "0708090605",
    "name": "DOE",
    "prename": "john",
    "photo": "photo.jpg",
    "email": "doe@mail.com",
    "godFather": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
    "password": "àç!§js",
}
```

## Exemple de Requête

```curl
curl --location 'BASE_URL/selfcare/create/account' \
--data '{
    "username": "0708090605",
    "name": "DOE",
    "prename": "john",
    "photo": "photo.jpg",
    "email": "doe@mail.com",
    "godFather": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
    "password": "àç!§js",
}'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "account": {
            "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
            "username": "0708090605",
            "name": "DOE",
            "prename": "john",
            "photo": "photo.jpg",
            "email": "doe@mail.com",
            "godFather": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
            "roles": [ "ROLE_USER"]
        }
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
