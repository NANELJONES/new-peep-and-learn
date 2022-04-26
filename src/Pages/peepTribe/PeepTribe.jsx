import React from "react";
import "./peepTribe.css";
import Teams from "../../Pages/teams/Teams.jsx";
import {Footer} from "../../components/footer/Footer";

import close from "../../components/downloadOptions/close-button.svg"
import data_view from "../../assets/data_viewer.svg"

import { useState } from "react";
import Internship from "../internships/Internship";
import {Right_info, Right_info_2,Right_info_3} from "../../components/right_info/Right_info.jsx";
import Full_grid_info from "../../components/full_grid_info/Full_grid_info.jsx";
import {Header2,Header1} from "../../components/header/Header";
import Modal from "../../components/Modal/Modal";
import Modal2 from "../../components/Modal/Modal2";
import { useEffect } from "react";






function PeepTribe(){
  const closeData = ()=>{

    setShowStat(!showStats)
    setShowMobile(!mobileView)

  }


  function checkWidth(){
      if(window.innerWidth > 769){
          setShowStat(true);
          setShowMobile(false)
      }
  }

  function useWindowSize(){
      const [size, setSize] = useState(window.innerWidth);
      useEffect(() =>{
        const handleResize = () =>{
            setSize(window.innerWidth);
            

        }
        window.addEventListener("resize", handleResize)
      
      }, [])

      return size;
      


  }












  

    const [showStats, setShowStat ] = useState(true)
    const [mobileView, setShowMobile ] = useState(true)

    const size = useWindowSize()

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
       {showStats && size < 769 ? <> <Modal2  onClick={()=>{setShowMobile(false)}}/> </>: null  }
       
       {console.log(size)}
  
        <div className="peep_top">
        <Header2/>
        
                <ul class="sub_nav">
                   <button  style={showValue==1?{border:"1px solid white", borderRadius:"30px", backgroundColor:"transparent",color:"white"}: null}  onClick={()=> setShowValue(1)}>Profile</button>
                    <button  style={showValue==2?{border:"1px solid white", borderRadius:"30px"}: null}  onClick={()=> setShowValue(2) }>Teams</button>
                   <button   style={showValue==3?{border:"1px solid white", borderRadius:"30px"}: null} onClick={()=> setShowValue(3)}>Intern Space</button>
                </ul>


            
    
        </div>

        <div  className="peep_all">
            <img src={data_view} className="data_view" onClick={()=>{closeData()}}/>
     
            <div className="peep_left">
                
                
               {ShowUi()}
                

        
            </div>
      
        
            {
                     showStats || size > 769  ? <>

             <div className="peep_right">
                 
                        <img src={close} class= "close_image" alt=""  onClick={()=>{setShowStat(false)}}/>
                      <Right_info info_1="Founded" info_2="2018"  info_3="Employees"  info_4="18"  />
                      <Right_info_2 title="Gender Breakdown"/>
                      <Right_info info_1="Average Age" info_2="23 yrs"  info_3="Turnover"  info_4="N/A"  />
                      <Right_info_3 title3="Revenue" revenue="N/A"/>
                
              
                      
            </div>
            </>: null
                 }
                      
            
       
            
          
        </div>

       
           <Footer />
         
       
       
     </div>
     );
}
export default PeepTribe;

