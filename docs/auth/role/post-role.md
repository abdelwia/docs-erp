### <span style="color:orange">POST</span> Créer/Modifier un role

````
BASE_URL/role/edit
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Création ou modification un role
Ce guide vous aide à comprendre comment créer ou modifier un role.


## Informations envoyées dans la requête

Lors de la création ou de la modification d'un role, les informations envoyées peuvent être les suivantes :


## Corps

###### brut (json)


```json

{
    "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", // Ajouter en modification
    "label": "label",
    "code": "àç!§js",
    "description": "Lorem ipsum dolor sit amet, consectetur adip",
    "parent": "doe@mail.com",
}
```

## Exemple de Requête

```curl
curl --location 'BASE_URL/role/edit' \
--data '{
    "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", // Ajouter en modification
    "label": "label",
    "code": "àç!§js",
    "description": "Lorem ipsum dolor sit amet, consectetur adip",
    "parent": {},
}'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "hierarchy": {
            "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
            "label": "label",
            "code": "àç!§js",
            "description": "Lorem ipsum dolor sit amet, consectetur adip",
            "parent": "doe@mail.com",
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
