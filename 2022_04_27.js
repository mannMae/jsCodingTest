//Q.1
var nums = [100, 200, 300, 400, 500];

nums.pop();
nums.pop();

console.log(nums);

//======================================================

//Q.2
var arr = [200, 100, 300];
arr.splice(2, 0, 1000);
console.log(arr);

//===================================================

//Q.3
var arr = [100, 200, 300];
console.log(typeof arr); // object(Array)

//====================================================

//Q.4

var a;
a = 1;
console.log(typeof a); // number

a = 2.22;
console.log(typeof a); // number

a = "p";
console.log(typeof a); // string

a = [1, 2, 3];
console.log(typeof a); // object

//===================================================

//Q.5
var a = 10;
var b = 2;

for (var i = 1; i < 5; i += 2) {
  a += i;
}

console.log(a + b); // 16

//=====================================================

//Q.6
console.log(!NaN); // true
console.log(!1); // false
console.log(!""); // true
console.log(!0); // true
console.log(!undefined); // true

//======================================================

//Q.7
//let > 키워드(예약어)는 변수명으로 사용할 수 없다.
//1age > 숫자는 변수명의 제일 앞에 올 수 없다.

//========================================================

//Q.8
var d = {
  height: 180,
  weight: 78,
  weight: 84,
  temperature: 36,
  eyesight: 1,
};

console.log(d["weight"]); // 나중에 입력된 84 값이 출력된다.

//=========================================================

//Q.9
var year = "2019";
var month = "04";
var day = "26";
var hour = "11";
var minute = "34";
var second = "27";

var result = year.concat(
  "/",
  month,
  "/",
  day,
  " ",
  hour,
  ":",
  minute,
  ":",
  second
);

console.log(result);

//=========================================

//Q.10
var floor = 5;

for (i = 0; i < floor; i++) {
  var f = "";
  for (j = 0; j < floor - i; j++) {
    f += " ";
  }
  for (k = 0; k < 2 * i + 1; k++) {
    f += "*";
  }
  console.log(f);
}

//===========================================

//Q.11
let s = 0;
for (let i = 1; i <= 100; i++) {
  s += i;
}
console.log(s);

//=================================================

//Q.12

class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  attack() {
    console.log("파이어볼");
  }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor); // 545 210 10
x.attack(); //파이어볼

//======================================================

//Q.13

const planets = [
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천왕성",
  "해왕성",
];

let input = 1;
console.log(planets[input - 1]); // 수성

//======================================================

//Q.14
var input_14 = 12;

if (input_14 % 3 === 0 && input_14 !== 0) {
  console.log("짝");
} else {
  console.log(input_14);
}

//=======================================================

//Q.15

var name_15 = "김재만";

console.log(`안녕하세요. 저는 ${name_15}입니다.`);

//============================================================

//Q.16

var word_16 = "거꾸로";
console.log(word_16.split("").reverse().join(""));

//===============================================================

//Q.17

var input_17 = 151;

if (input_17 >= 150) {
  console.log("YES");
} else {
  console.log("NO");
}

//==================================================================

//Q.18

var input_18 = "20 30 40";

var scores = input_18.split(" ");
var sum_18 = 0;
for (i of scores) {
  sum_18 += parseInt(i);
}

var average = parseInt(sum_18 / scores.length, 10);

console.log(average);

//10, 12, 18
