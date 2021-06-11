const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const categoryRoutes = require("./api/routes/category.routes");
const roomRoutes = require("./api/routes/room.routes");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/categories", categoryRoutes);
app.use("/rooms", roomRoutes);

mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(process.env.PORT, () =>
			console.log(
				`mongodb connected, server up and running in port ${process.env.PORT}`
			)
		);
	})
	.catch((error) => {
		console.log(`couldn't connect to mongodb, due to ${error.message}`);
	});

app.get("/", (req, res) => {
	res.send("<h1 align='center'>Application Frameworks 2019</h1>");
});
