let container = document.querySelector('.container')
let twoFlipped = []
createTable()
let boxes = document.querySelectorAll('.box')
    addClicks()

function createTable(){
    let text = ``;
    for (let i = 0; i < 36; i++) {
        let rand = Math.floor(Math.random()*icons.length) // 35
        text += `
        <div class="box">
        <div class="back">${icons[rand]}</div>
                <div class="front"></div>
                </div>
                `
                icons.splice(rand,1);
            }
    container.innerHTML = text;
}


function flip() {
    this.removeEventListener('click',flip)
    twoFlipped.push(this)
    let back =this.querySelector('.back')
    let front =this.querySelector('.front')

    front.style.transform = "rotateY(180deg)"
    back.style.transform = "rotateY(0deg)"
    
    if (twoFlipped.length === 2) {
        checkFlipped()
        
    }
}
function checkFlipped() {

    removeClicks();

    let front1 = twoFlipped[0].querySelector('.front')
    let back1 = twoFlipped[0].querySelector('.back')
    let front2 = twoFlipped[1].querySelector('.front')
    let back2 = twoFlipped[1].querySelector('.back')

    if (back1.innerHTML === back2.innerHTML) {
        twoFlipped[0].className = "selected"
        twoFlipped[1].className = "selected"
        twoFlipped.length = 0;
        addClicks()
    }else{
        setTimeout(() => {
            
            front1.style.transform = "rotateY(0deg)"
            back1.style.transform = "rotateY(180deg)"
            front2.style.transform = "rotateY(0deg)"
            back2.style.transform = "rotateY(180deg)"
            
            twoFlipped.length = 0;
            addClicks()

        }, 700);

    }
}
function removeClicks() {
    boxes.forEach(box => {
        box.removeEventListener('click',flip)
    });
}
function addClicks() {
    let boxes = document.querySelectorAll('.box')
    if (boxes.length === 0) {
        // NEXT LEVEL***********
    }
    boxes.forEach(box => {
        box.addEventListener('click',flip)
    });
}