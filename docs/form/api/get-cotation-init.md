### <span style="color:green">GET</span> Initialiser le comparateur

````
BASE_URL/api/init/comparator/{platformSlug}
````

<br/> <br/> 

# Initialisation du comparateur
Ce guide vous aide à comprendre comment initialiser le comparateur.


## Informations envoyées dans la requête

Lors de l'initialisation du comparateur, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/init/comparator/{platformSlug}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "surveys": {},
        "categories": {},
        "insurers": {},
        "importSurvey": {},
        "paymentMethods": {}
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
