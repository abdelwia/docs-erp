### <span style="color:orange">POST</span> Rechercher un reponse group

````
BASE_URL/response/group/search
````

<br/> <br/> 

# Recherche un reponse group
Ce guide vous aide à comprendre comment rechercher un reponse group.


## Informations envoyées dans la requête

Lors de la recherche d'un reponse group, les informations envoyées peuvent être les suivantes :

## Corps

###### brut (json)


```json

{
    "search": "string",
}
```

## Exemple de Requête

```txt
curl --location 'BASE_URL/response/group/search' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "responseGroup": {},
        "count": {},
        "total": {},
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
