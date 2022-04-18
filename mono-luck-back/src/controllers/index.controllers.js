const db = require('../models/index.js');
const memberService = require('../services/memberService.js');
const registrationService = require('../services/registrationService.js');
const lockerService = require('../services/lockerService.js');
const phoneFormatter = require('../utils/phoneFormat.js')
const reqBodyCheck = require('../utils/reqBodyCheck.js')


registerLocker = async (req, res) => {
    try {
        //time check
        let nowDate = new Date();
        let endDate = '2022/03/13 23:59:59';
        if(Date.parse(nowDate).valueOf() > Date.parse(endDate).valueOf()) {
            return res.status(404).json({ message: '登記抽籤時間已過' });
        }

        if(reqBodyCheck.reqBodyCheck(req.body) == false){
            return res.status(404).json({ message: '資料內容錯誤'});
        }

        const phone = phoneFormatter.format886PhoneNumber(req.body.phone);

        const checkMember = await memberService.isSubscriber(phone);
        if(!checkMember) {
            return res.status(404).json({ message: '非暢遊會員,無法登記鎖櫃!' });
        }

        const [member, created] = await registrationService.findOrCreate(checkMember.id,req.body.priority);
        if(!created) {
            return res.status(403).json({ message: '您已登記過鎖櫃!'});
        }
        else {
            return res.status(201).json(member);
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}


searchLockerLottery = async (req, res) => {
    try {
        const phone = phoneFormatter.format886PhoneNumber(req.query.phone);//notice!! it's req.query!!
        if(!phone.length) {
            return res.status(404).json({ message: '資料內容錯誤'});
        } 
        const checkMember = await memberService.isSubscriber(phone);
        if(!checkMember) {
            return res.status(404).json({ message: '非暢遊會員,無法登記鎖櫃!' });
        }
        
        const locker = await lockerService.findLockerByMemberId(checkMember.id);
        if(locker) {
            return res.status(200).json({ message: '您抽中的鎖櫃為 - '+
            locker.dataValues.lockerNo+' 號('+locker.dataValues.lockerEncoding+') 請向工作人員索取使用登記表簽名'});
        }

        const registration = await registrationService.isRegistered(checkMember.id);
        if(registration) {
            return res.status(200).json({ message: '目前鎖櫃尚在登記中，請在 03/14 中午 12:00 回來本系統查看中籤資訊'});
        }
        else {
            return res.status(404).json({ message: '您還沒登記鎖櫃!'});
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = {
    registerLocker,
    searchLockerLottery,
}