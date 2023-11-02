### <span style="color:orange">POST</span> Sauvegarde une durée

````
BASE_URL/duration/edit
````

<br/> <br/> 

# Récupération de la liste des types de données
Ce guide vous aide à comprendre comment sauvegarder une durée.


## Informations envoyées dans la requête

Lors de la sauvegarde de la durée, les informations envoyées peuvent les suivantes :


## Corps

###### brut (json)


```json

{
    "label": "Rem pariatur Ipsum",
    "period": "Ipsum mollit et nul",
    "code": "",
    "year": "",
    "month": "3",
    "day": ""
}
```

## Exemple de Requête

```curl
curl --location 'BASE_URL/duration/edit' \
--data '{
    "label": "Rem pariatur Ipsum",
    "period": "Ipsum mollit et nul",
    "code": "",
    "year": "",
    "month": "3",
    "day": ""
}'

```


## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "duration": {
        "id": 7,
        "label": "Rem pariatur Ipsum",
        "code": "REM_PARIATUR_IPSUM",
        "year": 0,
        "month": 3,
        "day": 0,
        "period": "Ipsum mollit et nul"
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
