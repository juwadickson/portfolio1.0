// Start of Toggle Menu Bar
const toggleBar = document.getElementById("toggleBar");
const cancelBar = document.getElementById("cancelBar");
const navLinks = document.getElementById("link-container");

toggleBar.addEventListener("click", function(){
    navLinks.classList.add("show-link");
    toggleBar.style.display = "none";
    cancelBar.style.display = "block";
})
cancelBar.addEventListener("click", function(){
    navLinks.classList.remove("show-link");
    toggleBar.style.display = "block";
    cancelBar.style.display = "none"
})
// End of Toggle Menu Bar

// Start of Fixed Nav Bar on Scroll
const header = document.getElementById("header");
window.addEventListener("scroll", function(){
    const screenheight = window.pageYOffset;
    const headerheight = header.getBoundingClientRect().height;
    if(screenheight > headerheight){
        header.classList.add("fixed-header");
    }else{
        header.classList.remove("fixed-header");
    }
    // Add Go To Top Button
    const gotop = document.getElementById("up")
    if(screenheight > 600){
        gotop.classList.add("up")
    }else{
        gotop.classList.remove("up");
    }
});
// End of fixed nav Bar

// Start of Background Image Changing 
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);
// End of Background Image Change

// Start of Show Section Two on Scroll
const profile = document.getElementById("profile");
window.addEventListener("scroll", function(){
    const profileheight = profile.getBoundingClientRect().height;
    const screenheight = window.pageYOffset;

    if (screenheight > profileheight-800){
        profile.classList.add("two-display");
    }
    else{
        profile.classList.remove("two-display");
    }
    
})
// End of Show Section Two on Scroll

// Start of PREV NEXT button to show Portfolios
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const portfolios = document.getElementById("portfolios");

var leftValue = 0;
next.addEventListener("click",function(){
    if(leftValue <= 100){
        leftValue += 34;
        var leftMargin = leftValue + "%";
        portfolios.style.left = "-" + leftMargin;
    }else{
    }
})
prev.addEventListener("click",function(){
    if(leftValue >= 10){
        leftValue -= 34;
        var rightMargin = leftValue + "%";
        portfolios.style.left = "-" + rightMargin;
    }
    else{
    }
})
// End of Prev NEXT Button to show portfolio


// Load First Website

