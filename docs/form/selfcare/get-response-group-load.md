### <span style="color:green">GET</span> Charger un reponse group

````
BASE_URL/selfcare/load/response/group
````

<br/> <br/> 

# Chargement un reponse group
Ce guide vous aide à comprendre comment charger d'un reponse group.


## Informations envoyées dans la requête

Lors du chargement d'un reponse group, les informations envoyées peuvent être les suivantes :

## Exemple de Requête

```txt
curl --location 'BASE_URL/selfcare/load/response/group' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "responseGroups": [{}],
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
