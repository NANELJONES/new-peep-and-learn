import React from "react";
import  "./home.css";
import {Header} from "../../components/header/Header";
import img1 from "../../assets/slides/online tuition.png"
import img2 from "../../assets/slides/home tuition.png"
import img3 from "../../assets/slides/e library.png"
import {Footer} from "../../components/footer/Footer";
import side_monitor_icon from "../../assets/side_monitor_icon.svg";
import {Link} from "react-router-dom";


function Home(){
   

    return(
        <div className="home_container">
            <Header/>

            <div className="main_information">
                <div className="left">
                    <div className="peep">
                        <h1>Peep  </h1>
                        <h1> and Learn </h1>
                    </div>
                
                <h6>An interactive educational hub</h6>
                
                <br/>
             
                <div className="line"> </div>
                
              
                <p>Peep & Learn as a company is in the business of developing technological frameworks and modules targeted at making education accessible and simplified for its stakeholders (parents, teachers and students). The flexibility of the platform allows for the infusion of cultural presets, study curriculums and standards unique to each country where is it adopted.</p>
            
                <div className="line2"> </div>
            
            
              <Link to="/mission" style={{textDecoration:"none"}} ><button style={{fontFamily:"Poppins"}}> Mission & Vision </button></Link>  
                    
                </div>


                <div className="right">
                    <div className ="slider">
                   
                        <div className="slide">
                           
                           
                            
                             <img src={img1} alt="Image Not Found"/>
                        </div>

                        <div className="slide">
                           
                          <img src={img2}  alt="Image Not Found"/> 
                        </div>

                        <div className="slide">
                         
                           <img src={img3}  alt="Image Not Found"/>    
                        </div>
                    </div>      

                   
                </div>

                
            </div>
           
               
                <Footer/>
                <div className="side_hover">
                  
                        <li className="side_monitor">   <img src={side_monitor_icon}  /> </li>
                        <li id="different_things">E-Library - 1224 Students  </li>
                        <li id="different_things">Online Tuition - 2801 Students    </li>
                        <li >Home Tuition - 1030 Students -   </li>
                                
                  
                    
                </div>     
                
                
           
           
        </div>
  
    );
}
export default Home;
