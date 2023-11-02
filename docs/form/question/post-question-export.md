### <span style="color:orange">POST</span> Récupère une liste de question

````
BASE_URL/question/export
````

<br/> <br/> 

# HEADERS

| Authorization | Basic TOKEN |
| ------------- | ----------- |

<br/> <br/>

# Envoi de lien de paiement
Ce guide vous aide à comprendre comment envoyer un lien de paiement.


## Informations envoyées dans la requête

Lors de l'envoi de lien de paiement, les informations envoyées peuvent être les suivantes :

## Corps

###### brut (json)


```json

{
    "questions": {},
}
```

## Exemple de Requête

```txt
curl --location 'BASE_URL/question/export' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "questions": {}
    },
    200,
    {},
    {
        "groups": {
            "0":"Question", 
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
