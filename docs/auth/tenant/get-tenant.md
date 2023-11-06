### <span style="color:green">GET</span> Récupérer les tenants

````
BASE_URL/tenant/liste
````

<br/> <br/>

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Récupération de tenants
Ce guide vous aide à comprendre comment récupérer les tenants.


## Informations envoyées dans la requête

Lors de la récupération de tenants, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/tenant/liste' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "tenants": {
                "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", 
                "label": "text",
                "code": "aa6c-92b4d64c7986",
                "photo": "photo.png",
            }
    },
    200,
    {},
    {
        "groups": {
            "0":"tenant", 
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
