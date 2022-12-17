import { Button } from "@mui/material";
import React from "react";

function Pagination({ page, totalPage, limit }) {
    let array=[]
  const createButton = () => {
    for (let i = 1; i <=totalPage; i++) {
      array.push(i)
    }
  };
createButton()
//   console.log(array)
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
         
      <div>Pages: {array.map((item)=>(
        <button>{item}</button>
      ))}</div>

      <div>
        <button>Prev</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Pagination;
