# Intégration du Webhook

Le webhook de paiement de l'API est un outil puissant qui permet à votre système d'être mis à jour sur l'état des transactions traitées via l'API. Ce guide vous guidera à travers les étapes pour intégrer le webhook de paiement de l'API avec votre système.

## Étape 1 : Configurer une URL de webhook


La première étape consiste à créer un point de terminaison dans votre application qui recevra et traitera les demandes POST entrantes du webhook. Cette URL doit être publiquement accessible et doit utiliser HTTPS pour garantir la sécurité des données transmises.

## Étape 2 : Configurer une URL de webhook
Après avoir configuré votre point de terminaison et l'avoir configuré dans le système. L'API enverra des notifications de webhook à votre point de terminaison spécifié.

## Étape 3 : Gérer la charge utile du webhook

La charge utile envoyée depuis la demande POST du webhook contient des informations sur l'événement qui a déclenché le webhook et les détails de l'événement. Vous devrez analyser cette charge utile et utiliser les données pour mettre à jour votre système.


Voici quelques-uns des champs que vous pouvez attendre dans la charge utile :

* `event :` Le type d'événement qui a déclenché le webhook (par exemple, 'payment.success.webhook' ou 'payment.failed.webhook').
* `data :` Un tableau contenant des informations détaillées sur l'événement :
    * `payment_token :`  Un identifiant unique pour l'intention de paiement.
    * `merchant_transaction_id :`   Votre référence interne pour la transaction.
    * `amount :`Le montant du paiement.
    * `currency :`La devise du paiement.
    * `payee :`Le destinataire du paiement.
    * `payment_method :`La méthode de paiement utilisée pour la transaction.
    * `payment_processing_reference :`La méthode de paiement utilisée pour la transaction.
    * `payment_method :`Une référence du processeur de paiement.
    * `payment_status:` L'état actuel du paiement (par exemple, 'success', 'failed').
    * `payment_status_code:` Le code d'état du processeur de paiement pour la transaction.
    * `payment_status_message:`Un message du processeur de paiement décrivant l'état de la transaction.


## Step 4: Verify the signature

Pour vous assurer que la demande entrante provient réellement de l'API, vous devrez valider l'en-tête 'X-SIGNATURE'. Utilisez votre clé secrète de webhook et l'algorithme HMAC SHA-256 pour calculer une signature et comparez-la à la signature reçue. Rejetez toutes les demandes où la signature calculée ne correspond pas à la signature reçue.

Voici un exemple en PHP :

```php
$payload = json_encode($data); // Supposez que $data est le tableau 'data' de la charge utile du webhook
$receivedSignature = $_SERVER['HTTP_X_SIGNATURE']; // Supposez que c'est l'en-tête reçu 'X-OrizonPay-SIGNATURE'
$privateKey = 'votre_clé_privée';
$calculatedSignature = hash_hmac('sha256', $payload, $privateKey);
if (hash_equals($calculatedSignature, $receivedSignature)) {
    echo "La signature est valide !";
   // Traitez ici les informations du webhook
} else {
    echo "La signature est invalide !";
}

```
Et voici un exemple équivalent en JavaScript :

```javascript
import * as crypto from 'crypto';
const payload = JSON.stringify(data); // Supposez que data est le tableau 'data' de la charge utile du webhook
const receivedSignature = 'signature_reçue'; // Supposez que c'est l'en-tête reçu 'X-SIGNATURE'
const privateKey = 'votre_clé_privée';
const hmac = crypto.createHmac('sha256', privateKey);
hmac.update(payload);
const calculatedSignature = hmac.digest('hex');
if (calculatedSignature === receivedSignature) {
    console.log('La signature est valide !');
    // Traitez ici les informations du webhook
} else {
    console.log('La signature est invalide !');
}
```




## Étape 5 : Envoyez une réponse

Après avoir traité le webhook, renvoyez une réponse avec le code d'état HTTP 200 pour accuser réception. Cela indique au système de l'API OrizonPay que vous avez reçu avec succès le webhook, il n'est donc pas nécessaire de l'envoyer à nouveau.
