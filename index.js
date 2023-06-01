// Créer la logique de compte à rebours

//choice.value = 5 minutes

//hoice.value * 60 = totalSeconds

//let minutes = Math.floor(totalSeconds / 60);
//let seconds = totalSeconds % 60

// Créer un événement à la validation du form pour lancer le compte à rebours
const form = document.querySelector('#form');
const choice = document.querySelector('#choice');
const countdownDisplay = document.querySelector('#countdownDisplay');

let countdown = null; // déclarer countdown ici

form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  if (countdown) {
    clearInterval(countdown); // arrêter le compte à rebours précédent
  }

  let totalSeconds = choice.value * 60;
  choice.value = ''; // réinitialiser le champ de saisie

  countdown = setInterval(() => { // assigner le nouveau compte à rebours à countdown
    if (totalSeconds < 0) {
      clearInterval(countdown);
      countdownDisplay.innerHTML = "Countdown Finished";
      return;
    }

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    countdownDisplay.innerHTML = `Time remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    totalSeconds--;
  }, 1000);
});

