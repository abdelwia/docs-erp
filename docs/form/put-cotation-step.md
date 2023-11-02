### <span style="color:yellow">PUT</span> Mettre à jour l'étape d'une cotation

````
BASE_URL/api/update/current/rank/{uuid}/{stepUuid}
````

<br/> <br/> 

# Mise à jour l'étape d'une cotation
Ce guide vous aide à comprendre comment mettre à jour l'étape d'une cotation.


## Informations envoyées dans la requête

Lors de la mise à jour de l'étape d'une cotation, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/update/current/rank/{uuid}/{stepUuid}' \'

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
