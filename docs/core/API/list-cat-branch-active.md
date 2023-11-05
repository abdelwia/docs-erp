

### <span style="color:green">GET</span> Liste des Catégories de Branche Active

```plaintext
GET BASE_URL/api/branch/category/list
```

Récupère la liste des catégories de branche active.

#### Exemple de Requête

```txt
txt --location --request GET 'BASE_URL/api/branch/category/list'
```

#### Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "categories": [
        // Liste des catégories de branche active
    ]
}
```

:::