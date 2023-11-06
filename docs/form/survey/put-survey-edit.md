### <span style="color:yellow">PUT</span> Mettre à jour un survey

````
BASE_URL/survey/edit
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Mise à jour d'un survey
Ce guide vous aide à comprendre comment mettre à jour un survey.


## Informations envoyées dans la requête

Lors de la mise à jour d'un survey, les informations envoyées peuvent être les suivantes :


## Corps

###### brut (json)


```json

{
    "survey": {}
}
```

## Exemple de Requête

```curl
curl --location 'BASE_URL/survey/edit' \
--data '{
    "survey": {},
}'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "survey": {}
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
