// import { Button } from "@mui/material";
import React from "react";

function Pagination({habndleNext,habndlePrev, page, totalPage, limit ,setPage}) {
    let array=[]
  const createButton = () => {
    for (let i = 1; i <=totalPage; i++) {
      array.push(i)
    }
  };


createButton()

const handlePage= (val)=>{
  setPage(val)
}


//   console.log(array)
  return (
    <div style={{display:"flex",justifyContent:"space-between" }}>
         
      <div>Pages: {array.map((item)=>(
        <button onClick={()=>handlePage(item)} style={{border:"none" ,padding:"10px",backgroundColor:"gray",margin:"0.5rem"}}>{item}</button>
      ))}</div>

      <div>
        <button  style={{border:"none" ,padding:"10px",backgroundColor:"gray",margin:"0.5rem"}}  onClick={habndlePrev}>Prev</button>
        <button  style={{border:"none" ,padding:"10px",backgroundColor:"gray",margin:"0.5rem"}} onClick={habndleNext}>Next</button>
      </div>
    </div>
  );
}

export default Pagination;
