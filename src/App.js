import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Components/Root/Root";
import Banner from "./Components/Landing/Banner"
import Notes from "./Components/Notes/Notes";

function App() {
	
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Root />,
			children: [
				{
					path: '',
					element: <Banner />,
				},
				{
					path: "notes",
					element: <Notes />,
				}
			]
		},
	])
	
	
	return (
		<RouterProvider router={router} />
		);
	}
	
	export default App;
	