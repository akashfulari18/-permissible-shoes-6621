import React from "react";
import styleRecipes from "../styles/Recipes.module.css";
import { TimeIcon } from "@chakra-ui/icons";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function RecipeComp({ item }, props) {
  const {
    backgroundImg,
    cafeAbout,
    cafeName,
    img,
    name,
    like,
    commmnets,
    time,
    profilePic,
  } = item;
  // console.log(name)
  return (
    <div>
      
      <div className={styleRecipes.singleCard}>
        {/* <div>
            {name}
        </div> */}

        <div className={styleRecipes.cardTop}>
          <img src={profilePic} alt="" />
          {name}
          <button className={styleRecipes.vBtn}>View</button>
        </div>
        <div className={styleRecipes.midImgContainer}>
          <img src={img} alt="" className={styleRecipes.midImg} />
        </div>
        <div className={styleRecipes.IconsBot}>
          {/* <SvgIcon {...props}>
                        <AccessTimeIcon />
           </SvgIcon> */}
          <div>
            <TimeIcon boxSize={"1.5rem"} />{"  "}
            {time}
          </div>

          <div className={styleRecipes.iconDisp}>
            <FavoriteBorderIcon sx={{ fontSize: "2rem" }} />{"  "}
            {like}
          </div>

          <div className={styleRecipes.iconDisp}>
            <MapsUgcIcon />{"  "}
            {commmnets}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeComp;
