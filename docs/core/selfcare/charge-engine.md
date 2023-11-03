### <span style="color:green">GET</span> Charger le moteur

````
BASE_URL/load/engine/{branchSlug}/{version}
````

## Description

Cette route permet de charger le moteur en fonction de la branche (`branchSlug`) et de la version (`version`) spécifiées.

## Paramètres de l'URL

| Paramètre   | Type   | Description                                     |
| ----------- | ------ | ----------------------------------------------- |
| `branchSlug` | string | Le slug de la branche.                        |
| `version`   | string | (Optionnel) La version spécifique du moteur. Si non spécifiée, la dernière version sera utilisée. |

## Requête

### HEADERS

| Authorization | Bearer TOKEN |
| ------------- | ----------- |

## Réponse

### Exemple de Requête

```curl
curl --location BASE_URL/load/engine/{branchSlug}/{version}' \
--header 'Authorization: Bearer TOKEN'
```

### Exemple de Réponse

::: details Corps  

```json
{
    "engine": "Contenu du moteur"
}
```

:::
