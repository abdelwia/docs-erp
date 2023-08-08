### Authentification

# Magma OnePay API V1

L'API Magma OnePay V1 permet à votre application d'interagir avec notre plateforme de paiement/transfert. Ce guide vous aidera à configurer et gérer vos clés API, à comprendre les différents modes de fonctionnement et à utiliser correctement les clés pour des transactions sécurisées.

## Comprendre les Clés API
Les clés API sont les "mots de passe" qui permettent à votre application d'accéder à l'API Magma OnePay V1. Gardez ces clés privées pour assurer la sécurité de vos transactions. Vous pouvez gérer ces clés depuis votre tableau de bord. Notez que partager ces clés dans des endroits publics comme GitHub ou dans du code côté client n'est pas recommandé en raison des risques de sécurité.

## Obtenir des Clés API
Vous pouvez trouver vos clés API en vous connectant à votre compte et en accédant au tableau de bord. Si vous avez des difficultés à y accéder, contactez le propriétaire de votre compte. Il pourrait devoir vous accorder des autorisations supplémentaires.

## Types de Clés API
Nous vous fournissons quatre types de clés API :

1. **Clé secrète en mode test:** Pour effectuer des appels API côté serveur en mode test.
2. **Clé publiable en mode test:** Pour les tests de code côté client dans les applications.
3. **Clé secrète en mode réel:** Pour effectuer des appels API côté serveur en mode réel.
4. **Clé publiable en mode réel:** Pour le code côté client dans les applications une fois qu'elles sont en production.

## Modes de Fonctionnement
L'API Magma OnePay V1 fonctionne selon deux modes : le mode test et le mode réel.

* *Mode test:* Utilisez ce mode lorsque vous développez toujours votre application. Il simule les interactions avec l'API mais ne traite pas de paiements réels.
* *Mode réel:* Utilisez ce mode lorsque votre application est prête à traiter de vraies transactions et à accepter des paiements réels.

## Comment Utiliser Vos Clés API
Selon le mode dans lequel vous vous trouvez (test ou réel), utilisez les clés correspondantes.

* *Clés secrètes:* Utilisez-les pour les appels API côté serveur. Gardez ces clés sécurisées ; ne les exposez pas publiquement.
* *Clés publiables:* Vous pouvez les inclure dans le code côté client de votre application. Elles sont utilisées pour collecter en toute sécurité des informations de paiement.

## Protégez Vos Clés API
Votre clé API secrète peut effectuer n'importe quelle transaction en votre nom. Pour la garder en sécurité :

* Limitez l'accès aux personnes qui en ont vraiment besoin.
* Ne l'incluez pas dans les systèmes de contrôle de version.
* Utilisez un gestionnaire de mots de passe ou un service de gestion des secrets pour la stocker.
* N'incluez pas votre clé API secrète dans les applications mobiles ou d'autres emplacements extractibles.