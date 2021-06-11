import React from "react";
import { Link } from "react-router-dom";

const RoomCard = ({ subject }) => {
	return (
		<div className="col-sm-3">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{subject.code}</h5>
					<p className="card-text mb-0 pb-1">Rs.{subject.amount}</p>
					<p className="card-text mb-0 pb-1">Wing: {subject.wing}</p>
					<p className="card-text">Pax: {subject.pax}</p>
					<Link to="/" className="btn btn-primary">
						Delete
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RoomCard;
