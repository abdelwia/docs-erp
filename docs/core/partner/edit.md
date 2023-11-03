### <span style="color:yellow">PUT</span> Modifier le Partenaire

```plaintext
PUT BASE_URL/partner/edit
```

Modifie les informations du partenaire en fonction des données fournies.

## Paramètres de la Requête

Aucun paramètre requis.

## Corps de la Requête

Le corps de la requête doit contenir les données du partenaire à modifier au format JSON.

## Exemple de Requête

```curl
curl --location --request PUT 'BASE_URL/partner/edit' \
--header 'Content-Type: application/json' \
--data-raw '{
    "partner": {
        // Données du partenaire à modifier
    }
}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "packCategory": {
        // Nouvelles données du partenaire
    }
}
```

:::

**Remarque :** La réponse inclut les nouvelles données du partenaire après la modification.
