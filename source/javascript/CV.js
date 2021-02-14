const scrollButton = document.getElementById("to-top-button");
let scrollFromTopOfPage = true;

// Decide whether to show or hide scroll button
window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        if (scrollFromTopOfPage) {
            animatedSpawn();
            scrollFromTopOfPage = false;
        }
    } else {
        if (!scrollFromTopOfPage) {
            animatedDespawn();
        }
        scrollFromTopOfPage = true;
    }
}

// Make the scroll to top button scroll onto the screen.
function animatedSpawn() {
    let button = document.getElementById("to-top-button-container"),
        speed = 2,
        currentPos = -100;

    button.style.bottom = -100+"px";

    let animateInterval = setInterval(() => {
        currentPos += speed;
        
        if (currentPos >= 20 && speed > 0) {
            currentPos = 20;
            speed = -2 * speed;
        }
        if (currentPos <= 20 && speed < 0) {
            clearInterval(animateInterval);
        }
        button.style.bottom = currentPos+"px";
    }, 1);
}

// Make the scroll to top button scroll off the screen.
function animatedDespawn() {
    let button = document.getElementById("to-top-button-container"),
        speed = 2,
        currentPos = 20;

    button.style.bottom = 20+"px";

    let animateInterval = setInterval(() => {
        currentPos += speed;
        
        if (currentPos <= -100 && speed > 0) {
            currentPos = -100;
            speed = -2 * speed;
        }
        if (currentPos >= -100 && speed < 0) {
            clearInterval(animateInterval);
        }
        button.style.bottom = currentPos+"px";
    }, 1);
}

// Scroll user to top of page
function scrollToTop() {
    // safari
    document.body.scrollTop = 0;
    // other browsers
    document.documentElement.scrollTop = 0;
}
