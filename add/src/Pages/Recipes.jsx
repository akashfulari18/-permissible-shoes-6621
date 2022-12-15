import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import RecipeComp from "./RecipesComponents/RecipeComp";
import Style from "./styles/Recipes.module.css";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const categoryArray = [
  "All Category",
  "Deserts",
  "Breads",
  "BreakFast",
  "Snacks",
  "Salads",
  "MainDishes",
];
function Recipes() {
  const [rescipes, setRecipes] = useState([]);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("All Category");
  const [filterData, setFilterData] = useState({
    name: "",
    filterCategory: "",
  });

  const handleStateChange = (key, value) => {
    setFilterData((pre) => {
      pre[`${key}`] = value;
      return { ...pre };
    });
  };

  const fetchRecipes = (name, selectedCategory) => {
    const resultCategory =
      category === "All Category" ? "" : `name=${category}`;

    axios
      .get(`http://localhost:3004/Recipes?${resultCategory}`)
      .then((res) => {
        let resData = [];
        res?.data?.map((item) => {
          return item?.data?.map((cat) => {
            return resData.push(cat);
          });
        });
        const result = res?.data?.map((item) => {
          return item?.name;
        });
        setData(resData);
        setRecipes(["All Category", ...result]);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = () => {
    const result = data.filter(({ name }) =>
      name.toLowerCase().includes(filterData.name.toLowerCase())
    );
    if (filterData.name !== "") {
      setData(result);
    } else {
      fetchRecipes();
    }
  };
  // fetchRecipes()
  useEffect(() => {
    fetchRecipes();
  }, [category]);

  const handleCat = (name) => {
    setCategory(name);
  };

  return (
    <div>
      Recipes
      {/* serch functionality */}
      <div>
        <div className={Style.searchContainer}>
          <TextField
            id="outlined-basic"
            placeholder="Search Recipe or User Name"
            variant="outlined"
            size="small"
            sx={{ width: "350px" }}
            onChange={(e) => handleStateChange("name", e.target.value)}
            inputProps={{ color: "red" }}
          />

          <FormControl size="small" sx={{ width: "200px" }}>
            <InputLabel id="demo-simple-select-label">All Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="All Category"
              onChange={(e) =>
                handleStateChange("filterCategory", e.target.value)
              }
            >
              {categoryArray?.map((item, index) => {
                return (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Button
            style={{ backgroundColor: "#f53838", color: "#FFFFFF" }}
            onClick={handleSubmit}
          >
            Search Recipes
          </Button>
          <Button style={{ backgroundColor: "#f53838", color: "#FFFFFF" }}>
            Share My Recipes
          </Button>
        </div>
      </div>
      <div className={Style.CardParent}>
        {categoryArray &&
          categoryArray?.map((item) => {
            return (
              <div>
                <button onClick={() => handleCat(item)}>{item}</button>
              </div>
            );
          })}
      </div>
      <div className={Style.cards}>
        {data?.map((item) => {
          return <RecipeComp item={item} />;
        })}
      </div>
    </div>
  );
}

export default Recipes;
