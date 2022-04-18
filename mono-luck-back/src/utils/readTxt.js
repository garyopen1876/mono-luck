const db = require("../models/index.js");
const fs = require('fs')

fs.readFile('./locker.txt', function (error, data) {
    // 若錯誤 error 為一個物件，則會在這邊觸發內部程式碼，作為簡單的錯誤處理
    if (error) {
        console.log('讀取檔案失敗')
        return
    }
    const first_clear = data.toString().split('------')
    for (let i in first_clear ){
        db.lockers.create({
            lockerNo: first_clear[i].split('\n')[2].split(':')[1],
            lockerEncoding: first_clear[i].split('\n')[1].split(':')[1],
            unlockEncoding: first_clear[i].split('\n')[3].split(':')[1],
        });
    }
  })