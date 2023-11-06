### <span style="color:orange">POST</span> Créer/Modifier un alias

````
BASE_URL/survey/save/aliases/{uuid}
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Création ou modification d'un alias
Ce guide vous aide à comprendre comment créer ou modifier un alias.


## Informations envoyées dans la requête

Lors de la création ou de la modification d'un alias, les informations envoyées peuvent être les suivantes :


## Corps

###### brut (json)


```json

{
    "aliases": {}
}
```

## Exemple de Requête

```curl
curl --location 'BASE_URL/survey/save/aliases/{uuid}' \
--data '{
    "step": {},
}'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "aliases": {}
    },
    200,
    {},
    {
        "groups": {
            "0":"manager", 
            "1":"infos",
            "2":"userManager",
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
