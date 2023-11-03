### <span style="color:green">GET</span> Token du Mot de passe oublié 

````
BASE_URL/selfcare/verify/forgotten/password/code/{code}
````

<br/> <br/> 

# Token du Mot de passe oublié 
Ce guide vous aide à comprendre comment récupérer le Token du mot de passe oublié.


## Informations envoyées dans la requête

Lors de la récupération du mot de passe oublié, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/selfcare/verify/forgotten/password/code/{code}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "updatePasswordToken": {}, 
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
