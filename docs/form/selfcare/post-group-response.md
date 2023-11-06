### <span style="color:orange">POST</span> Créer/Modifier un response group

````
BASE_URL/selfcare/get/data/or/create/{surveyUuid}/{uuid}
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Création ou modification un response group
Ce guide vous aide à comprendre comment créer ou modifier un response group.


## Informations envoyées dans la requête

Lors de la création ou de la modification d'un response group, les informations envoyées peuvent être les suivantes :


## Corps

###### brut (json)


```json

{
    "section": {}
}
```

## Exemple de Requête

```curl
curl --location 'BASE_URL/selfcare/get/data/or/create/{surveyUuid}/{uuid}' \
--data '{}'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "responseGroup": {}
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
