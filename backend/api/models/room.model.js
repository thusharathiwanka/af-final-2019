const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
	code: { type: String, required: true, trim: true },
	amount: { type: Number, required: true },
	wing: {
		type: String,
		required: true,
		trim: true,
		enum: ["west", "east", "north", "south"],
	},
	pax: {
		type: Number,
		required: true,
	},
	categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "categories" }],
});

const Room = new mongoose.model("rooms", RoomSchema);

module.exports = Room;
