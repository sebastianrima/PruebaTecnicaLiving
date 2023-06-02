//general imports
import React, {useEffect,useState} from "react";
//Style
import Style from "./MentoresDetailsStyle.css"
import {AiOutlineLeft} from "react-icons/ai"
//other pages and components
import MentorDescription from "../../components/MentorDescription/MentorDescription";
import MentoresPreview from "../MentoresPreview/MentoresPreview";
//routing
import { useNavigate } from "react-router-dom";

const MentoresDetails = () => {
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
    <div className="MentoresDetails">
        <AiOutlineLeft className="BackArrow" onClick={()=>{Navigate("/MentoresPreview")}}></AiOutlineLeft>
        <h1 className="Tittle">Mentores</h1>
        <MentorDescription name={data?.Christian?.name} desc={data?.Christian?.desc} url={data?.Christian?.img} job={data?.Christian?.job} link={data?.Christian?.url} pos={false} back="#F2F2F2"></MentorDescription>
        <MentorDescription name={data?.Maria?.name} desc={data?.Maria?.desc} url={data?.Maria?.img} job={data?.Maria?.job} pos={true} back="#E1E1E1"></MentorDescription>
        <MentorDescription name={data?.Juan?.name} desc={data?.Juan?.desc} url={data?.Juan?.img} job={data?.Juan?.job} pos={false} back="#F2F2F2"></MentorDescription>
        <MentorDescription name={data?.Santiago?.name} desc={data?.Santiago?.desc} url={data?.Santiago?.img} job={data?.Santiago?.job} pos={true} back="#E1E1E1"></MentorDescription>
        <div id="footer"/>
    </div>
  );
}

export default MentoresDetails;