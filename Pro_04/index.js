function Andar() {
    const player = document.querySelector(".player-objeto");
    let posicao = 0;

    player.style.position = "relative";
    player.style.left = posicao + "px";

    document.addEventListener("keydown", function (evento) {
        if (evento.key === "ArrowRight") {
            posicao += 10;
        }
        if (evento.key === "ArrowLeft") {
            posicao -= 10; 
        }

        player.style.left = posicao + "px";
    });
}

function Bolinha() {
   
}


document.addEventListener("keydown", function (evento) {
    if (evento.key === " ") {
        Andar()
        Bolinha()
    }
})