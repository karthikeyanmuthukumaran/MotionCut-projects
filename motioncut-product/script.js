function Toggle(){
    var slider=document.getElementById("slider");
    if(slider.style.left==="-250px"){
        slider.style.left="0";
    }
    else{
        slider.style.left="-250px"
    }
}