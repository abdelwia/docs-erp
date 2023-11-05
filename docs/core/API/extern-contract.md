

### <span style="color:green">GET</span> Créer un Contrat Externe depuis un Devis

```plaintext
GET BASE_URL/api/init/external/checkout/{uuid}
```

Crée un contrat externe à partir d'un devis.

#### Paramètres de la Requête

| Paramètre | Type   | Description              |
| --------- | ------ | ------------------------ |
| uuid      | string | L'identifiant du devis   |

#### Exemple de Requête

```txt
txt --location --request GET 'BASE_URL/api/init/external/checkout/{uuid}'
```

#### Exemple de Réponse

```json
{
    "status": "success",
    "contract": "IDENTIFIANT_DU_CONTRAT"
}
```