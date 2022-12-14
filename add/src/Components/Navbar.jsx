// import { ReactNode } from 'react';
import logo from "../logo.png";
import "./Navbar.css";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Box>
        {" "}
        <div id="header">
          <div className="headerTop">
            <div className="headerStart">
              <div>
                <Image id="logo" src={logo} />
              </div>
              <div>
                <h2>HappyMeal.com</h2>
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
              <div className="sp">
                <p>Login</p>
              </div>
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
                <span>|</span> <p>Sign Up</p>
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
