### <span style="color:green">GET</span> Avoir/Créer un Groupe de reponse

````
BASE_URL/api/get/data/or/create/{surveyUuid}/{uuid}
````

<br/> <br/> 

# Récupération ou création d'un groupe de reponse
Ce guide vous aide à comprendre comment récupérer ou créer un groupe de reponse.


## Informations envoyées dans la requête

Lors de la création de la cotation, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/get/data/or/create/{surveyUuid}/{uuid}' \'

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
