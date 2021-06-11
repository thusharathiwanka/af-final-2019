import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

import Navbar from "./nav/Navbar";
import Categories from "../pages/Categories";
import Rooms from "../pages/Rooms";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Categories />
				</Route>
				<Route exact path="/rooms/:id">
					<Rooms />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
