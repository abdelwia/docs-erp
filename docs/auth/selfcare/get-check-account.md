### <span style="color:green">GET</span> Vérifier si le compte existe

````
BASE_URL/selfcare/check/account/{username}
````

<br/> <br/> 

# Vérification de l'existance d'un compte
Ce guide vous aide à comprendre comment vérifier l'existance d'un compte.


## Informations envoyées dans la requête

Lors de la vérification de l'existance d'un compte, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/selfcare/check/accou/{username}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "message": "Le compte doejohn existe déjà mais n'a pas encore été vérifié", // Ou "Le compte doejohn n'existe pas." Ou "Le compte doejohn existe déjà mais n\'a pas encore été vérifié'"
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
