let div = []
let body = document.querySelector("body")
let img=[] ;
for (let i = 0; i < 64; i++) {
    div[i] = document.createElement("div")
    body.appendChild(div[i])
    img[i] = document.createElement("img")
    div[i].appendChild(img[i])
    div[i].classList.add("chessBox")
    if (parseInt((i / 8) + i) % 2 == 0)
        div[i].classList.add("white")
    else
        div[i].classList.add("black")
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

let target;
let source;

for(let i=0;i<=63;i++){

    img[i].addEventListener("dragstart",()=>{
        console.log("dragstart have been triggered")
    })
    img[i].addEventListener("dragend",(e)=>{
        console.log("dragend have triggered")
        console.log(e.target)
        // console.log(i)
        target=e.target.src
        // console.log(target)
        // console.log(source)
        source.src=target
        source.style.height="28px"
        source.style.width="28px"
        e.target.classList.add("hidden")
        // console.log(e.target)


    })

}


for(chessBox of div){
    chessBox.addEventListener("dragover",(e)=>{
        e.preventDefault()
        console.log("dragover have been triggered")
    })
    chessBox.addEventListener('dragleave',()=>{
        console.log("dragleave have been triggerd")
    })
    chessBox.addEventListener('dragenter',()=>{
        console.log("dragenter have been triggerd")
    })
    chessBox.addEventListener('drop',(e)=>{
        console.log("drop have been triggered")
        console.log(e.target.firstChild)
        e.target.firstChild.classList.remove("hidden")
        source=e.target.firstChild
    })
}


// const gameboard=document.querySelector("#gameboard")
// let playerDisplay=document.querySelector("#players")
// const infoDisplay=document.querySelector("#info-display")
// const width=8
// let playerGo='black'
// playerDisplay.textContent='black'

// const startPeices=[
//     rook,knight,bishop,queen,king,bishop,knight,rook,
//     pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
//     '','','','','','','','',
//     '','','','','','','','',
//     '','','','','','','','',
//     '','','','','','','','',
//     pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
//     rook,knight,bishop,queen,king,bishop,knight,rook
// ]
// function createBoard(){
//     startPeices.forEach((startPeice,i)=>{
//         let square=document.createElement("div")
//         square.classList.add("square")
//         square.innerHTML=startPeice
//         square.setAttribute('id',i)
//         const row=Math.floor((63-i)/8)+1
//         if(row%2===0){
//             square.classList.add(i%2===0?"beige":"brown")
//         }else{
//             square.classList.add(i%2===0?"brown":"beige")
//         }
//         // console.log(square)
//         square.firstChild?.setAttribute("draggable",true)
//         if(i<=15){
//             square.firstChild.classList.add("black")
//         }
//         if(i>=48){
//             square.firstChild.classList.add('white')
//         }
//         gameboard.append(square)
//     })
// }
// createBoard()
// const allSquare=document.querySelectorAll(".square")
// allSquare.forEach((square)=>{
//     square.addEventListener("dragstart",dragStart)
//     square.addEventListener("dragover",dragOver)
//     square.addEventListener("drop",dragDrop)
// })

// let startPosition
// let draggedElement

// function dragStart(e){
//     // console.log(e.target.parentNode)//the element that we will start dragging
//     startPosition=e.target.parentNode.id
//     draggedElement=e.target
// }
// function dragOver(e){
//     e.preventDefault()//just used for preventing the default actions
// }
// function dragDrop(e){
//     e.stopPropagation()
//     const taken=e.target.classList.contains('peice')
//     changePlayer()
//     // e.target.append(draggedElement)
// }
// function changePlayer(){
//     if(playerGo==="black"){
//         playerGo="white"
//         playerDisplay.textContent="white"
//     }else{
//         playerGo="black"
//         playerDisplay.textContent="black"
//     }
// }

// function reverseIds(){
//     const allSquares=document.querySelectorAll(".square")
//     allSquares.forEach((square,i)=>square.setAttribute("square-id",(width*width-1)-i))
// }

// function revertIds(){
//     const allSquares=document.querySelectorAll(".square")
//     allSquares.forEach((square,i)=>square.setAttribute("square-id",i))
// }