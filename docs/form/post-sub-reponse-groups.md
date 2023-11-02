### <span style="color:orange">POST</span> Créer une sub reponses groups

````
BASE_URL/api/create/sub/response/groups
````

<br/> <br/> 

# Création d'une sub reponses groups
Ce guide vous aide à comprendre comment créer une sub reponses groups.


## Informations envoyées dans la requête

Lors de la création d'une sub reponses groups, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/create/sub/response/groups' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "responses": {}
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
