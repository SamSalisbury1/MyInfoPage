const scrollButton = document.getElementById("to-top-button");

// Decide whether to show or hide scroll button
window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

// Scroll user to top of page
function scrollToTop() {
    // safari
    document.body.scrollTop = 0;
    // other browsers
    document.documentElement.scrollTop = 0;
}
