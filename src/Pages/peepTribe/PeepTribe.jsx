import React from "react";
import "./peepTribe.css";
import Teams from "../../Pages/teams/Teams.jsx";
import {Footer} from "../../components/footer/Footer";


import { useState } from "react";
import Internship from "../internships/Internship";
import {Right_info, Right_info_2,Right_info_3} from "../../components/right_info/Right_info.jsx";
import Full_grid_info from "../../components/full_grid_info/Full_grid_info.jsx";
import {Header2,Header1} from "../../components/header/Header";




function PeepTribe(){
 
    const [showValue, setShowValue] = useState(1)
    function ShowUi(){
        switch (showValue) {
            case 1:
                return <Full_grid_info/>
                break;
            case 2:
                return <Teams/>
                break;
            case 3:
                return <Internship/>
            default:
                return <Full_grid_info/>
    
            
        }
    }
return(


    <div className="peep_container">
       
     
  
        <div className="peep_top">
        <Header2/>
        
                <ul class="sub_nav">
                   <button  style={showValue==1?{border:"1px solid white", borderRadius:"30px", backgroundColor:"transparent",color:"white"}: null}  onClick={()=> setShowValue(1)}>Profile</button>
                    <button  style={showValue==2?{border:"1px solid white", borderRadius:"30px"}: null}  onClick={()=> setShowValue(2) }>Teams</button>
                   <button   style={showValue==3?{border:"1px solid white", borderRadius:"30px"}: null} onClick={()=> setShowValue(3)}>Intern Space</button>
                </ul>


            
    
        </div>

        <div  className="peep_all">
            <div className="peep_left">
                
                
               {ShowUi()}
                

        
            </div>
        


             <div className="peep_right">
                      <Right_info info_1="Founded" info_2="2018"  info_3="Employees"  info_4="18"  />
                      <Right_info_2 title="Gender Breakdown"/>
                      <Right_info info_1="Average Age" info_2="23 yrs"  info_3="Turnover"  info_4="N/A"  />
                      <Right_info_3 title3="Revenue" revenue="N/A"/>
                      
            </div>
          
        </div>

       
           <Footer />
       
       
       
     </div>
     );
}
export default PeepTribe;

