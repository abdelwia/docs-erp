### <span style="color:red">DELETE</span> Supprimer un response group

````
BASE_URL/response-group/delete/{uuid}
````

<br/> <br/>

# HEADERS

| Authorization | Basic TOKEN |
| ------------- | ----------- |

<br/> <br/>

# Suppression d'un response group
Ce guide vous aide à comprendre comment supprimer un response group.


## Informations envoyées dans la requête

Lors de la suppression d'un response group, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/response-group/delete/{uuid}' \'

```


## Exemple de Réponse

::: details Corps  

```json

{
    {
        "status": "success",
        "message": "cotation supprimé"
    },
    200,
    {},
    {
        "groups": {
            "0":"manager", 
            "1":"infos",
            "2": "userManagement",
            "3": "photo",
            }
    }
}

```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
