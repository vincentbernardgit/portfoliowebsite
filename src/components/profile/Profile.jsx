import { School, Laptop, Work, Code } from "@material-ui/icons";
import "./profile.scss";
import { useState, useEffect, useRef } from 'react'
import { init } from 'ityped'
import {
    eduData,
    orgData,
    workData,
    skillData
} from '../../profileData'
import ProfileList from "../profileList/ProfileList";

export default function Profile() {
    const [selected, setSelected] = useState("edu");
    const [data, setData] = useState([]);
    const list=[
        {
            id: "edu",
            title: "Education"
        },
        {
            id: "org",
            title: "Organization Experience"
        },
        {
            id: "work",
            title: "Work Experience"
        },
        {
            id: "skill",
            title: "Tools & Skills"
        }
    ];

    //const textRef = useRef();

    // useEffect(() => {
    //     init(textRef.current, {
    //         showCursor: true,
    //         backDelay: 1500,
    //         backSpeed:60,
    //         strings: ["My Profile"],
    //     });
    // }, []);

    useEffect(()=>{
        switch(selected){
            case "edu":
                setData(eduData);
                break;
            case "org":
                setData(orgData);
                break;
            case "work":
                setData(workData);
                break;
            case "skill":
                setData(skillData);
                break;
            default:
                setData(eduData);
        }
    }, [selected]);

    return (
        <div className="profile" id="profile">
            <h1>My Profile</h1>
            <div className="container">
                <div className="left">
                    <div className="left1">
                        <div className="left-icons">
                            <School className="icon" fontSize="large" />
                            <Laptop className="icon" fontSize="large" />
                            <Work className="icon" fontSize="large" />
                            <Code className="icon" fontSize="large" />
                        </div>

                        <div className="left-container">
                            {list.map((item)=>(
                                <ProfileList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="right">
                    {data.map((d) => (
                        <div className="item">
                            {d.startYear!=null & d.endYear!=null ?
                                (<p className="year">{d.startYear} - {d.endYear}</p>) :
                                (<p className="null"></p>)
                            }
                            {d.location!=null ?
                                (<p className="location">{d.location}</p>) :
                                (<p className="null"></p>)
                            }
                            {d.position!=null ?
                                (<p className="position">{d.position}</p>) :
                                (<p className="major">{d.major}</p>)
                            }
                            {d.gpa!=null ?
                                (<p className="gpa">Current GPA: {d.gpa}</p>) :
                                (<p className="null"></p>)
                            }
                            {d.tech!=null ?
                                (<p className="skill-detail">Programming Languages/Frameworks/Tools: <span>{d.tech}</span></p>) :
                                (<p className="null"></p>)
                            }
                            {d.desc1!=null ?
                                (<p>- {d.desc1}</p>) :
                                (<p className="null"></p>)
                            }
                            {d.desc2!=null ?
                                (<p>- {d.desc2}</p>) :
                                (<p className="null"></p>)
                            }
                            {d.desc3!=null ?
                                (<p>- {d.desc3}</p>) :
                                (<p className="null"></p>)
                            }
                            {d.desc4!=null ?
                                (<p>- {d.desc4}</p>) :
                                (<p className="null"></p>)
                            }
                            {d.text!=null ?
                                (<p className="desc">{d.text}</p>) :
                                (<p className="null"></p>)
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
