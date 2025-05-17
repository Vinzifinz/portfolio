import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router";
import "./index.css";
import { Outlet } from "react-router";

const rootElement = document.getElementById("root");
if (!rootElement) {
	throw new Error("Impossible de trouver l'élément #root dans le DOM.");
}
createRoot(rootElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<Outlet />
	</React.StrictMode>,
);
