### <span style="color:red">DELETE</span> Supprimer un devis

````
BASE_URL/order/delete/{uuid}
````

<br/> <br/>

# HEADERS

| Authorization | Basic TOKEN |
| ------------- | ----------- |

<br/> <br/>

# Suppression d'un devis
Ce guide vous aide à comprendre comment supprimer un devis.


## Informations envoyées dans la requête

Lors de la suppression d'un devis, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/order/delete/{uuid}' \'

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
