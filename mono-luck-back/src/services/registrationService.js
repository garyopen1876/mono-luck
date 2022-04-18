const db = require('../models/index.js');

const isRegistered = async (memberId) => {
    const registration = await db.registrations.findOne({ 
        where: { 
            memberId: memberId
        }
    });
    return registration;
}

const findOrCreate = async (memberId,priority) => {
    const [member, created] = await db.registrations.findOrCreate({
        where: {
            memberId: memberId
        },
        defaults: {
            priority: priority
        }
    });
    return [member, created];
}

module.exports = {
    isRegistered,
    findOrCreate
}
