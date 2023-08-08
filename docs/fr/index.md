# Magma OnePay API V1

L'API Magma OnePay est conçue selon les principes REST. Elle utilise des URL centrées sur les ressources faciles à prédire et elle accepte et renvoie des informations au format JSON. De plus, elle applique les règles standard HTTP pour les codes de réponse, l'authentification et les verbes.

Nous vous fournirons séparément la valeur de BASEURL.

Vous pouvez utiliser l'API dans un environnement de test sécurisé qui n'aura pas d'impact sur vos données en direct ni de connexion avec des réseaux bancaires ou de mobile money. Le type de clé API que vous utilisez pour vérifier la requête déterminera s'il s'agit du mode en direct ou du mode de test.

Veuillez vous rappeler que toutes les requêtes API doivent être envoyées via HTTPS. Les tentatives effectuées via HTTP non sécurisé ne fonctionneront pas. De plus, les requêtes API effectuées sans authentification échoueront.