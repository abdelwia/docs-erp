### <span style="color:orange">POST</span> Créer des reponses groups

````
BASE_URL/api/save/response/group
````

<br/> <br/> 

# Création de reponses groups
Ce guide vous aide à comprendre comment créer de reponses groups.


## Informations envoyées dans la requête

Lors de la création de reponses groups, les informations envoyées peuvent les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/save/response/group' \'

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
