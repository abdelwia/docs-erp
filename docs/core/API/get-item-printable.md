

### <span style="color:green">GET</span> Récupérer un document imprimable

```plaintext
GET BASE_URL/api/get/printable/{itemUuid}/{printableUuid}
```

Récupère un document imprimable associé à un objet.

#### Paramètres de la Requête

| Paramètre     | Type   | Description                  |
| ------------- | ------ | ---------------------------- |
| itemUuid      | string | L'identifiant de l'objet      |
| printableUuid | string | L'identifiant du document     |

#### Exemple de Requête

```txt
txt --location --request GET 'BASE_URL/api/get/printable/{itemUuid}/{printableUuid}'
```
