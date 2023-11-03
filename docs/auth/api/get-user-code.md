### <span style="color:green">GET</span> Récupérer un utilisateur selon son email et son code

````
BASE_URL/api/check/password/update/code/{email}/{code}
````

<br/> <br/> 

# Récupération d'un utilisateur selon son email et son code
Ce guide vous aide à comprendre comment récupérer un utilisateur selon son email et son code.


## Informations envoyées dans la requête

Lors de la récupération d'un utilisateur selon son email et son code, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/check/password/update/code/{email}/{code}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "user": {}
    },
    200,
    {},
    {
        "groups": {
            "0":"identifier", 
            "1":"infos",
            "2": "password-update",
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
