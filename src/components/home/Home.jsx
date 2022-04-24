import "./home.scss";
import Picker from 'emoji-picker-react';
import Swal from 'sweetalert2';
import { Person, Mail, LinkedIn } from '@material-ui/icons';

export default function Home() {
    const getCv = (e) => {
        e.preventDefault();
        
        Swal.fire({
            text: 'Which type of my CV do you prefer?',
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonColor: '#1a75ff',
            cancelButtonColor: '#0052cc',
            confirmButtonText: '<a href="assets/cv.pdf" download="CV Updated April 2022_Vincent Bernard" style="text-decoration: none; color: white;">Best CV :)</a>',
            cancelButtonText: '<a href="assets/ATS-CV Updated April 2022_Vincent Bernard.docx" style="text-decoration: none; color: white;">ATS-friendly CV</a>'
        })
    };

    return (
        <div className="home" id="home">
            <div className="left">
                <p className="pfirst">&lt;h1&gt;</p>
                <h1>Hello! I'm</h1>
                <h1><span className="name">V</span>incent <span className="name">B</span>ernard,</h1>
                <h1>web developer<span className="code">&lt;/h1&gt;</span></h1>
                <p>&lt;p&gt;</p>
                <h6>Front End Developer</h6>
                <p>&lt;/p&gt;</p>
                <div className="btn-group">
                    <a href="#contact">
                        <button type="button">Contact Me!</button>
                    </a>
                    <a onClick={getCv}>
                        <button className="get-cv" type="button">Get My CV</button>
                    </a>
                </div>
            </div>
            <div className="right"></div>
        </div>
    );
}
