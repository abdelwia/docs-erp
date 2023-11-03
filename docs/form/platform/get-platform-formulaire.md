### <span style="color:green">GET</span> Supprimer/Ajouter un formulaire à une plateforme

````
BASE_URL/platform/{platformId}/toogle/survey/{surveyId}
````

<br/> <br/>

# HEADERS

| Authorization | Basic TOKEN |
| ------------- | ----------- |

<br/> <br/>

# Suppression/Ajout d'un formulaire à une plateforme
Ce guide vous aide à comprendre comment supprimer ou ajouter un formulaire à une plateforme.


## Informations envoyées dans la requête

Lors de la suppression ou l'ajout d'un formulaire à une plateforme, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/platform/{platformId}/toogle/survey/{surveyId}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "platforms": {}
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
