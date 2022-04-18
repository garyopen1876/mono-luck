const db = require('../models/index.js');

const findLockerByMemberId = async (memberId) => {
    const locker = await db.lockers.findOne({
        where: { 
            memberId: memberId,
        }
    });
    return locker;
}

module.exports = {
    findLockerByMemberId
}
