

let tank = document.getElementById('tank')
function init(){
    tank.style.position = 'relative'
    tank.style.top = 0 + 'px'
    tank.style.left = 0 + 'px'
}
init();
// selectkey()
function moveRight(){

    tank.src = './image/Right.PNG'
    tank.style.left = parseInt(tank.style.left) + 5 + 'px'
}
function moveLeft(){

    tank.src = './image/Left.PNG'
    tank.style.left = parseInt(tank.style.left) - 5 + 'px'
}
function moveUp(){
tank.src = './image/Up.PNG'
    tank.style.top = parseInt(tank.style.top) - 5 + 'px'
}
function moveDown(){
    tank.src = './image/Down.PNG'
    console.log(tank.style.top)
    tank.style.top = parseInt(tank.style.top) + 5 + 'px'
}
function selectkey(event){
    switch (event.keyCode){
        case 39:
            moveRight()
            break;
        case 37:
            moveLeft()
            break;
        case 38:
            moveUp()
            break;
        case 40:
            moveDown()
            break;
    }
}
addEventListener("keydown", selectkey)
// function doReady(){
//     window.addEventListener("keydown", selectkey)
// }
