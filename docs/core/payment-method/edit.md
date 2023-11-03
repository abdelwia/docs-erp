### <span style="color:orange">POST</span> Ajouter / Éditer une Méthode de Paiement

```plaintext
POST BASE_URL/payment/method/edit
```

Édite les détails d'une méthode de paiement existante.

## Paramètres de la Requête

Aucun paramètre requis.

## Corps de la Requête

Le corps de la requête doit contenir un objet JSON avec les détails de la méthode de paiement à éditer.

Exemple de Corps de Requête :

```json
{
    "method": {
        // détails de la méthode de paiement à éditer
    }
}
```

## Exemple de Requête

```curl
curl --location --request POST 'BASE_URL/payment/method/edit' \
--header 'Content-Type: application/json' \
--data-raw '{
    "method": {
        // détails de la méthode de paiement à éditer
    }
}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success",
    "method": {
        // détails de la méthode de paiement éditée
    }
}
```

:::

**Remarque :** La réponse indique que la méthode de paiement a été éditée avec succès.
