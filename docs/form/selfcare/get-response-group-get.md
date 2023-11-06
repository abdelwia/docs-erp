### <span style="color:green">GET</span> Récupérer un reponse group

````
BASE_URL/selfcare/get/response/group/{uuid}
````

<br/> <br/> 

# Récupération d'un reponse group
Ce guide vous aide à comprendre comment récupérer un reponse group.


## Informations envoyées dans la requête

Lors de la récupération d'un reponse group, les informations envoyées peuvent être les suivantes :

## Exemple de Requête

```txt
curl --location 'BASE_URL/selfcare/get/response//{uuid}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "responseGroup": {},
    },
    200,
    {},
    {
        "groups": {
            "0":"manager", 
            "1":"infos",
            "2": "userManager"
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
