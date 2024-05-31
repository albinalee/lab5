<p align = "center">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ<br>
РОССИЙСКОЙ ФЕДЕРАЦИИ<br>
ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ<br>
ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ<br>
«САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</p>
<br><br><br><br><br><br>
<p align = "center">Институт естественных наук и техносферной безопасности<br>Кафедра информатики<br>Ли Альбина Тевоновна</p>
<br><br><br>
<p align = "center"><br><strong>Лабораторная работа №5. «JS»</strong><br>01.03.02 Прикладная математика и информатика</p>
<br><br><br><br><br><br><br><br><br><br><br><br>
<p align = "right">Научный руководитель<br>
Соболев Евгений Игоревич</p>
<br><br><br>
<p align = "center">г. Южно-Сахалинск<br>2024 г.</p>
<br><br><br><br><br><br><br><br><br><br><br><br>

<h1 align = "center">Введение</h1>

<p><b>Веб-разработка</b> — процесс создания веб-сайта или веб-приложения. Основными этапами процесса являются: </p>

<ul>
<li>Проектирование сайта или веб-приложения (сбор и анализ требований, разработка технического задания, проектирование интерфейсов);</li>
<li>Создание дизайн-концепции сайта;</li>
<li>Создание страниц;</li>
<li>Программирование;</li>
<li>Оптимизация и размещение материалов сайта;</li>
<li>Тестирование и внесение корректировок;</li>
<li>Публикация проекта на хостинге;</li>
<li>Обслуживание работающего сайта.</li>
</ul>

<br>

<h1 align = "center">Цели и задачи</h1>


<p>Цель: ознакомиться с принципами работы в JavaScript.</p>

<p>Задачи:</p>

<ul>
<li>Изучить синтаксис JavaScript</li>
<li>Научиться форматированию элементов c подключением скриптов</li>
</ul>

<p></p>

<h1 align = "center">Решение</h1>

<p>Для выполнения этой лабораторной работы, я пользовалась лекционным материалом и интернет-ресурсами для поиска решений задач оформления и для поиска медиаресурсов:</p>

<ul>
<li><a href="https://youtube.com/">YouTube</a></li>
<li><a href="https://stackoverflow.com/">Stack Overflow</a></li>
</ul>

<p>Примеры кода:</p>
<code>function function9() {
    res = document.getElementById("task-9");
    var Hoursec = 60 * 60;
    var Daysec = Hoursec * 24;
    var Monthsec = Daysec * 30;
    res.innerText = `Hour: ${Hoursec}\n Day: ${Daysec}\n Month: ${Monthsec}`;
}
function function10() {
    res = document.getElementById("task-10");
    let nowTime = new Date();
    let Hour = nowTime.getHours();
    let Minute = nowTime.getMinutes();
    let Second = nowTime.getSeconds();
    res.innerText = Hour + ":" + Minute + ":" + Second;
}
function function20() {
    res = document.getElementById("task-20");
    let heightC = 10, dC = 4, PI = Math.PI;
    let volume = Math.pow((dC / 2), 2) * PI * heightC;
    res.innerText = volume.toFixed(2) + 'm²'
}
function function21() {
    res = document.getElementById("task-21");
    let S = 2000000, p = 0.1, year = 5;
    let r = p / 12, n = year * 12;
    let perepl = S * (r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1) * n;
    res.innerText = Math.round(perepl - S);
}
function function22() {
    res = document.getElementById("task-22");
    let str = 'Hi', num = 123, flag = true, txt = 'true';
    res.innerText = `${typeof str}\n ${typeof num}\n ${typeof flag}\n ${typeof txt}\n`;
}</code>
</br></br>
<h1 align = "center">Вывод</h1>
<p>В результате проделанной лабораторной работы, я познакомилась с новыми элементами языка JavaScript и потренировалась в решении простых задач.</p>
