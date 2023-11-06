
### <span style="color:green">GET</span> Informations du partenaire connecté

```plaintext
GET BASE_URL/api/partner/load/data
```

Récupère les informations du partenaire connecté.

#### Exemple de Requête

```txt
txt --location --request GET 'BASE_URL/api/partner/load/data'
```

#### Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "partner": {
        // Informations du partenaire
    }
}
```

:::