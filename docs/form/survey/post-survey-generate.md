### <span style="color:orange">POST</span> Générer un survey

````
BASE_URL/survey/generate/{slug}
````

<br/> <br/>

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Génération de un survey
Ce guide vous aide à comprendre comment générer un survey.


## Informations envoyées dans la requête

Lors de la génération d'un survey, les informations envoyées peuvent être les suivantes :

## Corps

###### brut (json)


```json

{
    "aliases": {}
}

## Exemple de Requête

```txt
curl --location 'BASE_URL/survey/generate/{slug}' \'

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
            "0":"order", 
            "1":"infos",
            "2":"manager"
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
