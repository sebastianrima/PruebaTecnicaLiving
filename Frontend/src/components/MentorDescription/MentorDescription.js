//general imports
import React from "react";
//Style
import Style from "./MentorDescriptionStyle.css"


const MentorDescription = (props) => {
    //Dinamic Styles depending on props
    //pos=true when the image is on the right
    //back is the color of the background
    const greyBackground = {
        backgroundColor: props.back || '#E1E1E1',
        width: "100%",
        height: "437px",
        display: "flex",
        alignItems: "center",
        justifyContent: props.pos? "left": "max-content",
        flexDirection: props.pos ? "row-reverse" : "row"
    };
    const InfoContainer = {
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: props.pos? "right":"center",
        justifyItems: props.pos? "right":"center",
        alignItems: props.pos? "end":"start"
    }
    const ImageContainer = {
        width: "50%",
        display: "flex",
        justifyContent: props.pos? "left":"right",
        alignItems: props.pos? "start":"end",

    }
    return (
        <div id="MentorDescription" style={greyBackground}>
            <div id="ImageContainer" style={ImageContainer}>
                <img src={props.url} id="ImageMentorDes"></img>
            </div>
            <div id="InfoContainer" style={InfoContainer}>
                <h1 id="MentorName">{props.name}</h1>
                <h2 id="MentorJob">{props.job}</h2>
                <p id="MentorDesc">{props.desc}</p>
                <p id="MentorLink">{props.link}</p>
            </div>
        </div>
    );
  }

  export default MentorDescription;