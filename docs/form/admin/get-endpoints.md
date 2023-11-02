### <span style="color:green">GET</span>    Endpoints

````
BASE_URL/admin/endpoints/list
````
<br>

# Récupération de la liste des endpoints
Ce guide vous aide à comprendre comment récupérer la liste des endpoints.

## Example de requête

```txt
curl --location 'BASE_URL/admin/endpoints/list'
```

## Données reçues
L'API renverra une réponse JSON contenant la liste des endpoints :

## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "routes": [
        {
            "path": "admin/endpoints/list",
            "name": "endpoints_list",
            "description": "Lorem ipsum dolor sit amet, consectet",
        },
        {
            "path": "admin/exemple1/list",
            "name": "exemple1",
            "description": "Lorem ipsum dolor sit amet, consectet",
        },
        {
            "path": "admin/exemple/list",
            "name": "exemple",
            "description": "Lorem ipsum dolor sit amet, consectet",
        }
    ]
}
```
:::

::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
