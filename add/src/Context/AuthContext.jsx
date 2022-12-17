import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

function AuthContextProvider({children}) {
    const [contextData,setContextData] =useState({
        isAuth:false,
        token:null
    })
    // console.log(contextData)
//    const [isAuth,setIsAuth] = useState(false)
//    const [token,setToken] =useState(null)

   const handleToken=(tokenVal)=>{
    // console.log(tokenVal)
    // setToken(tokenVal)
    // setIsAuth(true)
    setContextData({
        ...contextData,token:tokenVal,isAuth:true
    })
   }
//    console.log(token)
const navigate = useNavigate();
   
   const handleLogOut=()=>{
       setContextData({
           ...contextData,token:null,isAuth:false
        })
        navigate("/login");
   }
//    console.log(token)
// const {token ,isAuth} =contextData
    return(

      <AuthContext.Provider  value={ {...contextData ,handleToken ,handleLogOut}}> 
        {children}
      </AuthContext.Provider>

    )
}

export default AuthContextProvider;
