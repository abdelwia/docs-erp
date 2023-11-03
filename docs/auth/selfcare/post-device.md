### <span style="color:orange">POST</span> Enregistrer un appareil

````
BASE_URL/selfcare/register/device
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Enregistrement d'un appareil
Ce guide vous aide à comprendre comment enregistrer un appareil.


## Informations envoyées dans la requête

Lors de la enregistrement d'un appareil, les informations envoyées peuvent être les suivantes :


## Corps

###### brut (json)


```json

{
    "brand": "Appel",
    "model": "macbook Pro",
    "token": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
    "type": "laptop",
    "name": "doejohn",
}
```

## Exemple de Requête

```curl
curl --location 'BASE_URL/selfcare/register/device' \
--data '{
    "brand": "Appel",
    "model": "macbook Pro",
    "token": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
    "type": "laptop",
    "name": "doejohn",
}'

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
