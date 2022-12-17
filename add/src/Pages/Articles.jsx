// import { Pagination } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ArticlesCard from './AriclesComponents/ArticlesCard'
import Pagination from './AriclesComponents/Pagination'

function Articles() {
  const [articles,setArticles]=useState([])
  const [totalPage,setTotalPage] = useState(0) 
  const [page,setPage] =useState(1)

  const limit=5

  const fetchArticles = ()=>{
    axios.get(`http://localhost:3004/Articles?_limit=5&_page=${page}`)
    .then((res)=>{
       console.log(res.data)
       setArticles(res.data)
       setTotalPage(res.data.length)
    })
    .catch((err)=>{
      console.log(err)
    })

  }

  useEffect(()=>{
    fetchArticles()
  },[page])

  console.log(page)
  return (
    <div>
       <div style={{border:"1px solid red" ,padding:"1rem",textAlign:"left",backgroundColor:"#a7a3a345"}}>
         
            <div style={{width:"80%",margin:"auto"}}>
          <span style={{fontSize:"2rem",fontWeight:"600",color:"rgb(106 103 103)"}}>Yummy News,Articles & Videos</span>
          
          <p style={{fontSize:"0.8rem"}}>Want to keep updated on the latest news of delicious meat-free meals and adorable animals? Check out this section for interesting daily happenings and articles that will melt your tummy (and heart too).</p>
          <p style={{fontSize:"0.8rem"}}>You can also follow our <span style={{color:"#0d66eb"}}>Facebook Page </span> or <span style={{color:"#0d66eb"}}> Twitter </span>for more news and updates.</p>
          </div>
       </div>

       <div  style={{border:"1px solid blue" ,textAlign:"left",backgroundColor:"#a7a3a345"}}>

        <div style={{border:"1px solid red" ,width:"80%",margin:"auto"}}>

         <Pagination page={page} totalPage={totalPage} limit={limit} setPage={setPage} />

        </div>
        <div>
          <ArticlesCard articles={articles}/>
        </div>

       </div>


    </div>
  )
}

export default Articles