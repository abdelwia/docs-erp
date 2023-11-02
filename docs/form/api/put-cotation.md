### <span style="color:yellow">PUT</span> Mettre à jour une cotation

````
BASE_URL/api/update/response/group/state/{uuid}
````

<br/> <br/> 

# Mise à jour de cotation
Ce guide vous aide à comprendre comment mettre à jour une cotation.


## Informations envoyées dans la requête

Lors de la mise à jour de la cotation, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/update/response/group/state/{uuid}' \'

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
    },
    {
        "0":"manager", 
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
