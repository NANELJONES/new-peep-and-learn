import React from 'react'
import "./faq.css"
import { Footer } from '../../components/footer/Footer'
import "../../components/accordion/accordion.css"
import Accordion from "../../components/accordion/Accordion.jsx"
import {Header} from "../../components/header/Header";
import forwardright from "../../assets/forwardright.svg"
import { useState } from 'react/cjs/react.production.min'

import faq_image from "../../assets/faq image.png"

function FAQ() {
  

   

    
    return (
        <div className="faq_container">
            <Header/>
            <div className="faq_det">
                <div className="faq_left">
                     <h3 id="faq_header">Frequently Asked Questions</h3>
                    <img src={faq_image} alt="" id="faq_image"/>
                </div>

                <div className='faq_right'>
                     <Accordion/>
                 </div>

            </div>
         
            
        
            <Footer/>
            
        </div>
    )
}

export default FAQ
