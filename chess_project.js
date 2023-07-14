let div = []
let body = document.querySelector("body")
let img=[] ;
for (let i = 0; i < 64; i++) {
    div[i] = document.createElement("div")
    body.appendChild(div[i])
    img[i] = document.createElement("img")
    div[i].appendChild(img[i])
    if (parseInt((i / 8) + i) % 2 == 0)
        div[i].classList.add("white")
    else
        div[i].classList.add("boxes")
}

for(let i=0;i<16;i++){
    if(i>=8&&i<16){
        img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/bP.svg"
        img[i].style.height="28px"
        img[i].style.width="28px"
    }

    if(i==0||i==7){
        img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/bR.svg"
        img[i].style.height="28px"
        img[i].style.width="28px"
    }

    if(i==1||i==6){
        img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/bN.svg"
        img[i].style.height="28px"
        img[i].style.width="28px"
    }

    if(i==2||i==5){
        img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/bB.svg"
        img[i].style.height="28px"
        img[i].style.width="28px"
    }

    if(i==3){
        img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/bQ.svg"
        img[i].style.height="28px"
        img[i].style.width="28px"
    }
    
    if(i==4){
        img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/bK.svg"
        img[i].style.height="28px"
        img[i].style.width="28px"
    }

}

for(let i=48;i<64;i++){

    if(i>=48&&i<56){
        img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/wP.svg"
        img[i].style.height="28px"
        img[i].style.width="28px"
    }

    if(i==56||i==63){
        img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/wR.svg"
        img[i].style.height="28px"
        img[i].style.width="28px"
    }

    if(i==57||i==62){
        img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/wN.svg"
        img[i].style.height="28px"
        img[i].style.width="28px"
    }

    if(i==58||i==61){
        img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/wB.svg"
        img[i].style.height="28px"
        img[i].style.width="28px"
    }

    if(i==59){
        img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/wQ.svg"
        img[i].style.height="28px"
        img[i].style.width="28px"
    }
    
    if(i==60){
        img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/wK.svg"
        img[i].style.height="28px"
        img[i].style.width="28px"
    }

}


