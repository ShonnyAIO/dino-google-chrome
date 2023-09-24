/* DINOSAURIO */
const player = document.getElementById("player");

/* CACTUS */
const cactus = document.getElementById("cactus");

/* BACKGROUND */
const background = document.getElementById("background");

/* ACCION DEL BOTON */
const buttonPlayStop = document.getElementById("buttonPlayStop");

/* PUNTAJE ACUMULADO */
let score = 0;
let scoreIntervalId;

document.addEventListener("click", () => {
    player.classList.add("playerJump");
});

player.addEventListener('animationend', () => {
    player.classList.remove("playerJump");
});

pauseGame = () => {
    cactus.style.animationPlayState = "paused";
    player.style.animationPlayState = "paused";
    background.style.animationPlayState = "paused";
    clearInterval(scoreIntervalId)
}

continueGame = () => {
    cactus.style.animationPlayState = "running";
    player.style.animationPlayState = "running";
    background.style.animationPlayState = "running";
    scoreIntervalId = setInterval( () => {
        score++;
        document.getElementById("score").innerHTML = score;
    }, 1000);
}

buttonPlayStop.addEventListener("click", () => {
    // Si es un boton de play -> continuar el juego
    // Si es un boton de pause -> pausar el juego

    if(buttonPlayStop.classList.contains("play")){
        continueGame();
    }else{
        pauseGame();
    }

    buttonPlayStop.classList.toggle("play");
    

});

scoreIntervalId = setInterval( () => {
    score++;
    document.getElementById("score").innerHTML = score;
}, 1000);
