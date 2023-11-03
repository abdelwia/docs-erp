### <span style="color:yellow">PUT</span> Mettre un devis en attente de paiement

````
BASE_URL/api/checkout/order/{uuid}
````

<br/> <br/> 

# Mise de devis en attente de paiement
Ce guide vous aide à comprendre comment mettre un devis en attente de paiement.


## Informations envoyées dans la requête

Lors de la mise de devis en attente de paiement, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/checkout/order/{uuid}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "order": {},
    },
    200,
    {}
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
