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

    let num = document.getElementById("choiseHour").value;
    let choiseHour = Number(num);
    num = document.getElementById("choiseMinutes").value;
    let choiseMinutes = Number(num);
    num = document.getElementById("choiseSecond").value;
    let choiseSecond = Number(num);
    let leftSecond = choiseSecond - ss;
    let leftMinutes = choiseMinutes - mm;
    let leftHour = choiseHour - hh;
    if (leftSecond < 0) { leftSecond += 60; leftMinutes -= 1; }
    if (leftMinutes < 0) { leftMinutes += 60; leftHour -= 1; }
    if (leftHour < 0) { leftHour += 24; }
    document.getElementById("timeLeft").innerHTML = `${checkNumber(leftHour)}:${checkNumber(leftMinutes)}:${checkNumber(leftSecond)}`;

    setTimeout(tickTimer, 1000);
}

function checkNumber(i) {
    return i < 10 ? "0" + i : i;
}

document.getElementById("btnStart").onclick = function ()
{
    let targetDate= document.getElementById("targetDate");
    let targetTime= document.getElementById("targetTime");
    let btnStart = document.getElementById("btnStart");
    targetDate.disabled = targetTime.disabled = !targetTime.disabled;
    if (btnStart.value == "Start")
    {
        btnStart.value = "Stop";
        tickCountdown();
    }
    else
    { 
        btnStart.value = "Start";
    }
    //let date = document.getElementById("targetDate").valueAsDate;
    //let time = document.getElementById("targetTime").valueAsDate;
    //let result = `Дата: ${ date.getFullYear()} / ${checkNumber(date.getMonth() + 1)}/${checkNumber(date.getDate())}`;
    //result += `<br>Время: ${checkNumber(time.getHours())}:${checkNumber(time.getMinutes())}:${checkNumber(time.getSeconds())}`;
    //document.getElementById("result").innerHTML = result;
    //let element = document.getElementById("countdownTimer");
    //let p_date = document.createElement("p");
    //let p_time = document.createElement("p");
    //p_date.append(document.createTextNode(`Дата: ${date}`));
    //p_time.append(document.createTextNode(`Время: ${time}`));
    //p_date.append(document.createTextNode(`Дата: ${date.getFullYear()}/${checkNumber(date.getMonth()+1)}/${checkNumber(date.getDate())}`));
    //p_time.append(document.createTextNode(`Время: ${checkNumber(time.getHours())}:${checkNumber(time.getMinutes())}:${checkNumber(time.getSeconds())}`));
    //element.append(p_date);
    //element.append(p_time);
}
function tickCountdown()
{

    if (!document.getElementById("targetTime").disabled) return;
    let now = new Date();

    let currentTimeZoneOffsetInHours = now.getTimezoneOffset() / 60;

    let targetTimeControl = document.getElementById("targetTime");
    let targetTime = targetTimeControl.valueAsDate;

    targetTime.setHours(targetTime.getHours() + currentTimeZoneOffsetInHours);

    let targetDateControl = document.getElementById("targetDate");
    let targetDate = targetDateControl.valueAsDate;
    targetTime.setFullYear(targetDate.getFullYear());
    targetTime.setMonth(targetDate.getMonth());
    targetTime.setDate(targetDate.getDate());
    let duration = targetTime;
    //document.getElementById("result").innerHTML = duration + "<br>" + now;
    let timestamp = targetTime - now;
    //timestamp.setHours(timestamp.getHours() + currentTimeZoneOffsetInHours);
    timestamp = new Date(timestamp);
    let startDate = new Date(0);
    timestamp.setHours(timestamp.getHours() + currentTimeZoneOffsetInHours);
    //document.getElementById("result").innerHTML = (Math.round(Math.abs(timestamp) / (1000 * 3600 * 24),0)) + " дней " + timestamp.toTimeString();

    document.getElementById("leftsecond").className = 'main_item';
    document.getElementById("leftsecond").innerHTML = checkNumber(timestamp.getSeconds()) + "<br>секунд";
    document.getElementById("leftminutes").className = 'main_item';
    document.getElementById("leftminutes").innerHTML = checkNumber(timestamp.getMinutes()) + "<br>минут";
    document.getElementById("lefthour").className = 'main_item';
    document.getElementById("lefthour").innerHTML = checkNumber(timestamp.getHours()) + "<br>часов";
    let days = Math.ceil(timestamp / (1000 * 3600 * 24)-0.666671873);
    document.getElementById("test").innerHTML = checkNumber(days) + "<br>дней";

    let week = Math.trunc(days / 7);
    let month = Math.trunc(week / 4);
    let year = Math.trunc(month / 12);
    if (year > 0)
    {
        document.getElementById("leftyear").className = 'main_item';
        document.getElementById("leftyear").innerHTML = year + "<br>лет";
        month -= year * 12;
    }
    else
    {
        document.getElementById("leftyear").className = 'main_item_hidden';
        document.getElementById("leftyear").innerHTML = "";
    }
    if (month > 0)
    {
        document.getElementById("leftmonth").className = 'main_item';
        document.getElementById("leftmonth").innerHTML = month + "<br>месяцев";
        week = 0;
        days = 0;
    }
    else
    {
        document.getElementById("leftmonth").className = 'main_item_hidden';
        document.getElementById("leftmonth").innerHTML = "";
    }
    if (week > 0) {
        document.getElementById("leftweek").className = 'main_item';
        document.getElementById("leftweek").innerHTML = week + "<br>недель";
        days -= week * 7;
    }
    else
    {
        document.getElementById("leftweek").className = 'main_item_hidden';
        document.getElementById("leftweek").innerHTML = "";
    }
    if (days > 0) {
        document.getElementById("leftdays").className = 'main_item';
        document.getElementById("leftdays").innerHTML = checkNumber(days) + "<br>дней";
    }
    else
    {
        document.getElementById("leftdays").className = 'main_item_hidden';
        document.getElementById("leftdays").innerHTML = "";
    }
    if (duration > 0) setTimeout(tickCountdown, 1000);
}