module.exports.getRoomsCount = async (roomStatus) => {
    return await Room.countDocuments({
        ...roomStatus && {status: roomStatus}
    });
};