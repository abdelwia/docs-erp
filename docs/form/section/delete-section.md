### <span style="color:red">DELETE</span> Supprimer une section

````
BASE_URL/section/delete/{uuid}
````

<br/> <br/>

# HEADERS

| Authorization | Basic TOKEN |
| ------------- | ----------- |

<br/> <br/>

# Suppression d'une section
Ce guide vous aide à comprendre comment supprimer une section.


## Informations envoyées dans la requête

Lors de la suppression d'une section, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/section/delete/{uuid}' \'

```


## Exemple de Réponse

::: details Corps  

```json

{
    {
        "status": "success",
        "section": {}
    },
    200,
    {},
    {
        "groups": {
            "0":"manager", 
            "1":"infos",
            "2": "userManagement",
            }
    }
}

```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
