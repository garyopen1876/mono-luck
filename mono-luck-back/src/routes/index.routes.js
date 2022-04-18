const { registerLocker, searchLockerLottery} = require('../controllers/index.controllers');

module.exports = function(router) {

    router.get('/docs', (req, res) => {
        res.send();
    });

    router.get('/docs/:id', (req, res) => {
        res.send();
    });

    router.get('/api/lottery', searchLockerLottery);

    router.post('/api/registerLocker', registerLocker);
}