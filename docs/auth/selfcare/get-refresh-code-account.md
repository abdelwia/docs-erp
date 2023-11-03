### <span style="color:green">GET</span> Régénérer le code d'un compte

````
BASE_URL/selfcare/refresh/code/{username}
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Régénération le code d'un compte
Ce guide vous aide à comprendre comment régénérer le code d'un compte.


## Informations envoyées dans la requête

Lors de la régénération du code d'un compte, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/selfcare/refresh/code/{username}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "message": "Si ce compte existe un SMS sera envoyé", // Ou "Utilisateur inconnu" Ou "Aucun code envoyé"
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
