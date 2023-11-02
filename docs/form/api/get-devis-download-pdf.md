### <span style="color:green">GET</span> Téléchargement du PDF d'un devis

````
BASE_URL/api/download/order/{uuid}
````

<br/> <br/> 

# Téléchargement du PDF d'un devis
Ce guide vous aide à comprendre comment télécharger le pdf d'un devis.


## Informations envoyées dans la requête

Lors du téléchargement du pdf d'un devis, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/api/download/order/{uuid}' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    "0": {},
    "1":200,
    [
        "0":"Content-Type: application/octet-stream",
    ]
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/octet-stream;
:::
