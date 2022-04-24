import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
    allPortfolio,
    appPortfolio,
    gamePortfolio,
    designPortfolio,
} from "../../data";
import Swal from 'sweetalert2';

export default function Portfolio() {
    const [selected, setSelected] = useState("all");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "all",
            title: "All",
        },
        {
            id: "app",
            title: "Application",
        },
        {
            id: "game",
            title: "Game",
        },
        {
            id: "design",
            title: "Design",
        },
    ];

    const notif = (e) => {
        e.preventDefault();

        Swal.fire({
            text: 'This project has not been published yet :(',
            confirmButtonColor: '#1a75ff'
        })
    }

    useEffect(() => {
        switch (selected) {
            case "all":
                setData(allPortfolio);
                break;
            case "app":
                setData(appPortfolio);
                break;
            case "game":
                setData(gamePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            default:
                setData(allPortfolio);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>My Portfolio</h1>
            <div className="list-container">
                {list.map((item) => (
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
                ))}
            </div>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <a href={`#${d.id}`}>
                            <img src={d.img} alt="" />
                            <span>View Project</span>
                        </a>

                        <div class="overlay" id={d.id}>
                            <div className="close-div">
                                <a href="#" class="close">x</a>
                            </div>
                            
                            <div className="overlay-container">
                                <div className="overlay-left">
                                    <img src={d.img} />
                                    </div>

                                <div className="overlay-right">
                                    <h3>{d.title}</h3>
                                    <table class="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Type</th>
                                                <td>{d.type}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Project type</th>
                                                <td>{d.project_type}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Technologies</th>
                                                <td>{d.tech}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Description</th>
                                                <td className="desc">{d.desc}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    {d.link!="" ? 
                                        (<a className="link" href={d.link} target="_blank" >
                                            Go to project
                                        </a>) :
                                        (<a className="link" onClick={notif} >
                                            Go to project
                                        </a>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
