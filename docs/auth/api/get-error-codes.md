### <span style="color:green">GET</span> Récupérer tous les codes erreurs

````
BASE_URL/api/error/codes
````

<br/> <br/> 

# Récupération de tous les codes erreurs
Ce guide vous aide à comprendre comment récupérer tous les codes erreurs.


## Informations envoyées dans la requête

Lors de la récupération de tous les codes erreurs, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/error/codes' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "errors": {}
    },
    200,
    {},
    {
        "groups": {
            "0":"identifier", 
            "1":"infos",
            "2": "password-update",
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
