### <span style="color:orange">POST</span> Envoyer des sms

````
BASE_URL/service/{apiKey}/send/sms
````

<br/> <br/> 

# Envoyer des sms
Ce guide vous aide à comprendre comment Envoyer des sms.


## Informations envoyées dans la requête

Lors de l'envoi des sms, les informations envoyées peuvent être les suivantes :


## Corps

###### brut (json)


```json

{
    "contact": "0708090605",
    "type": "lorem ipsum dolor sit amet, consectetur adipiscing",
}
```

## Exemple de Requête

```curl
curl --location 'BASE_URL/service/{apiKey}/send/sms' \
--data '{
    "contact": "0708090605",
    "type": "lorem ipsum dolor sit amet, consectetur adipiscing",
}'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
    "status": "success", 
    "response": {}
    },
    200
    ,
    {}
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
