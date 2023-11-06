### <span style="color:orange">POST</span> Créer/Modifier un step

````
BASE_URL/step/edit
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Création ou modification un step
Ce guide vous aide à comprendre comment créer ou modifier un step.


## Informations envoyées dans la requête

Lors de la création ou de la modification d'un step, les informations envoyées peuvent être les suivantes :


## Corps

###### brut (json)


```json

{
    "step": {}
}
```

## Exemple de Requête

```curl
curl --location 'BASE_URL/step/edit' \
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
        "step": {}
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
