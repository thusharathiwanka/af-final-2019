const Room = require("../models/room.model.js");
const Category = require("../models/category.model.js");

const getAllRooms = async (req, res) => {
	try {
		const getAllRooms = await Room.find();
		res.status(200).json({ rooms: getAllRooms });
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const saveRoom = async (req, res) => {
	if (req.body) {
		try {
			const newRoom = new Room(req.body);
			await newRoom.save();
			await Category.updateMany(
				{ _id: newRoom.categories },
				{ $push: { rooms: newRoom._id } }
			);
			res.status(201).json({ id: newRoom._id });
		} catch (error) {
			res.status(406).json({ error: error.message });
		}
	}
};

const getTotal = async (req, res) => {
	if (req.body.id) {
		try {
			const allRooms = await Room.find({ _id: req.body.id });

			if (allRooms.length > 0) {
				let total = 0;
				allRooms.map((room) => {
					total += room.amount;
				});

				return res.status(200).json({ total: total });
			}

			res.status(200).json({ error: "no rooms" });
		} catch (error) {
			res.status(404).json({ error: error.message });
		}
	}
};

module.exports = { getAllRooms, saveRoom, getTotal };
