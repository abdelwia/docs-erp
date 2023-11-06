### <span style="color:green">GET</span> Récupérer tous les mails des managers

````
BASE_URL/service/{apiKey}/get/available/managers/mails
````

<br/> <br/>

# HEADERS

| Authorization | Bearer TOKEN |
| ------------- | -----------  |

<br/> <br/>

# Récupération de tous les mails des managers
Ce guide vous aide à comprendre comment récupérer tous les mails des managers.


## Informations envoyées dans la requête

Lors de la récupération de tous les mails des managers, les informations envoyées peuvent être les suivantes :


## Exemple de Requête

```txt
curl --location 'BASE_URL/service/{apiKey}/get/available/managers/mails' \'

```


## Exemple de Réponse

::: details Corps  

```json
{
    {
        "status": "success",
        "mails": [
            {
                "email": "doe@mail.com",
            },
            {
                "email": "john@mail.com",
            },
            {
                "email": "jane@mail.com",
            },
            {
                "email": "bob@mail.com",
            },
            {
                "email": "alice@mail.com",
            },
        ]
    },
    200,
    {},
    {
        "groups": {
            "0":"user", 
            "1":"infos",
            "2":"photo"
            }
    }
}
```
:::


::: details En-Têtes (1)
 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     application/json
:::
