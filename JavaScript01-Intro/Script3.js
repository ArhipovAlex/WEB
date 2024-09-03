// JavaScript source code
console.log(document.body.innerHTML);
let headers = document.body.getElementsByTagName("h1");
let paragraph = document.createElement("p");
paragraph.innerHTML = `Это ${headers[0].innerHTML} &ndash; Объектная модель документа` +
    `Этот абзац добавлен фукцией <code>append()</code>`;
//document.body.append(paragraph);/*Добавляет в самый конец ноды, перед закрывающим дескриптором*/
//document.body.prepend(paragraph);/*Добавляет в самое начало ноды, после открывающего дескриптора*/
//document.body.before(paragraph);/*Добавляет перед нодой, перед открывающим дескриптором*/
//document.body.after(paragraph);/*Добавляет после ноды, после закрывающего дескриптора*/

//console.log(document.body.childNodes);
document.body.lastChild.before(paragraph);

let header2 = document.createElement("h2");
header2.innerHTML = paragraph.innerHTML;
paragraph.replaceWith(header2);

let u_list = document.createElement("ul");

for (let i = 0; i < 5; i++)
{
    let item = document.createElement("li");
    item.innerHTML = `Элемент списка ${i+1}`;
    u_list.append(item);
}

let headers2 = document.getElementsByTagName("h2");
console.log(u_list);

headers2[0].after(u_list);

//console.log(document.getElementsByTagName("ul")[0].lastChild);

headers2[0].insertAdjacentHTML('beforebegin', '<p><strong><code>Этот текст добавлен при помощи insertAdjasentHTML(beforebegin)</code></strong></p>');//вставить снаружи перед открывающим
headers2[0].insertAdjacentHTML('afterbegin', '<p><strong><code>Этот текст добавлен при помощи insertAdjasentHTML(afterbegin)</code></strong></p>');//вставить внутри после открывающего
headers2[0].insertAdjacentHTML('beforeend', '<p><strong><code>Этот текст добавлен при помощи insertAdjasentHTML(beforeend)</code></strong></p>');//вставить внутри перед закрывающим
headers2[0].insertAdjacentHTML('afterend', '<p><strong><code>Этот текст добавлен при помощи insertAdjasentHTML(afterend)</code></strong></p>');//вставить снаружи после закрывающего

let script = document.getElementsByTagName("script");
let ol_header = document.createElement("h2");
ol_header.innerHTML = "Создаем нумерованный список при помощи JS:";
console.log(ol_header);
script[0].insertAdjacentHTML('beforebegin', ol_header.outerHTML);
let ol = document.createElement("ol");
for (let i = 0; i < 5; i++)
{
    let item = document.createElement("li");
    item.innerHTML = `Элемент ${i}`;
    ol.insertAdjacentHTML('beforeend', item.outerHTML);
}
script[0].insertAdjacentHTML('beforebegin', ol.outerHTML);
//элементы можно клонировать
let header2_clone = header2.cloneNode(true);
header2_clone.innerHTML = "Клонирование элементов (это склонировано с Header2)";
script[0].insertAdjacentHTML('beforebegin', header2_clone.outerHTML);

let u_list_clone = u_list.cloneNode(true);
for (let i = 0; i < u_list_clone.children.length; i++)
{
    u_list_clone.children[i].innerHTML += " (CLONE)";
}
script[0].insertAdjacentHTML("beforebegin", u_list_clone.innerHTML);

script[0].insertAdjacentText("beforebegin", "Вставляем соседний текст");
let header3 = document.createElement("h3");
header3.innerHTML = "Добавляем элемент при помощи функции <strong><code>insertAdjacentElement</code></strong>";
script[0].insertAdjacentElement("beforebegin", header3);

//let header3_clone = header3.cloneNode(true);
//header3_clone.innerHTML = "Удаление элементов со страницы:";

for (let i = 0; i < 3; i++)
{
    u_list.lastChild.remove();
}

u_list.nodeName = "OL";
u_list.localName = "ol";
u_list.tagName = "OL";
