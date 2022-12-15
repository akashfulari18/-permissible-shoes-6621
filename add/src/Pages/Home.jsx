import React from "react";
import { useState } from "react";
import Style from "./styles/Home.module.css";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CardCol from "./HomeComponents/CardCol";
function Home() {
  const [latestNews, setLatesetNews] = useState([]);
  const [yummy, setYummy] = useState([]);
  const [discover, setDiscover] = useState([]);
  const [AmazingSup, setAmazingSup] = useState([]);

  const [carData,setCarData] = useState([])
  const fetchLatestNews = () => {
    axios
      .get(`http://localhost:3004/Home_page`)
      .then((res) => {
        setLatesetNews(res.data[0].latestNewsAndVideo);

        setCarData(res.data[0].slidingImg);
        setYummy(res.data[0].Yummylicious_Moments);

        setDiscover(res.data[0].Discover_Restaurants);
        setAmazingSup(res.data[0].Amazing_Superheroes);
      })
      .catch((err) => console.log(err));
  };

  console.log(carData)
  useEffect(() => {
    fetchLatestNews();
  }, []);
  // fetchLatestNews()
  return (
    <div>
      Home

      {/* carousel start here */}
      <div>Carousel



      </div>

{/* carousel end here */}

      <div className={Style.allCont}>
        <div>
          <div className={Style.cardCol}>
            <div id={Style.headingTop}>
              <div>
                <strong className={Style.strong}>Latest News & Videos</strong>
              </div>
              <div>
                <Link className={Style.lk}>Save Lives With Yuor Blog .</Link>
                <Link className={Style.lk}> News & Articles.</Link>
                <Link className={Style.lk}> Follow Our Facebook</Link>
              </div>
            </div>

            <div id={Style.mainComp}>
              {latestNews &&
                latestNews?.map((item) => (
                  <CardCol
                    imgUrl={item.imgUrl}
                    discription={item.discription}
                  />
                ))}
            </div>
          </div>
        </div>

        <div id={Style.comp1}>
          <div className={Style.cardCol}>
            <div id={Style.headingTop}>
              <div>
                <strong className={Style.strong}>Yummylicious Moments</strong>
              </div>
              <div>
                <Link className={Style.lk}>Secret Recipesb .</Link>
                <Link className={Style.lk}> Member Hot Picks .</Link>
                <Link className={Style.lk}> Photo Moments</Link>
              </div>
            </div>

            <div id={Style.mainComp}>
              {yummy &&
                yummy?.map((item) => (
                  <CardCol
                    imgUrl={item.imgUrl}
                    discription={item.discription}
                    name={item.name}
                  />
                ))}
            </div>
          </div>
        </div>

        <div id={Style.comp1}>
          <div className={Style.cardCol}>
            <div id={Style.headingTop}>
              <div>
                <strong className={Style.strong}>Discover Restaurants</strong>
              </div>
              <div>
                <Link className={Style.lk}>Vegetarian Directory .</Link>
                <Link className={Style.lk}> Restaurant Menu .</Link>
                <Link className={Style.lk}> Food Map </Link>
              </div>
            </div>

            <div id={Style.mainComp}>
              {discover &&
                discover?.map((item) => (
                  <CardCol
                    imgUrl={item.imgUrl}
                    discription={item.discription}
                    name={item.name}
                  />
                ))}
            </div>
          </div>
        </div>

        <div id={Style.comp1}>
          <div className={Style.cardCol}>
            <div id={Style.headingTop}>
              <div>
                <strong className={Style.strong}>Amazing Superheroes</strong>
              </div>
              <div>
                <Link className={Style.lk}>Latest Buzz .</Link>
                <Link className={Style.lk}> Lifestyle Ambassadors .</Link>
                <Link className={Style.lk} style={{ color: "gold" }}>
                  {" "}
                  Win Gifts!
                </Link>
              </div>
            </div>

            <div id={Style.mainComp}>
              {AmazingSup &&
                AmazingSup?.map((item) => (
                  <CardCol
                    imgUrl={item.imgUrl}
                    discription={item.discription}
                    name={item.name}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div id={Style.petfinder}>
        <div className={Style.petFinderLogo}>
          <div className={Style.headPetLogo}>
            Introducing Malaysia's Pioneering Meat-Free Lifestyle Platform
          </div>
          <div className={Style.petLogo}>
            <div>Brought to you by</div>{" "}
            <div>
              <img
                src="https://www.kindmeal.my/images/logo-petfinder-v2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={Style.headPetLogo}>
          Instant coupon & dining. No upfront coupon payment, booking or
          printing.
        </div>
        <div style={{width:"100%"}}>
          <div className={Style.fourCards}>
            <div className={Style.cardItem}>
              <div>
                <img
                  src="	https://www.kindmeal.my/images/intro_deal.png"
                  alt=""
                />
              </div>
              <div>
                <h2>Get Great Deals</h2>
              </div>
              <div>
                <p>
                  Show our FREE digital coupons to instantly enjoy exciting
                  deals
                </p>
              </div>
            </div>
            <div className={Style.cardItem}>
              <div>
                <img
                  src="	https://www.kindmeal.my/images/intro_kindmoment.png"
                  alt=""
                />
              </div>
              <div>
                <h2>Share HappyMoments</h2>
              </div>
              <div>
                <p>Spread the joy by sharing your yummy dining moments</p>
              </div>
            </div>
            <div className={Style.cardItem}>
              <div>
                <img
                  src="https://www.kindmeal.my/images/intro_menu.png"
                  alt=""
                />
              </div>
              <div>
                <h2>Discover Delicious Food</h2>
              </div>
              <div>
                <p>Explore the latest exquisite offerings and creative menus</p>
              </div>
            </div>
            <div className={Style.cardItem}>
              <div>
                <img
                  src="https://www.kindmeal.my/images/intro_friends.png"
                  alt=""
                />
              </div>
              <div>
                <h2>Meet Food Lovers</h2>
              </div>
              <div>
                <p>Make new, compassionate friends and share great food tips</p>
              </div>
            </div>
          </div>
        </div>

        <div className={Style.t}>
          <p className={Style.t}>
            Any restaurant or cafe can join KindMeal, vegetarian or not, as long
            as the deals and menu featured are meat-free. Enjoy a great
            meat-free dining experience. Easily save animal lives, health,
            environment and money now!
          </p>
        </div>
        <div>
          <button className={Style.joinBtn}>Join HappyMeal Now
          <br/>
          <span>Your Tastey journey begins here</span></button>
        </div>
        <div className={Style.featuredOn}>

          <p>Featured ON</p>
          <img src="https://www.kindmeal.my/images/media-feature2.png" alt="" />

        </div>
      </div>

      <div className={Style.lsImg}>
        <img src="	https://www.kindmeal.my/images/banner_whykindmeal.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
