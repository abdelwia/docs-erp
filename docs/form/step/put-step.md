### <span style="color:yellow">PUT</span> Mettre à jour le rang d'un step

````
BASE_URL/step/update/ranks
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Mise à jour du rang d'un step
Ce guide vous aide à comprendre comment mettre à jour le rang d'un step.


## Informations envoyées dans la requête

Lors de la mise à jour du rang d'un step, les informations envoyées peuvent être les suivantes :


## Corps

###### brut (json)


```json

{
    "ranks": {}
}
```

## Exemple de Requête

```curl
curl --location 'BASE_URL/step/update/ranks' \
--data '{
    "ranks": {},
}'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
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
