import "./App.css";
import React from "react";

import Root from "./Components/Root/Root";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Notes, { notesLoading } from "./Components/Notes/Notes";
import Banner from "./Components/Landing/Banner";
import DisplayNote, { noteLoader, noteDeleteAction } from "./Components/Notes/DisplayNote";
import MyForm, { formCreateNote } from './Components/Notes/MyForm';

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root />,
			children: [
				{
					path: "",
					element: <Banner />,
				},
				{
					path: "notes",
					element: <Notes />,
					loader: notesLoading,
					children: [
						{
							path: 'newNote',
							element: <MyForm />,
							action: formCreateNote,
						},
						{
							path: ":idNote",
							element: <DisplayNote />,
							loader: noteLoader,
							action: noteDeleteAction,
						},
						{
							path: ':idNote/edit',
							element: <MyForm />,
							action: formCreateNote,
						}
					],
				},
			],
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
