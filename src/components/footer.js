// import React from "react";
// import "./footer.css"
// import { FaTwitter } from "react-icons/fa";

// export default function Foot()
// {
//     return(
//         <div className="bg-borders">
//         <FaTwitter className="tweeter"></FaTwitter>
//         </div>
//     );
// }
import React from "react";
import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Foot(){
    return(
        <div className="bg-borders">
            <FontAwesomeIcon className="tweeter" size="2x" icon={faTwitter} />
            <FontAwesomeIcon className="facebook" size="2x" icon={faFacebook} />
            <FontAwesomeIcon className="discord" size="2x"  icon={faDiscord} />
            <FontAwesomeIcon className="github" size="2x" icon={faGithub} />
           
        </div>
    )
}