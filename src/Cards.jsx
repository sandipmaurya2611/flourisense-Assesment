import React from "react"


    function Cards(props) {
        return(
          <>
          <div className="cards">
          <div className="card">
          <img src ={props.imgsrc} alt="my pic" className="card_img"/>
          <div className="card_info"></div>
          <span className="card_category"> {props.title} </span>
          <h3 className="card_title"> {props.Sname} </h3>
          <a href = {props.link} target="_blank" rel="noreferrer"> <button> Watch Now </button> </a>
        
      
          </div>
      
          </div>
         </>
        );
      }
      export default Cards
