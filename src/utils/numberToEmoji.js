const numEmoji = {
  0: "0️⃣",
  1: "1️⃣",
  2: "2️⃣",
  3: "3️⃣",
  4: "4️⃣",
  5: "5️⃣",
  6: "6️⃣",
  7: "7️⃣",
  8: "8️⃣",
  9: "9️⃣",
};

export default function numberToEmoji(num) {
  let newStr = "";
  for (let i of String(num)) {
    newStr += numEmoji[i];
  }
  return newStr;
}
