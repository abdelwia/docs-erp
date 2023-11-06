### <span style="color:red">DELETE</span> Supprimer un step

````
BASE_URL/step/delete/{uuid}
````

<br/> <br/>

# HEADERS

| Authorization | Basic TOKEN |
| ------------- | ----------- |

<br/> <br/>

# Suppression d'un step
Ce guide vous aide à comprendre comment supprimer un step.


## Informations envoyées dans la requête

Lors de la suppression d'un step, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/step/delete/{uuid}' \'

```


## Exemple de Réponse

::: details Corps  

```json

{
    {
        "status": "success",
        "uuid": {}
    },
    200,
    {},
}

```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
