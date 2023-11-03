### <span style="color:orange">POST</span> Générer les Types d'Item

```plaintext
POST BASE_URL/item/type/generate/{slug}
```

Génère les types d'item en fonction du slug spécifié.

## Paramètres de la Requête

| Paramètre | Type   | Description          |
| --------- | ------ | -------------------- |
| slug      | string | Le slug de l'élément. |

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```txt
txt --location --request POST 'BASE_URL/item/type/generate/{slug}' \
--header 'Authorization: Bearer TOKEN'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "message": "Fichier généré"
}
```

:::
