import React from "react";
import Modal from "../../components/Modal/Modal.jsx"
import {useState} from "react";
import {useReducer} from "react"
import {Footer} from "../../components/footer/Footer";
import {Header} from "../../components/header/Header";




import "./productDetails.css";
import lib from "../../assets/library.svg"
import revision from "../../assets/revision.svg"
import media from "../../assets/media.svg"
import os from "../../assets/operatingsys.svg"
import chat from "../../assets/chat.svg"
import onlinesession from "../../assets/onlinesession.svg"
import epayment from "../../assets/epayment.svg"
import monitoring from "../../assets/monitoring.svg"
import {ImageShower,ImageShower1} from "../../components/imageShower/ImageShower.jsx"



import library1 from "../../assets/product details/elibrary1.png"
import library2 from "../../assets/product details/elibrary2.png"
import library3 from "../../assets/product details/elibrary3.png"

import revision1 from "../../assets/product details/revision1.png"
import revision2 from "../../assets/product details/revision2.png"
import revision3 from "../../assets/product details/revision3.png"


import media1  from "../../assets/product details/media1.png"
import media2 from "../../assets/product details/media2.png"
import media3 from "../../assets/product details/media3.png"

import os1 from "../../assets/product details/os1.png"
import os2 from "../../assets/product details/os2.png"


import chat1  from "../../assets/product details/chat1.png"
import chat2 from "../../assets/product details/chat2.png"
import chat3 from "../../assets/product details/chat3.png"

import onlinesession1  from "../../assets/product details/onlinesession1.png"
import onlinesession2 from "../../assets/product details/onlinesession2.png"
import onlinesession3 from "../../assets/product details/onlinesession3.png"


import monitoring1  from "../../assets/product details/monitoring1.png"
import monitoring2 from "../../assets/product details/monitoring2.png"
import monitoring3 from "../../assets/product details/monitoring3.png"


import epayment1  from "../../assets/product details/epayment1.png"
import epayment2 from "../../assets/product details/epayment2.png"
import epayment3 from "../../assets/product details/epayment3.png"


function ProductDetails(){
  
    const [showLibrary, SetShowLibrary] =  useState(false)
    const [showRevision, SetShowRevision] =  useState(false)
    const [showMedia, SetShowMedia] =  useState(false)
    const [showOs, SetShowOs] =  useState(false)
    const [showChat, SetShowChat] =  useState(false)
    const [showOnlineSession, SetShowOnlineSession] =  useState(false)
    
    const [showMonitoring, SetShowMonitoring] =  useState(false)
    const [showEpayment, SetEpayment] =  useState(false)

  


    return(     
        <div className="pd_container" >
            <Header/>




              {showLibrary ? <> <Modal onClick={()=>{SetShowLibrary(!showLibrary)}}/> <ImageShower pd__img_1={library3} pd__img_2={library2}  pd__img_3={library1}/> </>: null }
          
              {showRevision ? <> <Modal onClick={()=>{SetShowRevision(!showRevision)}}/> <ImageShower pd__img_1={revision1} pd__img_2={revision2}  pd__img_3={revision3}/> </>: null }

              {showMedia ? <> <Modal onClick={()=>{SetShowMedia(!showMedia)}}/> <ImageShower pd__img_1={media1} pd__img_2={media2}  pd__img_3={media3}/> </>: null }

              {showOs ? <> <Modal onClick={()=>{SetShowOs(!showOs)}}/> <ImageShower1 pd__img_1={os1} pd__img_2={os2} /> </>: null }

              {showChat ? <> <Modal onClick={()=>{SetShowChat(!showChat)}}/> <ImageShower pd__img_1={chat1} pd__img_2={chat2}  pd__img_3={chat3}/> </>: null }

              {showOnlineSession ? <> <Modal onClick={()=>{SetShowOnlineSession(!showOnlineSession)}}/> <ImageShower pd__img_1={onlinesession1} pd__img_2={onlinesession2}  pd__img_3={onlinesession3}/> </>: null }

              {showMonitoring ? <> <Modal onClick={()=>{SetShowMonitoring(!showMonitoring)}}/> <ImageShower pd__img_1={monitoring1} pd__img_2={monitoring2}  pd__img_3={monitoring3}/> </>: null }
             
              {showEpayment ? <> <Modal onClick={()=>{SetEpayment(!showEpayment)}}/> <ImageShower pd__img_1={epayment1} pd__img_2={epayment2}  pd__img_3={epayment3}/> </>: null }










            <div className="all_info_container">
                  <div className="information1" onClick={()=>{ SetShowLibrary(!showLibrary)}}            >
                      <div className="top_part">
                            <img src={lib}/> 
                            <h2>E-Library</h2>
                      </div>
                   <p>Past Questions, Online Testing, Learning Materials, Performance Tracking, Learning Curriculum.</p>
                  </div>
                  

                  
                  <div className="information1"         onClick={()=>{ SetShowRevision(!showRevision)}}      >
                      <div className="top_part">
                            <img src={revision}/>
                            <h2>Revision Expert</h2>
                      </div>
                   <p>Simplify your revision process with an enbeded revision expert system.</p>
                  </div>
                  

                  
                  <div className="information1"   onClick={()=>{ SetShowMedia(!showMedia)}}  >
                      <div className="top_part">
                            <img src={media}/>
                            <h2>Media</h2>
                      </div>
                   <p>Syndicated Videos & Podcasts.</p>
                  </div>
                  

                  
                  <div className="information1" onClick={()=>{ SetShowOs(!showOs)}}>
                      <div className="top_part">
                            <img src={os}/>
                            <h2>Operating Systems</h2>
                      </div>
                   <p>Android <br/>iOS <br/> Desktop</p>
                  
                  </div>


                  <div className="information1"      onClick={()=>{ SetShowChat(!showChat)}}        >
                      <div className="top_part">
                            <img src={chat}/>
                            <h2>Chat Messanger</h2>
                      </div>
                   <p>Student-Tutor <br/>Parent-Tutor</p>
                  
                  </div>




                  <div className="information1"      onClick={()=>{ SetShowOnlineSession(!showOnlineSession)}}    >
                      <div className="top_part">
                            <img src={onlinesession}/>
                            <h2>Online Session</h2>
                      </div>
                   <p>Join interactive online sessions scheduled with Peep-approved tutors.</p>
                  
                  </div>

                  

                  <div className="information1"       onClick={()=>{ SetEpayment(!showEpayment)}}   >
                      <div className="top_part">
                            <img src={epayment}/>
                            <h2>E-Payment Integration</h2>
                      </div>
                   <p>Mobile Money <br/>Bank Cards</p>
                  
                  </div>




                  <div className="information1"       onClick={()=>{ SetShowMonitoring(!showMonitoring)}}   >
                      <div className="top_part">
                            <img src={monitoring}/>
                            <h2>Monitoring</h2>
                      </div>
                   <p>Track your wards perfomance and their learning activities.</p>
                  
                  </div>

                  <div style={{
                      backgroundColor:"#0B77BE",
                  }} className="information1 key_partners">
                      <div className="top_part">
                            <h2 style={{
                                color:"white",
                                marginLeft:"0px",
                            }}>Key Partners</h2>
                      </div>
                   <p style={{
                       color:"white"
                   }}>Peep Tribe Technologies</p>
                  
                  </div>



                  <div className="information2 info_2">
                            <div style={{
                                borderRadius:"unset",
                                backgroundColor:"transparent",
                                boxShadow:"none",
                                border:"none"
                            }} className="information1 ">
                                <div className="top_part">
                                      
                                        <h2 style={{
                                            marginLeft:"0px",
                                        }}>Users</h2>
                                </div>
                                       <p>Students (Primary, JHS & SHS) <br/>Tutors/Teachers <br/> Parents</p>
                            </div>





                            
                            <div style={{
                                borderRadius:"unset",
                                backgroundColor:"transparent",
                                boxShadow:"none",
                                border:"none"
                            }} className="information1">



                                <div className="top_part">
                                      
                                      
                                        <h2 style={{
                                            marginLeft:"0px",
                                        }}>Key Supporters</h2>
                            
                                </div>
                                       <p>  Zoom, Global Paymnet (API) <br/>mNotify, Publication Houses, <br/>Warmkeys, Project 21, GC Net</p>
                            </div>
                      
                  </div>

             </div>
             <Footer/>

         </div>

        
 );
}
export default ProductDetails;