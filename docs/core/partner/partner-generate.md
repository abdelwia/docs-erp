### <span style="color:orange">POST</span> Générer des Partenaires

```plaintext
POST BASE_URL/partner/generate
```

Génère un nombre spécifié de partenaires.

## Paramètres de la Requête

Aucun paramètre requis.

## Corps de la Requête

Le corps de la requête doit contenir un objet JSON avec le nombre de partenaires à générer.

Exemple de Corps de Requête :

```json
{
    "count": 10
}
```

## Exemple de Requête

```curl
curl --location --request POST 'BASE_URL/partner/generate' \
--header 'Content-Type: application/json' \
--data-raw '{
    "count": 10
}'
```

## Exemple de Réponse

::: details Corps

```json
{
    "status": "success"
}
```

:::

**Remarque :** La réponse indique que les partenaires ont été générés avec succès.
