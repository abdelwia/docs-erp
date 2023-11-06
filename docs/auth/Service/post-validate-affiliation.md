### <span style="color:orange">POST</span> Valider une affiliation

````
BASE_URL/service/{apiKey}/validate/affiliation
````

<br/> <br/> 

# Validation d'une affiliation
Ce guide vous aide à comprendre comment valider une affiliation.


## Informations envoyées dans la requête

Lors de la validation d'une affiliation, les informations envoyées peuvent être les suivantes :


## Corps

###### brut (json)


```json

{
    "uuid": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
    "commissionParrain": "2000",
    "reductionFilleule": "1000",
    "responseGroup": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
    "contractPremium": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
    "contract": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
    "order": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
}
```

## Exemple de Requête

```curl
curl --location 'BASE_URL/service/{apiKey}/validate/affiliation' \
--data '{
    "uuid": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
    "commissionParrain": "2000",
    "reductionFilleule": "1000",
    "responseGroup": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
    "contractPremium": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
    "contract": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
    "order": "4114bdd2-f2ab-4d2a-aa6c-92b4d64c7986",
}'

```


## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success", // Or error
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
