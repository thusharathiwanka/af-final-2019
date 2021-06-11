const router = require("express").Router();
const {
	getAllRooms,
	saveRoom,
	getTotal,
} = require("../controllers/room.controller");

router.get("/", getAllRooms);
router.post("/", saveRoom);
router.post("/total", getTotal);

module.exports = router;
