import { createBrowserRouter } from "react-router";
import App from "./App";
import Contact from "./Component/Contact/Contact";
import HomePage from "./Component/HomePage/HomePage";
import CV from "./Component/CV/CV";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,

		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/home",
				element: <HomePage />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},

			{
				path: "/cv",
				element: <CV />,
			},
		],
	},
]);

export default router;
