const router = require("express").Router();
const {
	getAllCategories,
	saveCategory,
	getRoomsInCategory,
} = require("../controllers/category.controller");

router.get("/", getAllCategories);
router.get("/:id", getRoomsInCategory);
router.post("/", saveCategory);

module.exports = router;
