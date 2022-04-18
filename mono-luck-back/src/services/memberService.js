const db = require('../models/index.js');

const isSubscriber = async (phone) => {
    const member = await db.members.findOne({
        where: {
            phone: phone
        }
    });
    return member;
}

const getMemberCardIdByPhone = async (phone) => {
    const member = await db.members.findOne({
        where: {
            phone: phone
        }
    });
    return member.dataValues;
}

module.exports = {
    isSubscriber,
    getMemberCardIdByPhone
}