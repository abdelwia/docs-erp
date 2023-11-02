### <span style="color:red">DELETE</span> Supprimer une sub reponses groups avec RgUuid et questionUuid

````
BASE_URL/api/sub/sub/response/group/{rgUuid}/{questionUuid}
````

<br/> <br/> 

# Suppression d'une sub reponses groups avec RgUuid et questionUuid
Ce guide vous aide à comprendre comment supprimer une sub reponses groups.


## Informations envoyées dans la requête

Lors de la suppression d'une sub reponses groups avec RgUuid et questionUuid, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/sub/sub/response/group/{rgUuid}/{questionUuid}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
         "response": {}
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
