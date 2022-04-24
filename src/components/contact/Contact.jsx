import "./contact.scss";
import { useRef, useEffect } from "react";
import { init } from 'ityped';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Person, Mail, LinkedIn, LocationOn } from '@material-ui/icons'

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_vkn48ui', form.current, 'user_l8xjDPZ1hxuI5aMfyYUPu').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        Swal.fire({
            text: 'I will reply ASAP :)',
            confirmButtonColor: '#1a75ff'
        })
        document.getElementById("form").reset();
    };

    return (
        <div className="contact" id="contact">
            <div className="left">
                <h1>Contact Me</h1>
                <div className="icon-group">
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
                    <div className="itemContainer">
                        <LocationOn className="icon" />
                        <span>West Jakarta, DKI Jakarta</span>
                    </div>
                </div>
                <p>I’m interested in collaboration or recruiting opportunities. However, if you have other request or question, don’t hesitate to use the form.</p>

                <form id="form" ref={form} onSubmit={sendEmail}>
                    <div class="form-row">
                        <div class="col-md-6">
                            <input type="text" class="form-control" name="name" placeholder="Name" required />
                        </div>
                        <div class="col-md-6">
                            <input type="email" class="form-control" name="email" placeholder="Email" required />
                        </div>
                    </div>
                    <div class="form-row">
                        <div className="col-lg-12">
                            <input type="text" class="form-control subjectinput" name="subject" placeholder="Subject" required />
                        </div>
                    </div>
                    <div class="form-row">
                        <textarea type="text" class="form-control" name="message" placeholder="Message" />
                    </div>
                    <button type="submit">Submit form!</button>
                </form>
            </div>
            <div className="right">
                <img src="assets/map.png" alt="" />
            </div>
        </div>
    );
}
