### <span style="color:green">GET</span> Récupérer un utilisateur d'une zone

````
BASE_URL/api/get/user/{uuid}
````

<br/> <br/> 

# Récupération d'un utilisateur d'une zone
Ce guide vous aide à comprendre comment récupérer un utilisateur d'une zone.


## Informations envoyées dans la requête

Lors de la récupération d'un utilisateur d'une zone, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/get/user/{uuid}' \'

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
