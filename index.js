// Créer la logique de compte à rebours

//choice.value = 5 minutes

//hoice.value * 60 = totalSeconds

//let minutes = Math.floor(totalSeconds / 60);
//let seconds = totalSeconds % 60

// Créer un événement à la validation du form pour lancer le compte à rebours
let totalSeconds = choice.value * 60
let countdown = setInterval(function() {
    if (totalSeconds <= 0) {
        clearInterval(countdown)
        console.log("Time's up!");
        return;
    }
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    console.log(`Time remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
}, 1000)