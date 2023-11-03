
### <span style="color:green">GET</span> Liste des Articles de Partenaires

```plaintext
GET BASE_URL/partner/item/list
```

Récupère la liste des articles associés à chaque partenaire.

## Paramètres de la Requête

Aucun paramètre requis.

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request GET 'BASE_URL/partner/item/list'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "type": "Nom_du_Type", // Le nom du type d'objet
    "items": [
        // Liste des articles de partenaires
    ]
}
```

:::

**Remarque :** La réponse inclut le type d'objet associé aux articles et une liste des articles de partenaires.

