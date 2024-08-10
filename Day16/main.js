let animationElements = document.querySelectorAll('.show-on-scroll');

function toggleAnimationElementInWindow(element) {    
    let rect = element.getClientRects();     
    console.log(rect);
       
    let heightScreen = window.innerHeight;

    if (!(rect[0].bottom < 0 || rect[0].top > heightScreen)) {
        element.classList.add('start');
    } else {
        element.classList.remove('start');
    }

}

function checkAnimation() {
    animationElements.forEach(el => {
        toggleAnimationElementInWindow(el);
    })
}


window.onscroll = checkAnimation