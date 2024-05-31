var res;

function function1() {
    res = document.getElementById("task-1");
    var str = "hdfgv";
    res.innerText = str[0] + str[1] + str[4];
}
function function2() {
    res = document.getElementById("task-2");
    var sec = 60 * 60;
    res.innerText = sec;
}
function function3() {
    var num = 1;
    num += 12;
    num -= 14;
    num *= 5;
    num /= 7;
    num++;
    num--;
    alert(num);
}
function function4() {
    var num = 3;
    alert(num);
}
function function5() {
    res = document.getElementById("task-5");
    var a = 10, b = 2;
    let add = "a + b = " + (a + b);
    let sub = "a - b = " + (a - b);
    let mul = "a * b = " + (a * b);
    let div = "a / b = " + (a / b);
    res.innerText = `${add} \n ${sub} \n ${mul} \n ${div}`;
}
function function6() {
    res = document.getElementById("task-6");
    var c = 15, d = 2;
    var result = c + d;
    res.innerText = result;
}
function function7() {
    res = document.getElementById("task-7");
    var a = 10, b = 2, c = 5;
    var result = a + b + c;
    res.innerText = result;
}
function function8() {
    res = document.getElementById("task-8");
    var a = 17, b = 10;
    var c = a - b;
    var d = 7;
    var result = c + d;
    res.innerText = result;
}
function function9() {
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
function function11() {
    res = document.getElementById("task-11");
    var a = 5;
    res.innerText = a + " * " + a + " = " + (a * a);
}
function function12() {
    res = document.getElementById("task-12");
    for (var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], i = 0, sum = 0; i < arr.length; i++) {if (i % 2 == 0) sum += Math.sqrt(i);}
    res.innerText = sum;
}
function function13() {
    res = document.getElementById("task-13");
    let apple = 1.15, orange = 2.30;
    let total = apple + orange;
    res.innerText = total;
}
function function14() {
    res = document.getElementById("task-14");
    let x = 5;
    alert(x++);
    res.innerText = x;
}
function function15() {
    res = document.getElementById("task-15");
    var str = [ ] + false - null + true;
    res.innerText = str;
}
function function16() {
    res = document.getElementById("task-16");
    let y = 1; let x = y = 2;
    console.log(x);
}
function function17() {
    res = document.getElementById("task-17");
    var a = [ ] + 1 + 2;
    res.innerText = a;
}
function function18() {
    res = document.getElementById("task-18");
    let a6, a7, a8, a9, a10;
    a6 = 5 % 3;
    a7 = 3 % 5;
    a8 = 5 + '3';
    a9 = '5' - 3;
    a10 = 75 + 'kg';
    res.innerText = `${a6} \n ${a7} \n ${a8} \n ${a9} \n ${a10} \n`;
}
function function19() {
    res = document.getElementById("task-19");
    let height = 23, width = 10;
    let s = height * width;
    res.innerText = s + 'cm²'; 
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
}
function function23() {
    res = document.getElementById("task-23");
    let num = document.getElementById("txtbox23").value;
    res.innerText = num * (-1);
}