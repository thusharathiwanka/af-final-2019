import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
	return (
		<div className="card mb-4">
			<div className="card-header">Featured</div>
			<div className="card-body">
				<h5 className="card-title">{category.name}</h5>
				<p className="card-text">{category.description}</p>
				<Link to={`rooms/${category._id}`} className="btn btn-primary">
					View Rooms
				</Link>
			</div>
		</div>
	);
};

export default CategoryCard;
