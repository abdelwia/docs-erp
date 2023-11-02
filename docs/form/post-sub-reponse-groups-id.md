### <span style="color:orange">POST</span> Créer une sub reponses groups avec RgUuid et questionUuid

````
BASE_URL/api/create/sub/response/group/{rgUuid}/{questionUuid}
````

<br/> <br/> 

# Création d'une sub reponses groups avec RgUuid et questionUuid
Ce guide vous aide à comprendre comment créer une sub reponses groups.


## Informations envoyées dans la requête

Lors de la création d'une sub reponses groups avec RgUuid et questionUuid, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/create/sub/response/group/{rgUuid}/{questionUuid}' \'

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
