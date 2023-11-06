

### <span style="color:green">GET</span> Informations du Partenaire via son Code

```plaintext
GET BASE_URL/api/source/infos/{code}
```

Récupère les informations d'un partenaire à partir de son code.

#### Paramètres de la Requête

| Paramètre | Type   | Description         |
| --------- | ------ | ------------------- |
| code      | string | Le code du partenaire |

#### Exemple de Requête

```txt
txt --location --request GET 'BASE_URL/api/source/infos/{code}'
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