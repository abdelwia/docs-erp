### <span style="color:green">GET</span> Hiérarchie du Partenaire

```plaintext
GET BASE_URL/partner/get/hierarchy
```

Récupère la hiérarchie du partenaire associé à l'utilisateur actuel.

## Paramètres de la Requête

Aucun paramètre requis.

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request GET 'BASE_URL/partner/get/hierarchy' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "partner": {
        // Détails du partenaire
    }
}
```

:::

**Remarque :** La réponse inclut les détails du partenaire associé à l'utilisateur actuel.
