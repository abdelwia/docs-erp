### <span style="color:green">GET</span> Récupérer une liste de lien

````
BASE_URL/mapping/list/{slug}
````

<br/> <br/> 

# HEADERS

| Authorization | Basic TOKEN |
| ------------- | ----------- |

<br/> <br/>

# Récupération d'une liste de lien
Ce guide vous aide à comprendre comment récupérer une liste de lien.


## Informations envoyées dans la requête

Lors de la récupération d'une liste de lien, les informations envoyées peuvent être les suivantes :

## Exemple de Requête

```txt
curl --location 'BASE_URL/mapping/list/{slug}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "mappings": {}
    },
    200,
    [],
    {
        "groups": {
            "0":"survey", 
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
