### <span style="color:green">GET</span> Liste des Catégories de Pack

```plaintext
GET BASE_URL/api/pack/category/list/{surveySlug}
```

Récupère la liste des catégories de pack pour une branche spécifique.

#### Paramètres de la Requête

| Paramètre   | Type   | Description               |
| ----------- | ------ | ------------------------- |
| surveySlug  | string | Le slug de la branche.    |

#### Exemple de Requête

```txt
txt --location --request GET 'BASE_URL/api/pack/category/list/{surveySlug}'
```

#### Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "categories": [
        // Liste des catégories de pack
    ]
}
```

:::


