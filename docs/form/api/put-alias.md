### <span style="color:yellow">PUT</span> Mettre à jour un alias

````
BASE_URL/api/update/alias
````

<br/> <br/> 

# Mise à jour d'alias
Ce guide vous aide à comprendre comment mettre à jour d'un alias.


## Informations envoyées dans la requête

Lors de la mise à jour d'un alias, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/update/alias' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "alias": {}
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
