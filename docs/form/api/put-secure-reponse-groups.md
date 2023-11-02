### <span style="color:yellow">PUT</span> Lier un reponses groups à un prospect

````
BASE_URL/api/secure/response/group/{responseGroupUuid}/{email}
````

<br/> <br/> 

# Liaison d'un reponses groups à un prospect
Ce guide vous aide à comprendre comment lier un reponses groups à un prospect.


## Informations envoyées dans la requête

Lors de la liaison d'un reponses groups à un prospect, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/secure/response/group/{responseGroupUuid}/{email}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success"
    },
    200,
    {},
    {
        "groups": {}
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
