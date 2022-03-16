import React from "react";
import './About.css'
import { MdEmail } from "react-icons/md";

export default function About()
{
    return(
        <div>
            <h3 className="name">Laura Smith</h3>
            <h5 className="title">Frontend Developer</h5>
            <p className="address">123 street 27</p>

            <button className="emailbutton">
                <p className="emailbutton-text">
                    <div className="emailicon"><MdEmail ></MdEmail></div>Email</p>
            </button>
            <button className="linkedinbutton">
                <p className="linkedinbutton-text">Linkedin</p>
            </button>
        </div>
    );
}