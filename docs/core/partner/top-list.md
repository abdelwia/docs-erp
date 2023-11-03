
### <span style="color:green">GET</span> Liste des Partenaires Principaux

```plaintext
GET BASE_URL/partner/top/list
```

Récupère la liste des partenaires principaux.

## Paramètres de la Requête

Aucun paramètre requis.

## En-têtes

| Autorisation | Jeton Bearer |
| ------------- | ----------- |

## Exemple de Requête

```curl
curl --location --request GET 'BASE_URL/partner/top/list'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "partners": [
        // Liste des partenaires principaux
    ],
    "methods": [
        // Liste des méthodes de paiement actives
    ]
}
```

:::

**Remarque :** La réponse inclut une liste de partenaires principaux ainsi qu'une liste de méthodes de paiement actives.
