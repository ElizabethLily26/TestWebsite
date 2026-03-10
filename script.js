function checkMessage(){
    let user = "visitor";
    if(user == "visitor"){
        alert("Welcome to my website!");
    }
    else{
        alert("Welcome back!")
    }
}
function originalTheme(){
    document.body.style.backgroundColor = "rgb(196, 237, 196)";
}
function blueTheme(){
    document.body.style.backgroundColor = "rgb(196, 237, 255)";
}
function pinkTheme(){
    document.body.style.backgroundColor = "rgb(255, 196, 237)";
}
function changeText(){
    document.getElementById("welcomeText").innerHTML = "You hovered over me!";
}