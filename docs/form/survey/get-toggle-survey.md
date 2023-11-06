### <span style="color:green">GET</span> Activer ou désactiviter un survey

````
BASE_URL/survey/toggle/active/{uuid}
````

<br/> <br/>

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Activer ou déactiviter un survey
Ce guide vous aide à comprendre comment activer ou déactiviter un survey.


## Informations envoyées dans la requête

Lors de l'activation ou la désactivation un survey, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/survey/toggle/active/{uuid}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "uuid": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
    },
    200,
    {},
    {
        "groups": {
            "0":"order", 
            "1":"infos",
            "2":"manager"
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
