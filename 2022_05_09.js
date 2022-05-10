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

//=======================================================================================

//Q.31

//arr[i]          O(n)
//arr.push(5)     O(1)
//arr.slice()     O(n)
//arr.pop()       O(1)
//arr.includes(5) O(n)

//===============================================================

//Q.32

var input_32 = "안녕하세요, 저는 제주대학교 음악학부졸업생 김재만입니다.";
var count_32 = input_32.split(" ").length;

console.log(count_32);

//==============================================================

//Q.33
var input_33_1 = "1 2 3 4 5";
var input_33_2 = "2 4 6 7 8";

var reverse_33_1 = input_33_1.split(" ").reverse().join(" ");
var reverse_33_2 = input_33_2.split(" ").reverse().join(" ");

console.log(reverse_33_1);
console.log(reverse_33_2);

//==============================================================

//Q.34

var input_34_1 = "176 156 155 165 166 169";
var input_34_2 = "155 156 165 166 169 179";

var sorted_34_1 = input_34_1
  .split(" ")
  .sort((a, b) => a - b)
  .join(" ");
var sorted_34_2 = input_34_2
  .split(" ")
  .sort((a, b) => a - b)
  .join(" ");

if (input_34_1 === sorted_34_1) {
  console.log("YES");
} else {
  console.log("NO");
}

if (input_34_2 === sorted_34_2) {
  console.log("YES");
} else {
  console.log("NO");
}

//==========================================================

//Q.35

function one(n) {
  function two(m) {
    return m ** n;
  }
  return two;
}

const a_35 = one(2);
const b_35 = one(3);
const c_35 = one(4);

console.log(a_35(10));
console.log(b_35(10));
console.log(c_35(10));

//===========================================================

//Q.36

var input_36 = 2;
var result_36 = "";

for (let i = 1; i <= 9; i++) {
  result_36 += input_36 * i + " ";
}

console.log(result_36);

//=========================================================

//Q.37

var input_37 = "원범 원범 혜원 혜원 혜원 혜원 유진 유진";
var arr_37 = input_37.split(" ");
var result_37 = {};

for (i = 0; i < arr_37.length; i++) {
  if (result_37[arr_37[i]]) {
    result_37[arr_37[i]] += 1;
  } else {
    result_37[arr_37[i]] = 1;
  }
}

var winner = Object.keys(result_37).reduce(function (a, b) {
  return result_37[a] > result_37[b] ? a : b;
});

console.log(`${winner}(이)가 총 ${result_37[winner]}표로 반장이 되었습니다.`);

//===========================================================

//Q.38

var input_38 = "97 86 75 66 55 97 85 97 97 95";
var arr_38 = input_38.split(" ").sort((a, b) => b - a);
var obj_38 = {};
var count = 0;

for (i = 0; i < arr_38.length; i++) {
  if (obj_38[arr_38[i]]) {
    obj_38[arr_38[i]] += 1;
  } else {
    count += 1;
    if (count > 3) {
      break;
    }
    obj_38[arr_38[i]] = 1;
  }
}

var nums_38 = Object.values(obj_38);
var sum_38 = 0;
for (let j of nums_38) {
  sum_38 += j;
}
console.log(sum_38);

//========================================================

//Q.39

var input_39_1 = "querty";
var input_39_2 = "hqllo my namq is hyqwon";

console.log(input_39_1.split("q").join("e"));
console.log(input_39_2.split("q").join("e"));

//===========================================================

//Q.40

var input_40_weight = 50;
var input_40_nums = 5;
var input_40_person = [20, 20, 20, 20, 20];
var sum_40 = 0;
var count_40 = 0;

for (i of input_40_person) {
  if (sum_40 + i > input_40_weight) {
    break;
  }
  sum_40 += i;
  count_40 += 1;
}
console.log(sum_40);
console.log(count_40);

//========================================================

//Q.41

var input_41 = 19;
var arr_41 = [];

for (let i = 2; i <= input_41; i++) {
  let count = 0;
  for (let j = 0; j < arr_41.length; j++) {
    if (i % arr_41[j] === 0) {
      count += 1;
      break;
    } else {
      continue;
    }
  }
  if (count === 0) {
    arr_41.push(i);
  }
}

if (arr_41.includes(input_41)) {
  console.log("YES");
} else {
  console.log("NO");
}

//=========================================================

//Q.42

var input_a_42 = 5;
var input_b_42 = 26;

const day_42 = new Date(`2020-${input_a_42}-${input_b_42}`);

const days_42 = {
  0: "SUN",
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
  6: "SAT",
};
console.log(days_42[day_42.getDay()]);

//==================================================

//Q.43

var input_43 = 13;
var arr_43 = [];

while (input_43 >= 1) {
  arr_43.unshift(input_43 % 2);
  input_43 = parseInt(input_43 / 2);
}

console.log(arr_43.join(""));

//=====================================================

//Q.44

var input_44 = 18234;

var sum_44 = 0;

for (i = 0; i < String(input_44).length; i++) {
  sum_44 += parseInt(String(input_44)[i]);
}

console.log(sum_44);

//======================================================

//Q.45

var day_45 = new Date();
console.log(parseInt(day_45.getTime() / (1000 * 60 * 60 * 24 * 365)) + 1970);

//===========================================================

//Q.46

var input_46_1 = 10;
var input_46_2 = 15;
var sum_46 = 0;
for (let i = input_46_1; i <= input_46_2; i++) {
  i = String(i);
  console.log(i);
  for (let j = 0; j < i.length; j++) {
    sum_46 += parseInt(i[j]);
  }
}
console.log(sum_46);

//============================================================

//Q.47

const people_47 = [
  ("김재만", "01074300220"),
  ("김재민", "01074300221"),
  ("김만재", "01074200221"),
  ("김재만", "01074300220"),
  ("김만", "01074330221"),
  ("김재", "01074301221"),
  ("김재만", "01074300220"),
];

const set_47 = new Set(people_47);
console.log(set_47.size);

//=============================================================

//Q.48

const input_48 = "AAABBBcccddd";
let result_48 = "";

for (i of input_48) {
  if (i === i.toUpperCase()) {
    result_48 += i.toLowerCase();
  } else {
    result_48 += i.toUpperCase();
  }
}
console.log(result_48);

//===================================================================

//Q.49

const input_49 = "10 9 8 7 6 5 4 3 2 1";

const arr_49 = input_49.split(" ");

let result_49 = arr_49.map((n) => {
  return parseInt(n, 10);
});

result_49 = arr_49.sort((a, b) => {
  return b - a;
});

console.log(result_49[0]);

//=======================================================================

//Q.50

function bubble(arr) {
  let result = arr.slice();

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        let value = result[j];
        result[j] = result[j + 1];
        result[j + 1] = value;
      }
    }
  }
  return result;
}

const items_50 = prompt("")
  .split(" ")
  .map((n) => {
    return parseInt(n, 10);
  });

console.log(bubble(items_50));

//=======================================================================

//12, 21, 23, 30, 36, 37, 38, 41, 43, 46, 49

//Q.51

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

//==========================================================

//Q.52

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

//======================================================================

//Q.71

const graph_71 = {
  A: ["E", "c", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
  E: ["D", "A"],
  F: ["D"],
};

function dfs(graph, start) {
  let visited = [];
  let stack = [start];

  while (stack.length != 0) {
    let n = stack.pop();
    if (!visitied.includes(n)) {
      visited.push(n);
      let sub = graph[n].filter((x) => !visited.includes(x));
      for (let i of sub) {
        stack.push(i);
      }
    }
  }
}

//==============================================================================

//Q.72

function bfs(graph, start) {
  let visited = [];
  let queue = [start];

  while (queue.lenth != 0) {
    let n = queue.shift();
    if (!visited.includes(n)) {
      visited.push(n);
      let sub = graph[n].filter((x) => !visited.includes(x));
      for (let i of sub) {
        stack.push(i);
      }
    }
  }
}
