### <span style="color:green">GET</span>    Status Groupe de reponse

````
BASE_URL/check/status/{uuid}
````
<br>

# Récupération du status d'un groupe de reponse
Ce guide vous aide à comprendre comment récupérer le status d'un groupe de reponse.

## Example de requête

```txt
curl --location 'BASE_URL/check/status/{uuid}'
```

## Données reçues
L'API renverra une réponse JSON contenant le status d'un groupe de reponse :

## Exemple de Réponse

::: details Corps  

```json
{
    "status": "success",
    "state": "status"
}
```
:::

::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
