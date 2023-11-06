
### <span style="color:green">POST</span> Modifier une Agence du Partenaire

```plaintext
POST BASE_URL/api/agency/edit
```

Modifie les informations d'une agence du partenaire.

#### Paramètres de la Requête

| Paramètre | Type   | Description                |
| --------- | ------ | -------------------------- |
| partner   | object | Les informations de l'agence |

#### Exemple de Requête

```txt
txt --location --request POST 'BASE_URL/api/agency/edit' \
--header 'Content-Type: application/json' \
--data-raw '{
    "partner": {
        // Informations de l'agence à modifier
    }
}'
```

#### Exemple de Réponse

```json
{
    "status": "success",
    "agency": {
        // Informations de l'agence modifiée
    }
}
```