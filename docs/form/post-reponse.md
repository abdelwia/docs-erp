### <span style="color:orange">POST</span> Créer de reponses

````
BASE_URL/api/save/responses
````

<br/> <br/> 

# Création de reponses
Ce guide vous aide à comprendre comment créer de reponses.


## Informations envoyées dans la requête

Lors de la création de reponses, les informations envoyées peuvent les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/save/responses' \'

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
