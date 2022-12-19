import React from "react";
import { Link } from "react-router-dom";

function ArticlesCard({ articles }) {
  console.log(articles);
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        margin: "auto",
        marginTop:"1.5rem",
        flexDirection: "column",
        overflow: "hidden",
        marginBottom:"1rem",
        padding:"1rem"
      }}
    >
      {articles &&
        articles.map((item) => (
          <div
            style={{
              // border: "1px solid red",
              boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              width: "80%",
              margin: "auto",
              display: "flex",
              alignContent: "center",
               borderRadius:"1rem" ,
               marginTop:"1rem"
              // height:"380px"
            }}
          >
            <div>
              <img
                src={item.backgroundImage}
                alt=""
                width={"500px"}
                height={"380px"}
                style={{
                  borderTopLeftRadius: "1rem",
                  borderBottomLeftRadius: "1rem",
                }}
              />
            </div>
            <div
              style={{
                // border: "1px solid black",
                padding: "3rem",
                paddingTop: "3rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                textAlign: " justify",
                width: "100%",
              }}
            >
              <span style={{ fontSize: "1.7rem" }}>{item.title}</span>
              <p>{item.by}</p>
              <p style={{ fontSize: "0.9rem" }}>{item.discription}</p>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Link to={`/articles/${item.id}`}>
                <button>View Video</button>
                </Link >
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ArticlesCard;
