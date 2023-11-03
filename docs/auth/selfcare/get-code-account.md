### <span style="color:green">GET</span> Récupérer le code d'un compte

````
BASE_URL/selfcare/get/code
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

<br/> <br/>

# Récupération de le code d'un compte
Ce guide vous aide à comprendre comment Récupérer le code d'un compte.


## Informations envoyées dans la requête

Lors de la récupération de le code d'un compte, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/selfcare/get/code' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    "code": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
