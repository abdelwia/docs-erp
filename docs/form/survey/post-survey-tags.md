### <span style="color:orange">POST</span> Récupérer la liste des survey par tags

````
BASE_URL/survey/get/by/tags
````

<br/> <br/>

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Récupération de la liste des survey par tags
Ce guide vous aide à comprendre comment récupérer la liste des survey par tags.


## Informations envoyées dans la requête

Lors de la récupération de la liste des survey par tags, les informations envoyées peuvent être les suivantes :

## Corps

###### brut (json)


```json

{
    "aliases": {}
}

## Exemple de Requête

```txt
curl --location 'BASE_URL/survey/get/by/tags' \'

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
