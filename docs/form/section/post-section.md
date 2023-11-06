### <span style="color:orange">POST</span> Créer/Modifier une section

````
BASE_URL/section/edit
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Création ou modification une section
Ce guide vous aide à comprendre comment créer ou modifier une section.


## Informations envoyées dans la requête

Lors de la création ou de la modification d'une section, les informations envoyées peuvent être les suivantes :


## Corps

###### brut (json)


```json

{
    "section": {}
}
```

## Exemple de Requête

```curl
curl --location 'BASE_URL/section/edit' \
--data '{}'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "section": {}
    },
    200,
    {},
    {
        "groups": {
            "0":"manager", 
            "1":"infos",
            "2": "userManager",
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
