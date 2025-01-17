import React, { useState, useEffect } from "react";

import { Link, useLoaderData, Outlet } from "react-router-dom";

import axios from "axios";

import BodyNotes from "./BodyNotes";

export async function notesLoading() {
	let res = await axios.get(process.env.REACT_APP_URL, {
		params: {
			userId: "emgarcia",
		}
	});
	return res.data;
}

export default function Notes() {
	const [user, setUser] = useState(1);
	const [data, setData] = useState([]);

	const notes = useLoaderData();

	useEffect(() => {
		setData(notes);
		console.log(notes);
	}, [notes]);
	return (
		<div style={{ width: "100%" }}>
			<div style={{display:"flex", width:"100%"}}>
			<Link to="/notes/newNote">Add Note</Link>
			</div>
			<div style={{ display: "flex" }}>
				<BodyNotes data={data} user={user} />
				<Outlet />
			</div>
		</div>
	);
}
