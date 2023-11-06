### <span style="color:green">GET</span> Vérifier si le compte est affilier

````
BASE_URL/service/{apiKey}/check/affiliation/{uuid}
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

<br/> <br/>

# Vérification de l'affiliation
Ce guide vous aide à comprendre comment vérifier l'affiliation d'un compte.


## Informations envoyées dans la requête

Lors de la vérification de l'affiliation d'un compte, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/service/{apiKey}/check/affiliation/{uuid}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "allowed": true, // Or false
    "godfather": "ljjm(§kèmk§(jkè§m))" // Vide si false
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
