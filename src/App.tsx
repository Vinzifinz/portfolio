import { Outlet } from "react-router";
import Header from "./Component/Header/Header";
import "./Global.css";
import Footer from "./Component/Footer/Footer";

export default function App() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
