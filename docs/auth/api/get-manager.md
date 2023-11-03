### <span style="color:green">GET</span> Récupérer tous les managers d'une zone

````
BASE_URL/api/get/managers
````

<br/> <br/> 

# Récupération de tous les managers d'une zone
Ce guide vous aide à comprendre comment récupérer tous les managers d'une zone.


## Informations envoyées dans la requête

Lors de la récupération de tous les managers d'une zone, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/get/managers' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "managers": {}
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
