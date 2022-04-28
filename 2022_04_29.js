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

//Q.10f
var floor = 5;

for (let i = 0; i < floor; i++) {
  let s = "";
  for (let j = 0; j < floor - i - 1; j++) {
    s += " ";
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    s += "*";
  }
  console.log(s);
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
var scores_18 = input_18.split(" ");
var sum_18 = 0;
for (i of scores_18) {
  sum_18 += parseInt(i, 10);
}
console.log(parseInt(sum_18 / scores_18.length));

//=====================================================================

//Q.19

var input_19 = "2 5";
var nums_19 = input_19.split(" ");
console.log(parseInt(nums_19[0], 10) ** parseInt(nums_19[1], 10));

//======================================================================

//Q.20

var input_20 = "10 2";
var [a, b] = input_20.split(" ");
a = parseInt(a);
b = parseInt(b);
console.log(parseInt(a / b, 10), a % b);

//==========================================================================

//Q.21

// var set_1 = {1,2,3,5,6,7};
// console.log(set_1)
var set_2 = {};
console.log(set_2); // 빈 Object
var set_3 = new Set("javascript");
console.log(set_3); // Set(9) {'j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'}
// var set_4 = new Set(range(5));
// console.log(set_4);
var set_5 = new Set();
console.log(set_5); // Set(0) 빈 Set

//============================================================================

//Q.22

// i/6 : 몫
// i % 6 : 나머지 > 배수 확인 가능
// i & 6 : 비트 and 연산
// i | 6 : 비트 or 연산
// i//6 : 주석처리됨

//===========================================================================

//Q.23

console.log(10 / 3); //3.3333333333333335

//===========================================================================

//Q.24

var input_24 = "jaeman";
input_24 = input_24.toUpperCase();
console.log(input_24);

//=========================================================================

//Q.25

function circleWidth(r) {
  return r * r * 3.14;
}
var input_25 = 5;
console.log(circleWidth(input_25));

//==========================================================================

//Q.26

var planets2 = {
  수성: "Mercury",
  금성: "Venus",
  지구: "Earth",
  화성: "Mars",
  목성: "Jupiter",
  토성: "Saturn",
  천왕성: "Uranus",
  해왕성: "Neptune",
};
var input_26 = "토성";
console.log(planets2[input_26]);

//============================================================================

//Q.27

var input_27_1 = "Yujin Hyewon";
var input_27_2 = "70 100";
var name_27 = input_27_1.split(" ");
var nums_27 = input_27_2.split(" ");
var obj_27 = {};
for (i in name_27) {
  obj_27[name_27[i]] = parseInt(nums_27[i]);
}
console.log(obj_27);

//============================================================================

//Q.28

var input_28 = "JavaScript";
for (let i = 0; i < input_28.length - 1; i++) {
  console.log(input_28[i], input_28[i + 1]);
}

//=============================================================================

//Q.29

var input_29 = "q";
if (input_29 === input_29.toUpperCase()) {
  console.log("YES");
} else {
  console.log("NO");
}

//================================================================================

//Q.30

var input_30_1 = "pineapple is yummy";
var input_30_2 = "apple";

console.log(input_30_1.search(input_30_2));

//12, 21, 23, 30
