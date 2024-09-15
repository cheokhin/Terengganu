let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 200) {
        scrollProgress.style.opacity = 1;
    } else {
        scrollProgress.style.opacity = 0;
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    })
    
    scrollProgress.style.background = `conic-gradient(rgb(215, 35, 40) ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;