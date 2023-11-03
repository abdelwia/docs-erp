### <span style="color:orange">POST</span> Se connecter à un compte

````
BASE_URL/selfcare/login
````

<br/> <br/> 

# Connexion à un compte
Ce guide vous aide à comprendre comment se connecter à un compte.


## Informations envoyées dans la requête

Lors de la connexion à d'un compte, les informations envoyées peuvent être les suivantes :


## Corps

###### brut (json)


```json

{
    "username": "0708090605",
    "password": "àç!§js",
}
```

## Exemple de Requête

```curl
curl --location 'BASE_URL/selfcare/login' \
--data '{
    "username": "0708090605",
    "password": "àç!§js",
}'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "token": "longtext",
        "refresh_token": "longtext",
        "costumer": {
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
        "groups": "seflcare",
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
