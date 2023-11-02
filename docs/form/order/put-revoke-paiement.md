### <span style="color:yellow">PUT</span> Annuler un paiement

````
BASE_URL/order/delivery/revoke/{uuid}
````

<br/> <br/> 

# HEADERS

| Authorization | Basic TOKEN |
| ------------- | ----------- |

<br/> <br/>

# Annuler un paiement
Ce guide vous aide à comprendre comment annuler un paiement.


## Informations envoyées dans la requête

Lors de l'annulation d'un paiement, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/order/delivery/revoke/{uuid}' \'

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
