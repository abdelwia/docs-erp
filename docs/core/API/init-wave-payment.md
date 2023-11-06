

### <span style="color:green">GET</span> Initialiser le Paiement avec Wave

```plaintext
GET BASE_URL/api/init/wave/checkout/{uuid}
```

Initialise le paiement avec Wave pour une commande spécifique.

#### Paramètres de la Requête

| Paramètre | Type   | Description              |
| --------- | ------ | ------------------------ |
| uuid      | string | L'identifiant de la commande |

#### Exemple de Requête

```txt
txt --location --request GET 'BASE_URL/api/init/wave/checkout/{uuid}'
```

#### Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "url": "URL_DU_PAIEMENT_WAVE"
}
```

:::
