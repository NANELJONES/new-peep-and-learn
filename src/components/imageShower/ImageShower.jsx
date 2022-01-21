import React from 'react'
import "./imageShower.css"






function ImageShower(props) {
    return (
        <div className="image_holder">
            <div className="image_box">
                 <img src={props.pd__img_1}/>
                  <img src={props.pd__img_2}/>
                 <img src={props.pd__img_3}/>
            </div>
        </div>
    
        
    )
}




function ImageShower1(props) {
    return (
        <div className="image_holder1">
            <div className="image_box1">
                 <img src={props.pd__img_1}/>
                  <img src={props.pd__img_2}  />
               
            </div>
        </div>
    
        
    )
}


export {ImageShower,ImageShower1};
