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
                    
                <h1>Peep<br/>and Learn</h1>
                <h6>An interactive educational hub</h6>
                
                <br/>
                <br/>
                <div className="line"> </div>
                
                <br/>
                <p>that endeavors to connect students, parents and teachers on an innovative, fun and interactive platform for best results in our national academic curriculum. With our Home Tuition service, E-library and Online Tuition service, we help students learn the easy and convenient way.</p>
            
                <br/>
            
              <Link to="/mission" ><button style={{fontFamily:"Poppins"}}> Mission & Vision </button></Link>  
                    
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
