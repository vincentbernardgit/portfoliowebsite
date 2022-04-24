import "./navbar.scss";
import { LinkedIn, Person, Mail } from "@material-ui/icons";

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"navbarmenu " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>087877142188</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>vincent.bernard.job@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <LinkedIn className="icon" />
                        <span>linkedin.com/in/vincentbernardlin</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
