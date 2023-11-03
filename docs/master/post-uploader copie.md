### <span style="color:orange">POST</span> Télécharger un fichier

````
BASE_URL/api/uploader
````

<br/> <br/> 

# Récupération de la liste des types de données
Ce guide vous aide à comprendre comment télécharger un fichier.


## Informations envoyées dans la requête

Lors du téléchargement du fichier, les informations envoyées peuvent être les suivantes :


## Corps

###### brut (json)


```json

{
    "chunks": "qlnmnkdqoljfalnelakqsd",
    "fileName": "booty-fly.png",
    "fileSize": 69670,
    "fileType": "image/png",
    "loaded": 0,
    "uniqId": "nrxla5lwl",
}
```

## Exemple de Requête

```txt
curl --location 'BASE_URL/api/uploader' \
--data '{
    "chunks": "qlnmnkdqoljfalnelakqsd",
    "fileName": "booty-fly.png",
    "fileSize": 69670,
    "fileType": "image/png",
    "loaded": 0,
    "uniqId": "nrxla5lwl",
}'

```


## Exemple de Réponse

::: details Corps  

```json
{
    "success": true,
    "status": "finished",
    "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
    "folderUuid": null,
    "filename": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986.png",
    "link": "uploads\/4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986.png",
    "generated": true
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
