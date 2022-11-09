var header = document.getElementById("header")

window.onscroll = function(){
    if( scrollY >= 300){
        header.classList.add("header-2")
    }
    else {
        header.classList.remove("header-2")
    }
}