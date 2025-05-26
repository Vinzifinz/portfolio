import { createBrowserRouter } from "react-router";
import App from "./App";
import Contact from "./Component/Contact/Contact";
import HomePage from "./Component/HomePage/HomePage";
import CV from "./Component/CV/CV";

const router = createBrowserRouter([
	{
		element: <App />,

		children: [
			{
				path:"/",
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
