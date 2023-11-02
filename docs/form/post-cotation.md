### <span style="color:orange">POST</span> Créer une cotation

````
BASE_URL/api/response/group/new/{surveySlug}/{parent}/{partner}
````

<br/> <br/> 

# Création de cotation
Ce guide vous aide à comprendre comment créer une cotation.


## Informations envoyées dans la requête

Lors de la création de la cotation, les informations envoyées peuvent les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/response/group/new/{surveySlug}/{parent}/{partner}' \'

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
            "0":"response-group", 
            "1":"infos",
            "2": "response"
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
