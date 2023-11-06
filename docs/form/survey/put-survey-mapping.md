### <span style="color:yellow">PUT</span> Mettre à jour le mapping d'un survey

````
BASE_URL/survey/mapping/{surveySlug}
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Mise à jour du mapping d'un survey
Ce guide vous aide à comprendre comment créer ou modifier le mapping d'un survey.


## Informations envoyées dans la requête

Lors de la mise à jour du mapping d'un survey, les informations envoyées peuvent être les suivantes :


## Corps

###### brut (json)


```json

{
    "mappings": {}
}
```

## Exemple de Requête

```curl
curl --location 'BASE_URL/survey/mapp/{surveySlug}' \
--data '{
    "mappings": {},
}'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "surveys": [
            {},
            {},
            {},
            {},
            ]
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
