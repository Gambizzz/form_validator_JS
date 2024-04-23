Consigne de base :

L'objectif est de créer un formulaire complet. Celui-ci, lors du submit, vérifiera la validité de chacun des champs.

Si un ou plusieurs des champs sont mauvais, le formulaire ne sera pas envoyé, et un message d'erreur devra être écrit en rouge sous chacun des champs qui doivent être modifiés.

Dès que l'utilisateur clique sur un input pour le modifier, le message d'erreur associé devra disparaître.

Une fois que tous les champs sont bons, alors l'utilisateur est renvoyé sur une page lui indiquant qu'il a tout bien rempli.

Le contenu du formulaire :

- un nom

- un prénom

- un âge

- un email

- une confirmation de l'email

- un password

- une confirmation de password

- Un sélecteur (checkbox, radio...) permettant d'accepter les CGU.

  
Quelques règles :

- Aucun des champs ne devra être vide.

- Le prénom doit faire au minimum 3 lettres

- L'email et sa confirmation doivent être les mêmes

- Le password et sa confirmation également

- L'âge doit être supérieur à 18

- Le password doit contenir au moins 6 caractères (stp, ne mets JAMAIS d'autres règles pour les mots de passe)

- L'email doit avoir le format classique d'un email

- Les CGU doivent être acceptées

Pour certains éléments, tu devras te servir des Regex.


J'ai pris quelques libertés concernant l'apparence des messages d'erreur afin que le rendu s'harmonise avec le CSS que j'ai mis en place.
