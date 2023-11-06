### <span style="color:green">GET</span> Télécharger un fichier

````
BASE_URL/api/file/query/protected/{uuid}
````

<br/> <br/>

# HEADERS

| Authorization | Basic TOKEN |
| ------------- | ----------- |

<br/> <br/>

# Téléchargement d'un fichier
Ce guide vous aide à comprendre comment télécharger un fichier.


## Informations envoyées dans la requête

Lors du téléchargement du fichier, les informations envoyées peuvent être les suivantes :

## Exemple de Requête

```txt
curl --location 'BASE_URL/api/file/query/protected/{uuid}' 

```


## Exemple de Réponse

::: details Corps  

```html
File
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
