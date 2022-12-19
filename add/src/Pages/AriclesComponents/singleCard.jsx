import { Button } from '@mui/material';
import { border } from '@mui/system';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'


function SingleCard() {
    const [singleArticles,setSingleArticles] = useState([])

    const navigate = useNavigate()
    const {id} =useParams();
    console.log(id)

    const fetchSingleArticles=()=>{
        axios.get(`https://kindmeal-api.onrender.com/Articles/${id}`)
        .then((res)=>setSingleArticles(res.data))
        .catch((err)=>console.log(err))
    }
    console.log(singleArticles)

    useEffect(()=>{
        fetchSingleArticles()
    },[])

    const handleClick=()=>{
        navigate("/articles")
    }

  return (
    <div>
         <div style={{padding:"1rem",textAlign:"left",backgroundColor:"#a7a3a345"}}>
         
         <div style={{width:"80%",margin:"auto"}}>
       <span style={{fontSize:"2rem",fontWeight:"600",color:"rgb(106 103 103)"}}>Yummy News,Articles & Videos</span>
       
       <p style={{fontSize:"0.8rem"}}>Want to keep updated on the latest news of delicious meat-free meals and adorable animals? Check out this section for interesting daily happenings and articles that will melt your tummy (and heart too).</p>
       <p style={{fontSize:"0.8rem"}}>You can also follow our <span style={{color:"#0d66eb"}}>Facebook Page </span> or <span style={{color:"#0d66eb"}}> Twitter </span>for more news and updates.</p>
       </div>
    </div>

    <div>
        <div style={{width:"80%" ,boxShadow:"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",margin:"auto" ,marginTop:"2rem",borderRadius:"1rem"}}>
           
           <div style={{display:"flex",flexDirection:"column",padding:"1.5rem"}}>
            <img src={singleArticles.backgroundImage} alt=""  width={"60%"} height={"auto"}/>
            <span style={{textAlign:"left",fontSize:"1.5rem",paddingTop:"1rem",fontWeight:"500",paddingLeft:"3rem",width:"70%"}}>{singleArticles.title}</span>
            <p style={{textAlign:"left",marginTop:"0",color:"gray",paddingLeft:"3rem"}}>{singleArticles.by} , {singleArticles.date}</p>
            <p  style={{textAlign:"left",width:"70%",paddingLeft:"3rem"}}>{singleArticles.discription}</p>

            <Button style={{backgroundColor:"#2bb673" ,width:"15rem",marginLeft:"3rem",color:"#FFF"}}>View Full Article</Button>
            <Button style={{width:"15rem",backgroundColor:"#f53838",color:"#fff",margin:"2rem",marginTop:"2rem",marginLeft:"3rem"}} onClick={handleClick}>{"<<"} Back to Articles</Button>
           </div>


        </div>

    </div>
    </div>
  )
}

export default SingleCard