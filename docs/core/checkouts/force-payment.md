### <span style="color:orange">POST</span> Forcer le paiement d'un avenant par un manager

````
BASE_URL/pay/avenant/{uuid}/{montant}
````

## Description

Cette route permet à un manager de forcer le paiement d'un avenant.

## Paramètres de l'URL

| Paramètre   | Type   | Description                                  |
| ----------- | ------ | -------------------------------------------- |
| `uuid`      | string | L'UUID de l'avenant.                         |
| `montant`   | string | Le montant à payer pour l'avenant.           |

## Requête

### HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Autorisation

Seuls les utilisateurs avec le rôle "ROLE_MANAGER" ont accès à cette route.

## Réponse

### Exemple de Requête

```curl
curl -X POST BASE_URL/pay/avenant/{uuid}/{montant}' \
--header 'Authorization: Bearer TOKEN'
```

### Exemple de Réponse

::: details Corps  

```json
{
    "status": "success"
}
```

:::
