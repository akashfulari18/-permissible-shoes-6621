import React from 'react'
import { Link } from 'react-router-dom'
import Style from "../styles/Home.module.css"

function CardCol({imgUrl,discription,name}) {
  return (
    
        <div id={Style.comp1} className={Style.comp}>
            <div>
              <img
                className={Style.imgCard}
                src={imgUrl}
                alt="image1"
              />
            </div>
            <div>
              <Link className={Style.link} to={""}>
                {discription}
              </Link>
            </div>

            {name ? <div>
              {name}
            </div>:""}
          </div>

    
  )
}

export default CardCol