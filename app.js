let btn = document.getElementsByTagName("button");
btn[0].addEventListener("click",function(){
    console.log("xyz");
    let container = document.getElementsByClassName("container");
    container[0].style.background = getrandomcolor();
    let h1 = document.getElementsByTagName("h1");
    h1[0].innerText = getrandomcolor();

});
function getrandomcolor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return color = `rgb(${red},${green},${blue})`;
    
}