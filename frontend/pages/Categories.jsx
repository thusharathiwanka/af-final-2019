import React, { useEffect, useState } from "react";
import axios from "axios";

import CategoryCard from "../components/categories/CategoryCard";

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		axios.get("categories").then((res) => {
			setCategories(res.data.categories);
		});
	}, []);

	return (
		<div className="container-lg mt-5">
			<h1 className="display-5 text-center mb-5">All Categories</h1>
			{categories.map((category) => {
				return <CategoryCard category={category} key={category._id} />;
			})}
		</div>
	);
};

export default Categories;
