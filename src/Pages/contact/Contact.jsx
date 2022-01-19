import React from "react";

import {Footer, Footer1} from "../../components/footer/Footer";
import {Header,Header1} from "../../components/header/Header";
import whitelogo from "../../assets/logowhite.svg";
import "./contacts.css";
import location from "../../assets/location.svg"
import phone from "../../assets/phone.svg"
import message from "../../assets/message.svg"
import mess_btn from "../../assets/message.svg"
import send from "../../assets/send.svg"

function Contact(){

    return(
        <div className="mission_container">
            <Header1/>
           
        
            <h1>Get <br/>In<br/> Touch</h1>
            <div className="form">

                
                <div class="form_left">
                    <div className="form_left_info">
                          <h3 className="left_head">Send us a message </h3>
                      
                          <form>
                              
                            <div >
                                <label for="name">Your Name</label>
                                <input type="text" id="name" name="name"/>
                            </div>
                            
                           
                            <div className="info_3">
                                
                                    <div className="hi">
                                        <label for="number">Phone Number</label>
                                        <input type="text" id="number" name="number"/>
                                    </div>

                                    <div className="hi">
                                        <label for="email">Email</label>
                                        <input type="text" id="email" name="email"/>
                                    </div>
                            </div>
                            
                            <div>
                                <div className="send_message">
                                  <img id="send_btn" src={send}/>
                                    <label for="message">Message</label>
                                    <textarea></textarea>
                                    <button><img src={mess_btn}/></button>
                                </div>
                            </div>



                            </form>
                    </div>
                </div>



                <div className="form_right">
                   
                    <div className="small_info">
                       
                       <h3 className="right_head">Contact Information </h3>

                        
                      
                        <br/>
                     
                        <div className="info_1">
                            <img src={location}/>
                            <p>A06, Hydraform Estate <br/>- Spintex Road</p>
                        </div>
                        
                        <div className="info_1">
                            <img src={phone}/>
                            <p>0302822062 / 0501529511</p>
                        </div>

                        <div className="info_1">
                            <img src={message}/>
                            <p>info@peepandlearn.com<br/>business@peepandlearn.com</p>
                        </div>

                        <br/>
                        <br/>
                        <div className="info_2">
                            <a href="" >  <i className="fab fa-facebook-f"></i> </a>
                            <a href="" >  <i className="fab fa-instagram"></i>	</a>
                            <a href="" > <i className="fab fa-twitter"></i>		</a>
                            <a href="" ><i className="fas fa-podcast"></i></a>
                            
                        </div>



                    

                         
                    </div>
                </div>
        
            </div>
          <Footer1/>
        </div>
    );
}
export default Contact;