var loggo = document.querySelector(".logo");

var a = 0;

loggo.addEventListener("click", function(){
    if(a == 0) {
        loggo.innerHTML = "dayanshj"
        a = 1;
        console.log("changed")
    }

    else {
        loggo.style.color = "blue"
        a = 0;
        console.log("changed")
    }
})