### <span style="color:green">GET</span> Réinitialiser un mot de passe

````
BASE_URL/api/reset/password/{email}
````

<br/> <br/> 

# Réinitialition un mot de passe
Ce guide vous aide à comprendre comment réinitialiser un mot de passe.


## Informations envoyées dans la requête

Lors de la réinitialition d'un mot de passe, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/reset/password/{email}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
