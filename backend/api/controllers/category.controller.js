const Category = require("../models/category.model.js");

const getAllCategories = async (req, res) => {
	try {
		const allCategories = await Category.find();
		res.status(200).json({ categories: allCategories });
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const saveCategory = async (req, res) => {
	if (req.body) {
		try {
			const newCategory = new Category(req.body);
			await newCategory.save();
			res.status(201).json({ id: newCategory._id });
		} catch (error) {
			res.status(406).json({ error: error.message });
		}
	}
};

const getRoomsInCategory = async (req, res) => {
	if (req.params.id) {
		try {
			const { rooms } = await Category.findById({
				_id: req.params.id,
			}).populate("rooms");
			res.status(200).json({ rooms: rooms });
		} catch (error) {
			res.status(404).json({ error: error.message });
		}
	}
};

module.exports = { getAllCategories, saveCategory, getRoomsInCategory };
