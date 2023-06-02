//General imports
import React from "react";
//Style
import Style from "./MentorPreviewStyle.css"

const MentorPreview = (props) => {
    return (
        <div className="MentorPreviewExternal">
            <div className="MentorPreviewInternal">
                <h1 className="MentorName">{props.name}</h1>
                <h2 className="MentorDesc">{props.desc}</h2>
                <img src={props.url} className="ImageMentor"></img>
            </div>
        </div>
    );
  }
  
  export default MentorPreview;