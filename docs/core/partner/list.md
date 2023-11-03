
### <span style="color:green">GET</span> Liste des Partenaires Actifs

```plaintext
GET BASE_URL/partner/list
```

Récupère la liste des partenaires actifs.

## Paramètres de la Requête

Aucun paramètre requis.

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request GET 'BASE_URL/partner/list'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "partners": [
        // Liste des partenaires actifs
    ],
    "methods": [
        // Liste des méthodes de paiement actives
    ]
}
```

:::

**Remarque :** La réponse inclut une liste de partenaires actifs ainsi qu'une liste de méthodes de paiement actives.

