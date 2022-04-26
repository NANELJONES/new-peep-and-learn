import React from "react";

import emailjs from '@emailjs/browser';
import { useRef } from "react";

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
    const form = useRef()
    function SendMail(e){
        const form = useRef()


        e.preventDefault();

        emailjs.sendForm('gmail', 'template_sttn6ft', form.current, 'M32h6RRW5j_PWu3wU')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);

          });

          e.target.reset()
          {alert("Thank you for contacting us. Your Message has been sent")}

    }

    return(
        <div className="contact_box">
            <Header1/>
           <div className="contact_container">
                <div className="get_in_touch">

                        <h1>Get </h1>
                        <h1>In</h1>
                        <h1>Touch</h1>


                </div>



                <div className="form"  >

                    
                    <div class="form_left">
                        <div className="form_left_info">
                            <h3 className="left_head">Send us a message </h3>
                        
                            <form ref={form} onSubmit={SendMail}>
                                
                                <div className="your_name" >
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
                                
                                <div  className="your_name" >
                                    <div className="send_message">
                                       
                                        <label for="message">Message</label>
                                        <textarea name="message"></textarea>
                                       
                                    </div>
                                </div>

                                

                                <button type="submit"><img id="send_btn" src={send} type="submit"  /></button>

                                </form>
                        </div>

                    
                    </div>



                    <div className="form_right">
                         <h3 className="right_head">Contact Information </h3>        
                            <div className="all_contact_details">
                                <div className="small_info">                                
                                     
                                        <div className="info_1">
                                            <img src={location}/>
                                            <p>A06, Hydraform Estate <br/>- Spintex Road</p>
                                        </div>
                                        
                                        <div className="info_1 ">
                                            <img src={phone}/>
                                            <div className="phone_num">
                                            <p>Ghana:<br/>0302822062 <br/>+233595818766 <br/></p>
                                            <p>Zambia:<br/>+260769284073 <br/>+260769284391</p>

                                            </div>
                                          
                                        </div>

                                        <div className="info_1">
                                            <img src={message}/>
                                            <p>info@peepandlearn.com<br/>business@peepandlearn.com</p>
                                            
                                        </div>

                                       
                                </div>
                                
                                <div className="info_2">
                                    <a href="" >  <i className="fab fa-facebook-f"></i> </a>
                                    <a href="" >  <i className="fab fa-instagram"></i>	</a>
                                    <a href="" > <i className="fab fa-twitter"></i>		</a>
                                    <a href="" ><i className="fas fa-podcast"></i></a>
                                    
                                </div>
                                    
                         
                        </div>
                    </div>

                </div>




           </div>

            
          <Footer1/>
        </div>
    );
}
export default Contact;