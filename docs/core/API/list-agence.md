

### <span style="color:green">GET</span> Liste des agences du partenaire

```plaintext
GET BASE_URL/api/partner/agencies/list
```

Récupère la liste des agences du partenaire connecté.

#### Exemple de Requête

```txt
txt --location --request GET 'BASE_URL/api/partner/agencies/list'
```

#### Exemple de Réponse

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