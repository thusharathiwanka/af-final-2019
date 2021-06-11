import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import RoomCard from "../components/rooms/RoomCard";

const Rooms = () => {
	const { id } = useParams();
	const [subjects, setSubjects] = useState([]);

	useEffect(() => {
		axios.get(`/categories/${id}`).then((res) => {
			setSubjects(res.data.rooms);
		});
	}, []);

	return (
		<div className="container-lg mt-5">
			<h1 className="display-5 text-center mb-5">Rooms</h1>
			<div className="row">
				{subjects.map((subject) => {
					return <RoomCard subject={subject} key={subject._id} />;
				})}
			</div>
		</div>
	);
};

export default Rooms;
