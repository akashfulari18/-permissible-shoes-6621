import React from "react";

function ArticlesCard({ articles }) {
  console.log(articles);
  return (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        margin: "auto",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {articles &&
        articles.map((item) => (
          <div
            style={{ border: "1px solid red", width: "80%", margin: "auto" ,display:"flex"}}
          >
            <div>
              <img
                src={item.backgroundImage}
                alt=""
                width={"500px"}
                height={"300px"}
                style={{
                  borderTopLeftRadius: "1rem",
                  borderBottomLeftRadius: "1rem",
                }}
              />
            </div>
            <div style={{border:"1px solid black",width:"200px"}}>

              

            </div>
          </div>
        ))}
    </div>
  );
}

export default ArticlesCard;
