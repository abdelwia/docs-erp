


### <span style="color:green">GET</span> Récupérer les fichiers d'un contrat

```plaintext
GET BASE_URL/api/get/avenant/files/{uuid}
```

Récupère les fichiers associés à un contrat.

#### Paramètres de la Requête

| Paramètre | Type   | Description              |
| --------- | ------ | ------------------------ |
| uuid      | string | L'identifiant du contrat |

#### Exemple de Requête

```txt
txt --location --request GET 'BASE_URL/api/get/avenant/files/{uuid}'
```

#### Exemple de Réponse

```json
{
    // Liste des fichiers
}
```