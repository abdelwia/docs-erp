### <span style="color:orange">POST</span> Créer/Modifier un tenant

````
BASE_URL/tenant/edit
````

<br/> <br/> 

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Création ou modification un tenant
Ce guide vous aide à comprendre comment créer ou modifier un tenant.


## Informations envoyées dans la requête

Lors de la création ou de la modification d'un tenant, les informations envoyées peuvent être les suivantes :


## Corps

###### brut (json)


```json

{
    "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", // Ajouter en modification
    "label": "text",
    "code": "aa6c-92b4d64c7986",
    "photo": "photo.png",
}
```

## Exemple de Requête

```curl
curl --location 'BASE_URL/tenant/edit' \
--data '{
    "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", // Ajouter en modification
    "label": "text",
    "code": "aa6c-92b4d64c7986",
    "photo": "photo.png",
}'

```


## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "tenant": {
        "id": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986", 
        "label": "text",
        "code": "aa6c-92b4d64c7986",
        "photo": "photo.png",
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
