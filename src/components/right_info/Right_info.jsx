import React from "react";
import "./right_info.css"
import male_icon from "../../assets/male_icon.svg"
import female_icon from "../../assets/female_icon.svg"
 function Right_info(props){
     return (
    <div className="stats_holder">
        <div className="stats_info">       
               <div className="a_left">
                   <span id="peep_span">{props.info_1}</span>
                   <h4>{props.info_2}</h4>
               </div>

               <div id="short_line"></div>

               <div className="a_left">
                   <span id="peep_span">{props.info_3}</span>
                   <h4>{props.info_4}</h4>
               </div>
        </div>               
   </div>

            );
 }




function Right_info_2(props){

    return(
    <div className="stats_holder">
        <span id="peep_span" style={{marginTop:"7px"}}>{props.title}</span>
        
            <div className="stats_info">      
                <div className="b_left">
                      <img src={male_icon}/>
                       <h4>30%</h4>
                </div>

                <div id="short_line"></div>

                <div className="b_left">
                     <img src={female_icon}/>
                      <h4>70%</h4>
                </div>
        </div>               
</div>
    );

}





function Right_info_3(props){

    return(
    <div className="stats_holder">
        <span id="peep_span" style={{marginTop:"7px"}}>{props.title3}</span>
        
            <div className="stats_info">      
                <div className="b_left">
                       <h4>{props.revenue}</h4>
                </div>
            </div>               
    </div>
    );

}




export {Right_info,Right_info_2,Right_info_3};
