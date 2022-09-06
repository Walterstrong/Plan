console.log("----------------------------------------------------------------");
console.log("Jack Ma maslahatlari");
const list = [
  "yaxshi talaba bo'ling", // 0-20
  "yaxshi rahbar tanlang va xato qilishdan qo'rmang", // 20-30
  "o'zingizni shaxsiy biznesingizni boshlang", //30-40
  "o'zingiz kuchli bo'lgan sohalarni tanlang", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "o'z tajribalaringizni yoshlarga ulashing", // 60
];

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    callback(null, list[5]);
  }
}

maslahatBering(40, (err, data) => {
  if (err) console.log("ERROR:", err);
  console.log("javob:", data);
});

console.log("----------------------------------------------------------------");

console.log("----------------------------------------------------------------");
let users = ["walter", "shawn", "oscar", "david", "john"];
function addUser(username, callback) {
  setTimeout(function () {
    users.push(username);
    callback();
  }, 4000);
}
console.log("birinchisidan o'tdi");

function getUsers() {
  setTimeout(function () {
    console.log(users);
  }, 100);
}
console.log("ikkinchisidan o'tdi");
addUser("peter", getUsers);
