### <span style="color:orange">POST</span> Sauvegarde une liste de types de données

````
BASE_URL/data/type/edit
````

<br/> <br/> 

# Récupération de la liste des types de données
Ce guide vous aide à comprendre comment sauvegarder la liste de type de données.


## Informations envoyées dans la requête

Lors de la sauvegarde de la liste de type de données, les informations envoyées peuvent les suivantes :


## Corps

###### brut (json)


```json

{
    "label": "Natus et velit quis ",
    "code": "Distinctio Aperiam ",
    "class": "",
    "format": "NUMBER",
    "tags": []
}
```

## Exemple de Requête

```curl
curl --location 'BASE_URL/data/type/edit' \
--data '{
    "label": "Natus et velit quis ",
    "code": "Distinctio Aperiam ",
    "class": "",
    "format": "NUMBER",
    "tags": []
}'

```


## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "type": {
        "id": 32,
        "label": "Natus et velit quis",
        "code": "Distinctio Aperiam",
        "class": "",
        "format": "NUMBER"
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
