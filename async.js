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

async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(list[5]);
      }, 5000);
    });
  }
}

//then/catch
// console.log("passed here 0");
// maslahatBering(40)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

//async/await
async function run() {
  let javob = await maslahatBering(65);
  console.log(javob);
  // javob = await maslahatBering(65);
  // console.log(javob);
  // javob = await maslahatBering(41);
  // console.log(javob);
}
run();
