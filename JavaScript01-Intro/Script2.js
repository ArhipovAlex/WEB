// JavaScript source code
const DARK = "#323232";
const LIGHT = "#D8D8D8"

background_switch.onclick = function ()
{
    //let switch_image = document.getElementById("background_switch");
    //let filename = switch_image.currentSrc.split('/');
    //console.log(filename);
    //if (filename[filename.length - 1] === 'moon.png')
    //{
    //    switch_image.src = 'img/sun.png';
    //    document.body.className = "dark";
        //document.body.style.backgroundColor = DARK;
        //document.body.style.color = LIGHT;
    //}
    //else
    //{
    //    document.body.className = "light";
    //    switch_image.src = 'img/moon.png';
        //document.body.style.backgroundColor = LIGHT;
        //document.body.style.color = DARK;
    //}
    let backgroundDelay = document.getElementById("bkgDelay");
    let delay = backgroundDelay.value;
    document.body.style.transition = `background-color ${delay / 1000}s, color ${delay / 1000}s`;
    console.log(document.body.style);
    document.getElementById("background_switch").style.transition = `all ${delay / 1000}s ease-in-out`;
    document.getElementById("background_switch_2").style.transition = `all ${delay / 1000}s ease-in-out`;
    document.body.className = document.body.className === "light" ? "dark" : "light";
}
////////////////////
document.addEventListener("mousemove", function (event) {
    //let x = event.clientX;
    //let y = event.clientY;
    //let c = document.querySelector("#coord");
    //c.textContent = `X=${x} Y=${y}`;
    document.querySelector("#coord").textContent = `X=${event.clientX}, Y=${event.clientY};`;
}
);
///////////////////
function setImageVisibilityDelay() {
    let delay = document.getElementById("numDelay").value;
    setTimeout("setImageVisibility()", Number(delay));
}
function setImageVisibility() {
    let image = document.getElementById("image");
    let button = document.getElementById("btnShowHide");
    if (button.innerHTML === 'Скрыть') {
        image.src = "img/transparent.png";
        button.innerHTML = "Показать";
    }
    else {
        image.src = "img/DrunkMonkey.jpg";
        button.innerHTML = "Скрыть";
    }
}
//////////////////
document.write("<div id='animated'>Ах у дуба...............</div>");
let text = document.querySelector("#animated").innerHTML;
let size = text.length;
let i = 0;

window.addEventListener("load", animText);

function animText() {
    if (i >= size) return;
    let id = document.querySelector("#animated");
    id.innerHTML = text.substring(0, i++);
    setTimeout(animText, 100);
}
/////////////////
let date = new Date();
let result = "<h3>Дата и время</h3>";
result += `Полная дата: ${date}<br>`;
result += `Только дата: ${date.getFullYear()}.${checkNumber(date.getMonth() + 1)}.${checkNumber(date.getDate())}<br>`;
result += `Только день недели: ${date.getDay()}<br>`;
result += `Только время: ${date.toTimeString()}<br>`;
document.getElementById("DateAndTime").innerHTML = result;

document.body.onload = function tickTimer() {
    let time = new Date();
    let hh = checkNumber(time.getHours());
    let mm = checkNumber(time.getMinutes());
    let ss = checkNumber(time.getSeconds());
    document.getElementById("timerDisplay").innerHTML = `${hh}:${mm}:${ss}`;
    let checkBoxShowDate = document.getElementById("cbsShowDate").checked;
    if (checkBoxShowDate == true) {
        let yyyy = time.getFullYear();
        let MM = checkNumber(time.getMonth() + 1);
        let dd = checkNumber(time.getDate());
        document.getElementById("dateDisplay").innerHTML = `${yyyy}/${MM}/${dd}`;
    }
    else {
        document.getElementById("dateDisplay").innerHTML = ``;
    }
    setTimeout(tickTimer, 1000);
}

function checkNumber(i) {
    return i < 10 ? "0" + i : i;
}