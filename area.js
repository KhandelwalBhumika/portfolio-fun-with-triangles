const baseAndHeight = document.querySelectorAll(".input");
const areaBtn = document.querySelector("#checkArea-btn");
const outputTr = document.querySelector("#output");

function product(a, b) {
    const multiply = a*b;
    return multiply;

}

function calculateArea(){
    const multiply = product(Number(baseAndHeight[0].value), Number(baseAndHeight[1].value));
    const area = multiply/2;
    outputTr.innerText = "The area of the triangle is : " + area + "cm².";
}

areaBtn.addEventListener("click", calculateArea);