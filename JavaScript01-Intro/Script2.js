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
        document.getElementById("leftsecond").className = 'main_item';
        document.getElementById("leftsecond_marker").className = 'main_item';
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
function tickCountdown() {
    //document.getElementById("leftyear").className = 'main_item_hidden';
    //document.getElementById("leftyear").innerHTML = "";
    //document.getElementById("leftmonth").className = 'main_item_hidden';
    //document.getElementById("leftmonth").innerHTML = "";
    //document.getElementById("leftweek").className = 'main_item_hidden';
    //document.getElementById("leftweek").innerHTML = "";
    //document.getElementById("leftdays").className = 'main_item_hidden';
    //document.getElementById("leftdays").innerHTML = "";
    document.getElementById("leftsecond").className = 'main_item';
    document.getElementById("leftsecond_marker").className = 'main_item';

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
    timestamp = Math.trunc(timestamp / 1000);
    //timestamp *= 1000;
    document.getElementById("test").innerHTML = timestamp;
    //timestamp.setHours(timestamp.getHours() + currentTimeZoneOffsetInHours);
    //timestamp = new Date(timestamp);
    //let startDate = new Date(0);
    //timestamp.setHours(timestamp.getHours() + currentTimeZoneOffsetInHours);
    //document.getElementById("result").innerHTML = (Math.round(Math.abs(timestamp) / (1000 * 3600 * 24),0)) + " дней " + timestamp.toTimeString();
    let days = Math.floor(timestamp / 86400);
    timestamp -= days * 86400;
    let hours = Math.floor(timestamp / 3600) % 24;
    timestamp -= hours * 3600;
    let minutes = Math.floor(timestamp / 60) % 60;
    timestamp -= minutes * 60;
    let second = timestamp % 60;

    let leftday = days;
    let year = Math.floor(leftday / 365);
    leftday -= (year * 365);

    let month = Math.floor(leftday / 30);
    leftday -= month * 30;

    let week = Math.floor(leftday / 7);
    leftday -= week * 7;

    document.getElementById("leftsecond").className = 'main_item1_anim';
    document.getElementById("leftsecond_marker").className = 'main_item2_anim';
    document.getElementById("leftsecond").innerHTML = checkNumber(second);
    document.getElementById("leftsecond_back").innerHTML = document.getElementById("leftsecond").innerHTML;
    if (second > 0) { document.getElementById("leftsecond_back").innerHTML = checkNumber(second) }
    else {
        if (duration > 0) {
            document.getElementById("leftsecond_back").innerHTML = 59;
            if (days == 7) days -= 1;
            if (week == 4) week -= 1;
            if (month == 12) month -= 1;
        }
        else { document.getElementById("leftsecond_back").innerHTML = ""; }
    }
    
    //document.getElementById("leftminutes").className = 'main_item';
    document.getElementById("leftminutes").innerHTML = checkNumber(minutes);
    //document.getElementById("lefthour").className = 'main_item';
    document.getElementById("lefthour").innerHTML = checkNumber(hours);
    document.getElementById("test").innerHTML = checkNumber(days);

    if (days > 0) {
        if (document.getElementById("days") == null) {
            let main_item = document.createElement("div");
            main_item.className = "main_item_hidden";

            let days_values = document.createElement("div");
            days_values.id = "days";
            days_values.className = "main_item";
            days_values.innerHTML = checkNumber(leftday);

            let days_marker = document.createElement("div");
            days_marker.id = "days_marker";
            days_marker.className = "main_item";
            days_marker.innerHTML = "days";

            main_item.prepend(days_values);
            main_item.append(days_marker);

            let hours_block = document.getElementById("lefthours");
            hours_block.before(main_item);
        }
    }
    else {
        if (document.getElementById("days") != null) {
            let days_item = document.getElementById("days");
            let days_block = days_item.parentElement;
            let display = days_block.parentElement;
            display.removeChild(days_block);
        }

    }

    if (week > 0) {
        if (document.getElementById("week") == null) {
            let main_item = document.createElement("div");
            main_item.className = "main_item_hidden";

            let week_values = document.createElement("div");
            week_values.id = "week";
            week_values.className = "main_item";
            week_values.innerHTML = checkNumber(week);

            let week_marker = document.createElement("div");
            week_marker.id = "week_marker";
            week_marker.className = "main_item";
            week_marker.innerHTML = "weeks";

            main_item.prepend(week_values);
            main_item > append(week_marker);

            let display = document.getElementById("result");
            display.prepend(main_item);
        }
    }
    else {
        if (document.getElementById("week") != null) {
            let week_item = document.getElementById("week");
            let week_block = week_item.parentElement;
            let display = week_block.parentElement;
            display.removeChild(week_block);
        }
    }

    if (month > 0) {
        if (document.getElementById("month") == null) {
            let main_item = document.createElement("div");
            main_item.className = "main_item_hidden";

            let month_values = document.createElement("div");
            month_values.id = "month";
            month_values.className = "main_item";
            month_values.innerHTML = checkNumber(month);

            let month_marker = document.createElement("div");
            month_marker.id = "month_marker";
            month_marker.className = "main_item";
            month_marker.innerHTML = "months";

            main_item.prepend(month_values);
            main_item.append(month_marker);

            if (document.getElementById("years") != null) {
                let years_block = document.getElementById("years");
                years_block.after(main_item);
            }
            else {
                let display = document.getElementById("result");
                display.prepend(main_item);
            }
            
        }
    }
    else {
        if (document.getElementById("month") != null) {
            let month_item = document.getElementById("month");
            let month_block = month_item.parentElement;
            let display = month_block.parentElement;
            display.removeChild(month_block);
        }
    }

    if (year > 0) {

        if (document.getElementById("years") == null) {
            let main_item = document.createElement("div");
            main_item.className = "main_item_hidden";
            /*main_item.id = "years_block";*/

            let years_value = document.createElement("div");
            years_value.id = "years";
            years_value.className = "main_item";
            years_value.innerHTML = checkNumber(year);

            let years_marker = document.createElement("div");
            years_marker.id = "years_marker";
            years_marker.className = "main_item";
            years_marker.innerHTML = "years";

            main_item.prepend(years_value);
            main_item.append(years_marker);

            let display = document.getElementById("result");
            display.prepend(main_item);
        }
    }
    else {
        if (document.getElementById("years") != null) {
            let years_item = document.getElementById("years");
            let years_block = years_item.parentElement;
            let display = years_block.parentElement;
            display.removeChild(years_block);
        }
    }
    
    if (duration > 0) setTimeout(tickCountdown, 1000);
}