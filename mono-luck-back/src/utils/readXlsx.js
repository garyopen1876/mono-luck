const db = require("../models/index.js");
const xlsx = require("xlsx");

let workbook = xlsx.readFile("./member.xlsx");
let sheetNames = workbook.SheetNames;
// 獲取第一個workSheet
let sheet1 = workbook.Sheets[sheetNames[0]];
// console.log(sheet1);

let range = xlsx.utils.decode_range(sheet1["!ref"]);

//迴圈獲取單元格值
for (let R = range.s.r + 1; R <= range.e.r; ++R) {
  let row_value = "";
  for (let C = range.s.c; C <= range.e.c; ++C) {
    let cell_address = { c: C, r: R }; //獲取單元格地址
    let cell = xlsx.utils.encode_cell(cell_address); //根據單元格地址獲取單元格
    //獲取單元格值
    if (sheet1[cell]) {
      // 如果出現亂碼可以使用iconv-lite進行轉碼
      // row_value += iconv.decode(sheet1[cell].v, 'gbk') + ", ";
      row_value += sheet1[cell].v + ", ";
    } else {
      row_value += ", ";
    }
  }
  const datas = row_value.split(",");
  db.members.create({
    name: datas[1].replace(/\s*/g, ""),
    cardId: datas[2].replace(/\s*/g, ""),
    phone: datas[3].replace(/\s*/g, ""),
    email: datas[4].replace(/\s*/g, ""),
  });
}
