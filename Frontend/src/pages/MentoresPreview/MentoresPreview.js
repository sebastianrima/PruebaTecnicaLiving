//general imports
import React, {useEffect,useState} from "react"
//Style
import Style from "./MentoresPreviewStyle.css"
//other pages
import MentorPreview from "../../components/MentorPreview/MentorPreview"
import MentoresDetails from "../MentoresDetails/MentoresDetails";
//routing
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const MentoresPreview = () => {
  //initializing navigate
  const Navigate = useNavigate()
  //creating the use state and fetching the data from the API
  const [data,setData] = useState([])
  const getData = () => {
    fetch("http://localhost:4000/api/v1/data").then(data=>data.json()).then(data=>setData(data.data))
    console.log(data)
  }
  //only calling the API when mounted
  useEffect(()=>{
    let isFirst = true
    if(isFirst){getData()}
    return ()=>{isFirst=false}
  },[])
  
  return (
      <div className="MentoresPreview">
        <div className="BackDecoration"></div>
        <h1 className="Title">Mentores</h1>
        <div className="MentorContainer">
          <MentorPreview name={data?.Christian?.name} desc={data?.Christian?.job} url={data?.Christian?.img}/>
          <MentorPreview name={data?.Maria?.name} desc={data?.Maria?.job} url={data?.Maria?.img}/>
          <MentorPreview name={data?.Juan?.name} desc={data?.Juan?.job} url={data?.Juan?.img}/>
          <MentorPreview name={data?.Santiago?.name} desc={data?.Santiago?.job} url={data?.Santiago?.img}/>
        </div>
        <div className="MentorContainer">
          <p>Los mentores son expertos comprometidos en guiar y apoyar a los participantes en los retos. Brindan retroalimentación constructiva y comparten su experiencia para fomentar el éxito y el crecimiento personal y profesional.</p>
        </div>
        <button className="VerMentoresButton" onClick={()=>{Navigate("/MentoresDetails")}}>Ver Mentores</button>
      </div>
  );
}

export default MentoresPreview;