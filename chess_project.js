// let div = []
// let body = document.querySelector("body")
// let img=[] ;
// for (let i = 0; i < 64; i++) {
//     div[i] = document.createElement("div")
//     body.appendChild(div[i])
//     img[i] = document.createElement("img")
//     div[i].appendChild(img[i])
//     div[i].classList.add("chessBox")
//     if (parseInt((i / 8) + i) % 2 == 0)
//         div[i].classList.add("white")
//     else
//         div[i].classList.add("black")
// }

// for(let i=0;i<16;i++){
//     if(i>=8&&i<16){
//         img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/bP.svg"
//         img[i].style.height="28px"
//         img[i].style.width="28px"
//     }

//     if(i==0||i==7){
//         img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/bR.svg"
//         img[i].style.height="28px"
//         img[i].style.width="28px"
//     }

//     if(i==1||i==6){
//         img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/bN.svg"
//         img[i].style.height="28px"
//         img[i].style.width="28px"
//     }

//     if(i==2||i==5){
//         img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/bB.svg"
//         img[i].style.height="28px"
//         img[i].style.width="28px"
//     }

//     if(i==3){
//         img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/bQ.svg"
//         img[i].style.height="28px"
//         img[i].style.width="28px"
//     }
    
//     if(i==4){
//         img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/bK.svg"
//         img[i].style.height="28px"
//         img[i].style.width="28px"
//     }

// }

// for(let i=48;i<64;i++){

//     if(i>=48&&i<56){
//         img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/wP.svg"
//         img[i].style.height="28px"
//         img[i].style.width="28px"
//     }

//     if(i==56||i==63){
//         img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/wR.svg"
//         img[i].style.height="28px"
//         img[i].style.width="28px"
//     }

//     if(i==57||i==62){
//         img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/wN.svg"
//         img[i].style.height="28px"
//         img[i].style.width="28px"
//     }

//     if(i==58||i==61){
//         img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/wB.svg"
//         img[i].style.height="28px"
//         img[i].style.width="28px"
//     }

//     if(i==59){
//         img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/wQ.svg"
//         img[i].style.height="28px"
//         img[i].style.width="28px"
//     }
    
//     if(i==60){
//         img[i].src="https://raw.githubusercontent.com/ImKadaga/chess-pieces/7eb8a2cc86bd868f88de681877b1ff8e46935657/chess_kaneo_midnight/wK.svg"
//         img[i].style.height="28px"
//         img[i].style.width="28px"
//     }

// }

// let target;
// let source;

// for(let i=0;i<=63;i++){

//     img[i].addEventListener("dragstart",()=>{
//         // console.log("dragstart have been triggered")
//     })
//     img[i].addEventListener("dragend",(e)=>{
//         // console.log("dragend have triggered")
//         console.log(e.target)
//         // console.log(i)
//         target=e.target.src
//         // console.log(target)
//         // console.log(source)
//         source.src=target
//         source.style.height="28px"
//         source.style.width="28px"
//         e.target.classList.add("hidden")
//         // console.log(e.target)


//     })

// }


// for(chessBox of div){
//     chessBox.addEventListener("dragover",(e)=>{
//         e.preventDefault()
//         // console.log("dragover have been triggered")
//     })
//     chessBox.addEventListener('dragleave',()=>{
//         // console.log("dragleave have been triggerd")
//     })
//     chessBox.addEventListener('dragenter',()=>{
//         console.log("dragenter have been triggerd")
//     })
//     chessBox.addEventListener('drop',(e)=>{
//         // console.log("drop have been triggered")
//         console.log(e.target.firstChild)
//         e.target.firstChild.classList.remove("hidden")
//         source=e.target.firstChild
        
//     })
// }


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



//new page :
const king='<div class="peice" id="king"> <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 0c17.7 0 32 14.3 32 32V48h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H256v48H408c22.1 0 40 17.9 40 40c0 5.3-1 10.5-3.1 15.4L368 400H80L3.1 215.4C1 210.5 0 205.3 0 200c0-22.1 17.9-40 40-40H192V112H176c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V32c0-17.7 14.3-32 32-32zM38.6 473.4L80 432H368l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H54.6C42.1 512 32 501.9 32 489.4c0-6 2.4-11.8 6.6-16z"/></svg></div>'
const queen='<div class="peice" id="queen"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 0a56 56 0 1 1 0 112A56 56 0 1 1 256 0zM134.1 143.8c3.3-13 15-23.8 30.2-23.8c12.3 0 22.6 7.2 27.7 17c12 23.2 36.2 39 64 39s52-15.8 64-39c5.1-9.8 15.4-17 27.7-17c15.3 0 27 10.8 30.2 23.8c7 27.8 32.2 48.3 62.1 48.3c10.8 0 21-2.7 29.8-7.4c8.4-4.4 18.9-4.5 27.6 .9c13 8 17.1 25 9.2 38L399.7 400H384 343.6 168.4 128 112.3L5.4 223.6c-7.9-13-3.8-30 9.2-38c8.7-5.3 19.2-5.3 27.6-.9c8.9 4.7 19 7.4 29.8 7.4c29.9 0 55.1-20.5 62.1-48.3zM256 224l0 0 0 0h0zM112 432H400l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H86.6C74.1 512 64 501.9 64 489.4c0-6 2.4-11.8 6.6-16L112 432z"/></svg></div>'
const pawn='<div class="peice" id="pawn"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z"/></svg></div>'
const rook='<div class="peice" id="rook"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M32 192V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V192c0 10.1-4.7 19.6-12.8 25.6L352 256l16 144H80L96 256 44.8 217.6C36.7 211.6 32 202.1 32 192zm176 96h32c8.8 0 16-7.2 16-16V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 8.8 7.2 16 16 16zM22.6 473.4L64 432H384l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H38.6C26.1 512 16 501.9 16 489.4c0-6 2.4-11.8 6.6-16z"/></svg></div>'
const bishop='<div class="peice" id="bishop"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M128 0C110.3 0 96 14.3 96 32c0 16.1 11.9 29.4 27.4 31.7C78.4 106.8 8 190 8 288c0 47.4 30.8 72.3 56 84.7V400H256V372.7c25.2-12.5 56-37.4 56-84.7c0-37.3-10.2-72.4-25.3-104.1l-99.4 99.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L270.8 154.6c-23.2-38.1-51.8-69.5-74.2-90.9C212.1 61.4 224 48.1 224 32c0-17.7-14.3-32-32-32H128zM48 432L6.6 473.4c-4.2 4.2-6.6 10-6.6 16C0 501.9 10.1 512 22.6 512H297.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L272 432H48z"/></svg></div>'
const knight='<div class="peice" id="knight"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5V238.9c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400H384l28.9-159c2.1-11.3 3.1-22.8 3.1-34.3V192C416 86 330 0 224 0H83.8C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7L96 48zm24 68a20 20 0 1 1 40 0 20 20 0 1 1 -40 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H409.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432H64L22.6 473.4z"/></svg></div>'

const div=[]
let body=document.querySelector("section")
for(let i=0;i<64;i++){
    div[i]=document.createElement("div")
    div[i].classList.add("squares")
    div[i].classList.add(i)
    body.appendChild(div[i])
    if (parseInt((i / 8) + i) % 2 == 0)
        div[i].classList.add("black")
    else
        div[i].classList.add("white")
    if(i>=8&&i<16||i>=48&&i<56)
    div[i].innerHTML=pawn;
    if(i==0||i==7||i==63||i==56)
    div[i].innerHTML=rook;
    if(i==1||i==6||i==62||i==57)
    div[i].innerHTML=knight
    if(i==2||i==5||i==61||i==58)
    div[i].innerHTML=bishop
    if(i==3||i==59)
    div[i].innerHTML=queen
    if(i==4||i==60)
    div[i].innerHTML=king
    if(i<16)
    div[i].lastChild.classList.add("blackSide");
    if(i>=48)
    div[i].lastChild.classList.add("whiteSide");
}
const peice =document.querySelectorAll(".peice");
const squares=document.querySelectorAll(".squares")
peice.forEach(el=>el.setAttribute("draggable","true"))

let element;
let newElement;
let count=0;
let span=document.querySelector("p")
let playerGo="black"
span.textContent="black s move"
squares.forEach(el=>{
    el.addEventListener("dragstart",(e)=>{
        element=e.target;
        console.log(element)
    })
    el.addEventListener("dragover",(e)=>{
        e.preventDefault()
    })
    el.addEventListener("drop",(e)=>{
        e.stopPropagation()
    //     if(element.getElementsByClassName("whiteSide"))
    //     span.innerText="blacks move"
    //     else if (element.getElementsByClassName("blackSide"))
    //     span.innerText="whites move"
    // console.log(element)
        if(playerGo==="black"){
            playerGo="white"
            span.textContent="white s move"
        }
        else{
            playerGo="black"
            span.textContent="black s move"
        }
        
        let previous=e.target.parentNode
        if(e.target.hasChildNodes()){
        newElement=e.target
        newdiv[count].appendChild(newElement)
        previous.appendChild(element)
        count++
        }
        else{
        // console.log(e.target)
        e.target.appendChild(element)
        }
    })
})
const newdiv=[]
const outerBox=document.querySelector(".outerBox")
for(let i=0;i<31;i++){
    newdiv[i]=document.createElement("div")
    newdiv[i].classList.add("outerSquare")
    newdiv[i].classList.add(i)
    outerBox.appendChild(newdiv[i])
}
