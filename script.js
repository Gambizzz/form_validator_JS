document.addEventListener('DOMContentLoaded', function() { //DOMContentLoaded = doc HTML chargé et analysé (point de départ pour initialisation de fichiers JS)
  const form = document.querySelector('.form'); //on sélectionne l'élément form

  form.addEventListener('submit', function(event) { //on ajoute un écouteur d'évènement sur 'submit'
    event.preventDefault(); //on empêche le comportement par défaut du formulaire
    resetErrorMessages(); //on initialise les messages d'erreur

    //on vérifie les inputs
    const lastName = form.elements['last'].value;
    const firstName = form.elements['first'].value;
    const age = form.elements['age'].value;
    const email = form.elements['email'].value;
    const confirmEmail = form.elements['email2'].value;
    const password = form.elements['password'].value;
    const confirmPassword = form.elements['passwordConfirmation'].value;
    const cgu = form.elements['CGU'].checked;

    let isValid = true; //on initialise la validité des inputs sur true

    if (lastName === '') { //si le last name est vide
      showError('Last name is required.');
      isValid = false;
    }

    if (firstName.length < 3) { //si le first name a moins de 3 caractères
      showError('First name must be at least 3 characters long.');
      isValid = false;
    }

    if (age === '' || parseInt(age) < 18) { //si age n'est pas renseigné ou inférieur à 18 ans
      showError('You must be over 18 years old.');
      isValid = false;
    }

    if (email === '' || !isValidEmail(email)) { //si email n'est pas renseigné ou ne correspond pas à la validation RegEx
      showError('Invalid email address.');
      isValid = false;
    }

    if (confirmEmail === '' || email !== confirmEmail) { //si confirmation email n'est pas renseignée ou n'est pas = à email
      showError('Email confirmation does not match.');
      isValid = false;
    }

    if (password.length < 6) { //si password fait moins de 6 caractères
      showError('Password must be at least 6 characters long.');
      isValid = false;
    }

    if (confirmPassword === '' || password !== confirmPassword) { //si confirmation password n'est pas renseignée ou n'est pas = à password
      showError('Password confirmation does not match.');
      isValid = false;
    }

    if (!cgu) { //si checkbox pas cochée
      showError('You must accept the terms and conditions.');
      isValid = false;
    }

    //si tout est OK
    if (isValid) {
      Swal.fire({ //on affiche un message de succès
        icon: 'success',
        title: 'Success!',
        text: 'Your request has been submitted successfully.',
        showConfirmButton: false
      }).then(() => {
        window.location.href = 'confirmation.html'; //redirection vers une autre page
      });
    }
  });

  //pour réinitialiser les messages d'erreur
  function resetErrorMessages() {
    Swal.close(); //ferme toutes les alertes
  }

  //pour afficher un message d'erreur
  function showError(message) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message
    });
  }

  //pour vérifier si l'email est valide
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});


//TOGGLE PASSWORD
function togglePassword(inputId) {
  const passwordInput = document.querySelector(`input[name="${inputId}"]`); //sélectionne input voulu
  if (passwordInput.getAttribute('type') === 'password') { //au moment de cliquer sur icône, si password est crypté
    passwordInput.setAttribute('type', 'text'); //change password crypté en texte
  } else {
    passwordInput.setAttribute('type', 'password'); //sinon laisse le password crypté
  }
}



