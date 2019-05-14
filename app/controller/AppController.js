const roomService = require('../service/AppService');

module.exports.getRoomsCount = async (req, res) => {
    try {
        const roomsCount = await roomService.getRoomsCount(req.query.status);
        return res.send({
            "count": roomsCount
        })
    } catch (error) {
        return res.status(500).send({
            message: error.message
        });
    }
};