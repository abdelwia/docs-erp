### <span style="color:green">GET</span> Récupération d'un survey

````
BASE_URL/api/get/surveys/{platform}
````

<br/> <br/> 

# Récupération d'un survey
Ce guide vous aide à comprendre comment récupérer un survey.


## Informations envoyées dans la requête

Lors de la récupération de la survey, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/get/surveys/{platform}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "surveys": {},
        "categories": {}
    },
    200,
    {},
    {
        "groups": {
            "0":"info",
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
