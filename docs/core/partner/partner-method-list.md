
### <span style="color:green">GET</span> Liste des Méthodes de Paiement du Partenaire

```plaintext
GET BASE_URL/method/list/{code}
```

Récupère la liste des méthodes de paiement associées au partenaire identifié par le code.

## Paramètres de la Requête

| Paramètre | Type   | Description         |
| --------- | ------ | ------------------- |
| code      | string | Le code du partenaire. |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request GET 'BASE_URL/method/list/{code}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "methods": [
        // Liste des méthodes de paiement
    ]
}
```

:::

**Remarque :** La réponse inclut une liste des méthodes de paiement associées au partenaire identifié par le code.

