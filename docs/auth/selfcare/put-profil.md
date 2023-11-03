### <span style="color:yellow">PUT</span> Mettre à jour un compte

````
BASE_URL/selfcare/edit/profil
````

<br/> <br/> 

# mise à jour d'un compte
Ce guide vous aide à comprendre comment Mettre à jour un compte.


## Informations envoyées dans la requête

Lors de la mise à jour d'un compte, les informations envoyées peuvent être les suivantes :


## Corps

###### brut (json)


```json

{
    "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
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
curl --location 'BASE_URL/selfcare/edit/profil' \
--data '{
    "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
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
            "0":"selfcare", 
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
