### <span style="color:green">GET</span> Données du Partenaire

```plaintext
GET BASE_URL/get/{code}
```

Récupère les données du partenaire identifié par le code.

## Paramètres de la Requête

| Paramètre | Type   | Description         |
| --------- | ------ | ------------------- |
| code      | string | Le code du partenaire. |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request GET 'BASE_URL/get/{code}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "partner": {
        // Données du partenaire
    }
}
```

:::

**Remarque :** La réponse inclut les données du partenaire identifié par le code.

