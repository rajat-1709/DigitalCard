import React from "react";
import './About.css'
import { MdEmail } from "react-icons/md";
import {SiLinkedin} from "react-icons/si";

export default function About()
{
    return(
        <div>
            <h3 className="name">Laura Smith</h3>
            <h5 className="title">Frontend Developer</h5>
            <p className="address">123 street 27</p>

            <button className="emailbutton">
                <MdEmail className="emailicon"></MdEmail><p className="emailbutton-text">
                    Email</p>
            </button>
            <button className="linkedinbutton">
               <SiLinkedin className="linkedinicon"></SiLinkedin> <p className="linkedinbutton-text">Linkedin</p>
            </button>
        </div>
    );
}