import React from 'react'
import person from "../../assets/male.svg"
import calendar from "../../assets/calendar.svg"
import {Link,NavLink} from "react-router-dom"
import {BrowserRouter,Route, Routes} from "react-router-dom";
import {Footer} from "../../components/footer/Footer";
import "./internship.css";


function Singuler_Intern(props){
    return(

        <div className="internship_post" >
            <h2 >  {props.Intern_Heading}  </h2>
            <div  className="internship_info">
                {/*this is for the span */}
                <span><img src={person} /> <p>{props.Gender}</p></span>
             
                  <span ><img src={calendar} /> <p >{props.Time}</p></span>
    
                
              

            </div>


        </div >
    

    )
}


function Internship() {
    return (
        <div className="Inter_container" >

                <div >
             <NavLink to = "/jobspaces" style={{all:"unset"}}>  < Singuler_Intern Intern_Heading="User Interface (UI) Designer" Gender="Male/Female" Time ="Today" /></NavLink> 
                
                < Singuler_Intern Intern_Heading="Customer Service Representative (CSR)" Gender="Male/Female"    Time ="Yesterday" />
                < Singuler_Intern Intern_Heading="Front-end Developer" Gender="Female" Time ="Yesterday" />
                < Singuler_Intern Intern_Heading="Marketing Personnel" Gender="Male" Time ="4 days ago" />
                    
                </div>
            
        </div>
    )
}

export default Internship
