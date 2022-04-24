import Navbar from "./components/navbar/Navbar"
import Menu from "./components/menu/Menu"
import Home from "./components/home/Home"
import Profile from "./components/profile/Profile"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";

function App() {
	const [menuOpen,setMenuOpen] = useState(false)

	return (
		<div className="app">
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="sections">
				<Home />
				<Profile />
				<Portfolio />
				<Contact />
			</div>
		</div>
	);
}

export default App;
