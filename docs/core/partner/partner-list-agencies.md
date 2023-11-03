
### <span style="color:green">GET</span> Liste des Agences du Partenaire

```plaintext
GET BASE_URL/agencies/list/{code}
```

Récupère la liste des agences associées au partenaire identifié par le code.

## Paramètres de la Requête

| Paramètre | Type   | Description         |
| --------- | ------ | ------------------- |
| code      | string | Le code du partenaire. |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request GET 'BASE_URL/agencies/list/{code}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "agencies": [
        // Liste des agences du partenaire
    ]
}
```

:::

**Remarque :** La réponse inclut une liste des agences associées au partenaire identifié par le code.

