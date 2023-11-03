### <span style="color:orange">POST</span> Envoyer un lien de paiement

````
BASE_URL/order/send/payment/short
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
    "uuid": "string",
    "link": "string",
    "contact": "string",
}
```

## Exemple de Requête

```txt
curl --location 'BASE_URL/order/send/payment/short' \'

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
