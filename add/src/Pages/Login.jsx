import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import style from "./styles/login.module.css"
import CloseIcon from '@mui/icons-material/Close';

function Login() {
  const {handleToken ,...contextData} =useContext(AuthContext)
  const [sub,setSub]=useState(false)

  console.log(contextData?.token)
  const [details,setDeails ]= useState({
    email:"",
    password:""

  })

  const handleChange=(e)=>{
     const type=e.target.type
     const value=e.target.value
     setDeails({...details,[type]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    fetchData()
    // console.log("derr")
  }

  const fetchData= ()=>{
     fetch(`https://reqres.in/api/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(details)
     })
     .then((res)=>res.json())
     .then((res)=>{handleToken(res.token)
    
    setSub(true)})
     .catch((err)=>console.log(err))


    //  eve.holt@reqres.in
    //  cityslicka
  }


  return (
    <div>
        <div className={style.overlay}></div>
    <div className={style.loginModal}>
    <div className={style.loginPage}>
    {/* <span className={style.fullyIcon}><CloseIcon/></span> */}
    <p className={style.formHeader}>Member login</p>
      <form className={style.inputFieldBox} data-testid="login-form" onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <label>
            <input data-testid="email-input" type="email" className={style.inputFormFields} placeholder="email" onChange={(e)=>handleChange(e)} 
            value={details.email}/>
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              className={style.inputFormFields}
              onChange={(e)=>handleChange(e)}
              value={details.password}
            />
          </label>
        </div>
        <div>
          <button className={style.inputFieldBox} data-testid="form-submit" type="submit" disabled={sub} >
            Login
          </button>
        </div>
      </form>
      <div>
        {contextData?.isAuth ===true ? <Navigate to={"/"}/>:"" } 
      </div>
    </div>
    </div>
    </div>
  );
}
export default Login;
