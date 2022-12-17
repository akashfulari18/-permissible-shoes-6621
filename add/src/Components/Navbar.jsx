// import { ReactNode } from 'react';
import logo from "../logo.png";
import "./Navbar.css";
import {
  Box,
  Button,
  Image,
  
} from "@chakra-ui/react";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function Navbar() {

  const {isAuth, handleLogOut} =useContext(AuthContext)
  console.log(isAuth)
  const navigate=useNavigate();
  return (
    <>
      <Box className="bod">
        {" "}
        <div id="header">
          <div className="headerTop">
            <div className="headerStart">
              <div>
                <Image id="logo" src={logo} />
              </div>
              <div>
                <h2>Happy<span className="tom">M</span>eal.com</h2>
              </div>
            </div>
            <div className="headerMid">
              <div className="imgLink">
                <img
                  src="https://www.kindmeal.my/images/follow_blog_grey.png"
                  alt=""
                />
              </div>
              <div className="imgLink">
                <img
                  src="	https://www.kindmeal.my/images/follow_facebook_grey.png"
                  alt=""
                />
              </div>
              <div className="imgLink">
                <img
                  src="https://www.kindmeal.my/images/follow_twitter_grey.png"
                  alt=""
                />
              </div>
            </div>
            <div className="headerEnd">
              {!isAuth ? <div className="sp" onClick={()=>(navigate("/login"))}>
                <p>Login</p>
              </div>
              :
              <div onClick={handleLogOut}>
                <p>Logout</p>
              </div>}
              <div className="sp">
                <Button colorScheme={"blue"} className="Fb">
                  Facebook
                </Button>
              </div>
              <div className="sp">
                <Button className="Em">Email</Button>
              </div>
              <div className="sp headerEndSp">
                {" "}
                {/* <span>|</span> */}
                 <p>Sign Up</p>
              </div>
            </div>
          </div>

          {/* header Navigation */}
          <div className="headerNav">
            <div className="innerNav">
              <div id="home">
                <RouterLink to={"/"} className="routeLink">Home</RouterLink>
              </div>
              <div id="mealDeals">
                <RouterLink to={"/myDeals"}  className="routeLink">Meal Deals</RouterLink>
              </div>
              <div id="kindMoments">
                <RouterLink to={"/kindMoments"} className="routeLink">Kind Moments</RouterLink>
              </div>
              <div id="recipes">
                <RouterLink to={"/recipes"} className="routeLink">Recipes</RouterLink>
              </div>
              <div id="directory">
                <RouterLink to={"/directory"} className="routeLink">Directory</RouterLink>
              </div>
              <div id="articles" >
                <RouterLink to={"/Articles"} className="routeLink">Articles</RouterLink>
              </div>
              <div id="mobileApp">
                <RouterLink to={"/MobileApp"} className="routeLink">MobileApp</RouterLink>
              </div>
              <div id="help">
                <RouterLink to={"/help"} className="routeLink">Help</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}
