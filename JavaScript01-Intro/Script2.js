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
    //timestamp = Math.trunc(timestamp / 1000);
    //timestamp *= 1000;
    document.getElementById("test").innerHTML = timestamp;
    //timestamp.setHours(timestamp.getHours() + currentTimeZoneOffsetInHours);
    //timestamp = new Date(timestamp);
    //let startDate = new Date(0);
    //timestamp.setHours(timestamp.getHours() + currentTimeZoneOffsetInHours);
    //document.getElementById("result").innerHTML = (Math.round(Math.abs(timestamp) / (1000 * 3600 * 24),0)) + " дней " + timestamp.toTimeString();
    const DAYS_IN_MONTH = 365 / 12;
    const MILISECONDS_IN_SECOND = 1000;
    const MILISECONDS_IN_MINUTE = MILISECONDS_IN_SECOND *60;
    const MILISECONDS_IN_HOUR = MILISECONDS_IN_MINUTE*60;
    const MILISECONDS_IN_DAY = MILISECONDS_IN_HOUR * 24;
    const MILISECONDS_IN_WEEK = MILISECONDS_IN_DAY * 7;
    const MILISECONDS_IN_MONTH = MILISECONDS_IN_WEEK * 4;
    const MILISECONDS_IN_YEAR = MILISECONDS_IN_MONTH * 12;
    
    let days = Math.floor(timestamp / MILISECONDS_IN_DAY);
    timestamp -= days * MILISECONDS_IN_DAY;
    let hours = Math.floor(timestamp / MILISECONDS_IN_HOUR)/* % 24*/;
    timestamp -= hours * MILISECONDS_IN_HOUR;
    let minutes = Math.floor(timestamp / MILISECONDS_IN_MINUTE)/* % MILISECONDS_IN_MINUTE*/;
    timestamp -= minutes * MILISECONDS_IN_MINUTE;
    let second = Math.floor(timestamp / MILISECONDS_IN_SECOND);

    let leftday = days;
    let year = Math.floor(leftday / 365);
    leftday -= (year * 365);

    let month = Math.floor(leftday / DAYS_IN_MONTH);
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

        }
        else { document.getElementById("leftsecond_back").innerHTML = ""; }
    }
    if (leftday == 7) leftday -= 1;
    if (week == 4) week -= 1;
    if (month == 12) month -= 1;
    //document.getElementById("leftminutes").className = 'main_item';
    document.getElementById("leftminutes").innerHTML = checkNumber(minutes);
    //document.getElementById("lefthour").className = 'main_item';
    document.getElementById("lefthour").innerHTML = checkNumber(hours);

    document.getElementById("test").innerHTML = checkNumber(days);

    if (leftday > 0) {
        if (document.getElementById("days_block") == null)
        {
            days_unit = createTimeBlock("days", leftday);
            let hours_value = document.getElementById("lefthour");
            let hours_block = hours_value.parentElement;
            hours_block.before(days_unit);
        }
    }
    else {
        removeTimeBlock("days");
    }

    if (month > 0) {
        if (document.getElementById("month_block") == null) {
            month_unit = createTimeBlock("month", month);
            if (document.getElementById("years_block") != null) {
                let years_block = document.getElementById("years_block");
                years_block.after(month_unit);
            }
            else {
                let display = document.getElementById("result");
                display.prepend(month_unit);
            }
        }
    }
    else {
        removeTimeBlock("month");
    }



    if (year > 0) {
        if (document.getElementById("years_block") == null) {
            let display = document.getElementById("result");
            display.prepend(createTimeBlock("years", year));
        }
        else document.getElementById("years_unit").innerHTML = checkNumber(year);
    }
    else {
        removeTimeBlock("years");
    }

    if (week > 0) {
        if (document.getElementById("weeks_block") == null) {

            weeks_unit = createTimeBlock("weeks", week);
            if (document.getElementById("years_block") != null) {
                let years = document.getElementById("years_block");
                years.after(weeks_unit);
            }
            else if (document.getElementById("month_block") != null) {
                let month = document.getElementById("month_block");
                month.after(weeks_unit);
            }
            let display = document.getElementById("result");
            display.prepend(weeks_unit);
        }
    }
    else {
        removeTimeBlock("weeks");
    } 
    if (duration > 0) setTimeout(tickCountdown, 1000);
    if ((year == 0) && (month == 0) && (week == 0) && (leftday == 0) && (hours == 0) && (minutes == 0) && (second == 0))
    {
        var audio = new Audio(document.getElementById("fileInput").value);
        audio.play();
        setTimeout(tickCountdown, 100000000000);
    }
    console.log(document.getElementById("fileInput").value);
}

////////////////////////////////
function createTimeBlock(unit_name, value)
{
    let main_item = document.createElement("div");
    main_item.className = "main_item_hidden";
    main_item.id = `${unit_name}_block`;
    let unit = document.createElement("div");
    unit.id = `${unit_name}_unit`;
    unit.className = "main_item";
    unit.innerHTML = checkNumber(value);
    let marker = document.createElement("div");
    marker.id = `${unit_name}_marker`;
    marker.className = "main_item";
    marker.innerHTML = unit_name.charAt(0).toUpperCase() + unit_name.slice(1);
    main_item.prepend(unit);
    main_item.append(marker);
    return main_item;
}

function removeTimeBlock(name)
{
    if (document.getElementById(`${name}_unit`) != null) {
        let item = document.getElementById(`${name}_unit`);
        let block = item.parentElement;
        let display = block.parentElement;
        display.removeChild(block);
    }
}