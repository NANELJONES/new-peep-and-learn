import React from "react";
import "./grid1.css"


function Grid1(props){


    return(
        <div className="grid_container1">
            <div className="item1">     <img src={props.image1}/>    </div>
            <div className="item2">     <img src={props.image2}/>      </div>
            <div className="item3">     <img src={props.image3}/>      </div>
            <div className="item4">     <img src={props.image4}/>      </div>
            <div className="item5">     <img src={props.image5}/>      </div>
        
     </div>

    );
}

export default Grid1;