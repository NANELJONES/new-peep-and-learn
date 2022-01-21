import React from 'react'
import "./peepNews.css"
import {NavLink,Link} from "react-router-dom";
import {Footer} from "../../components/footer/Footer";
import {Header} from "../../components/header/Header";

import news1 from "../../assets/peepnews1.svg";
import news2 from "../../assets/peepnews2.svg";
import news3 from "../../assets/peepnews3.svg";

import news4 from "../../assets/peepnews4.svg";
import news5 from "../../assets/peepnews5.svg";

import news6 from "../../assets/peepnews6.svg";
import news7 from "../../assets/peepnews7.svg";
import news8 from "../../assets/peepnews8.svg";


const PeepNews = () => {
    return (
        <div className="peepNews_container">
            <Header/>

           
           
        <div className="peep_news_details">
                    <h3>PEEP NEWS </h3>
                    <p style={{
                    textShadow:"none", 
                    fontWeight: "300",
                    fontSize:"13px", color:"#1D1D1D"}}>The latest and best educational news & articles handpicked by our editorial office.</p>
       

                <div className="all_peep_News">
                    
                
                            <div className="peep_news_1">
                            <Link to="/peep_news_ui" style={{all:"unset"}}>  <div style={{backgroundImage:`url(${news1})`,backgroundSize:"120%", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}className="news_1">
                                    <p>We have capacity to<br/>scale up online<br/>learning</p>
                                 </div>
                            </Link>  

                                <div style={{backgroundImage:`url(${news2})`,backgroundSize:"120%", backgroundPosition:"center",}}className="news_2">  
                                    <p style={{color:" #3C4BD5"}}>Facilisi cursus fringil arc ipsum.</p>
                                </div>
                                <div style={{backgroundImage:`url(${news3})`,backgroundSize:"120%", backgroundPosition:"center",}}className="news_3">  
                                <p>Coronavirus Safety Tips for Everyone</p>
                                </div>
                            </div>
               

                            
                            <div className="peep_news_1">
                                    <div style={{backgroundImage:`url(${news4})`,backgroundSize:"120%", backgroundPosition:"center", height:"48%"}}className="news_1">  
                                        <p style={{fontSize:"14px",position:"relative", top:"70%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                                    </div>
                                    <div style={{backgroundImage:`url(${news5})`,backgroundSize:"120%", backgroundPosition:"center", height:"48%"}}className="news_1"> 
                                    <p>Coronavirus Safety Tips <br/>for Everyone </p>
                                     </div>
                                
                            </div>



                            <div className="peep_news_1" style={{
                                flexDirection:"reverse columns"
                            }}>
                                <div style={{backgroundImage:`url(${news6})`,backgroundSize:"120%", backgroundPosition:"center",}}className="news_2"> 
                                <p style={{color:"black"}}>Coronavirus Safety Tips for Everyone</p>
                                 </div>
                                <div style={{backgroundImage:`url(${news7})` ,backgroundSize:"120%", backgroundPosition:"center",}}className="news_3">
                                    <p>Sollicitudin vel platea blandit nibh</p>
                              </div>
                                <div style={{backgroundImage:`url(${news8})`,backgroundSize:"120%", backgroundPosition:"center",}}className="news_1">
                                <p style={{fontSize:"14px",position:"relative", top:"70%"}}>Lorem ornare vitae pharetra lacinia ut ultrices </p>        
                              </div>
                            </div>




                        



                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PeepNews
