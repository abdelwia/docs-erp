### <span style="color:orange">POST</span> Enregistrer un reponse group

````
BASE_URL/selfcare/save/response/group
````

<br/> <br/> 

# Enregistrement un reponse group
Ce guide vous aide à comprendre comment créer d'un reponse group.


## Informations envoyées dans la requête

Lors de l'enregistrement d'un reponse group, les informations envoyées peuvent être les suivantes :

## Corps

###### brut (json)


```json

{
    "data": {},
}
```

## Exemple de Requête

```txt
curl --location 'BASE_URL/selfcare/save/response/group' \'

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
