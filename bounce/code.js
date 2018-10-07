

const btn = document.getElementById("bounce");

const bounce = () => { 
 
    $(".ball").toggleClass("bouncing");
    
}

btn.addEventListener('click', bounce);