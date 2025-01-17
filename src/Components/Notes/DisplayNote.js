import React from "react";

import axios from "axios";

import Card from "../Common/Card";

import { Link, Form, useLoaderData, redirect } from "react-router-dom";

export async function noteLoader({ params }) {
	let res = await axios.get(`${process.env.REACT_APP_URL}${params.idNote}`);
	return res.data;
}

export async function noteDeleteAction({ params }) {
	await axios.delete(`${process.env.REACT_APP_URL}${params.idNote}`);
	return redirect('/notes');
}

export default function DisplayNote() {
	const note = useLoaderData();
	return (
		<div>
			<Card
				id={note.id}
				userId={note.userId}
				title={note.title}
				body={note.body}
			/>
			<Link to={`/notes/${note._id}/edit`}>
				Editar
			</Link>
			<Form method={'post'} type='submit'>
				<button>Borrar</button>
			</Form>
		</div>
	);
}
