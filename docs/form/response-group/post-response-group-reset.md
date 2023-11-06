### <span style="color:orange">POST</span> Réinitialiser un reponse group

````
BASE_URL/response/reset
````

<br/> <br/> 

# Réinitialiser un reponse group
Ce guide vous aide à comprendre comment réinitialiser d'un reponse group.


## Informations envoyées dans la requête

Lors de la réinitialisation d'un reponse group, les informations envoyées peuvent être les suivantes :

## Corps

###### brut (json)


```json

{
    "search": "string",
}
```

## Exemple de Requête

```txt
curl --location 'BASE_URL/response/reset' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "responseGroups": {},
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
