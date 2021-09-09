// var val1 = "var変数"
// console.log(val1);

// var1 = "var変数を上書き"
// console.log(var1);

// let let1 = "var変数"
// console.log(let1);

// let let1 = "var変数を上書き"
// console.log(let1);

// const val3 = "const変数"
// console.log(val3);

// const val3 = "変数を上書き"
// console.log(val3);

// const val4 = {
//   name: "名前",
//   age: 30,
// };
// val4.address = "東京都"
// console.log(val4);

// const name = "鈴木"
// const age = 20

// const meesage = `私の名前は${name}です。年齢は${age}です`;
// console.log(meesage);

// const func1 = function (str) {
//   return str;
// }

// console.log(func1("関数です"));

// const func2 = str => str

// console.log(func2("関数"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 200));


// const myProfile = {
//   name: "鈴木",
//   age: 20
// };

// const meesage1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`

// console.log(meesage1);

// const {name, age} = myProfile;
// const meesage2 = `名前は${name}です。年齢は${age}歳です。`
// console.log(meesage2);

// const myProfile = ["鈴木", 20];
// const meesage3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`
// console.log(meesage3);

// const [name, age] = myProfile;
// const meesage4 = `名前は${name}です。年齢は${age}です。`
// console.log(meesage4);

// const sayhello = (name = "ゲスト") => console.log(`${name}さんこんにちは！`);

// sayhello("鈴木");

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 50];
// const arr6 = [...arr4];
// // console.log(arr6);

// console.log(...arr4, ...arr5);

// const nameArr = ["鈴木", "佐藤", "近藤"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// });

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newnumArr = numArr.filter((name)=>{
//   return name % 2 == 0;
// });
// console.log(newnumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "鈴木") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// 三項演算子
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = "1300";

// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲内です";
// }
// console.log(checkSum(100, 2));

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か２はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も２はtrueになります");
// }

// ||は左側がfalseなら右側を返す
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "なにか設定されました";
console.log(fee2);