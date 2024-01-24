//scroll up.

document.getElementById("button-up").addEventListener("click", scrollup)

function scrollup(){

    var currenscrooll = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (currenscrooll > 0){

        window.scrollTo (0, 0);
    }
}


buttonup = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonup.style.transform = "scale(1)";
    }else if (scroll < 500){
        buttonup.style.transform = "scale(0)";
    }
}
