import React from 'react'
import person from "../../assets/male.svg"
import calendar from "../../assets/calendar.svg"
import {Link} from "react-router-dom"
import {BrowserRouter,Route, Routes} from "react-router-dom";
import {Footer} from "../../components/footer/Footer";


function Singuler_Intern(props){
    return(

        <div className="internship_post" style={{       
            width:"820px",
            height:"100px",
            border:"1px solid black",
            borderRadius:"10px",
            boxSizing:"border-box",  }}>
            <h2 style={{
                marginLeft:"5%",
                marginTop:"25px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "19px",
                
                /* identical to box height, or 22px */

                textAlign:"justify",
                color:" #555555"

            }}>  {props.Intern_Heading}  </h2>
            <div  className="internship_info"  style={{
               position:"relative",
               bottom:"15px",
                width:"250px",
                marginLeft:"5%",
                 display:"flex",
                 maxHeight:"20px",
                 justifyContent:"space-between",
                 
           
               
              

            }}>
                {/*this is for the span */}
                <span style={{
               
                    display:"flex",
                   
                    
                   
                   justifyContent:"center",
                   alignItems:"center"
                  
                
                   
                  
                }}><img src={person} style={{
                    all:"unset",
                    width:"15px",
                    height:"15px",
                }}/> <p style={{
                    marginLeft:"15px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    
                    fontSize: "11px",
                  
                    /* identical to box height, or 22px */
    
                    textAlign:"justify",
    
                    color:" #555555"


                }}>{props.Gender}</p></span>
                  {/*this is for the end of span */}
                



                  {/*this is for the span */}
                  <span style={{
                    all:"unset",
                    display:"flex",
                
                   
                   justifyContent:"center",
                   alignItems:"center"
                  
                
                   
                  
                }}><img src={calendar} style={{
                    all:"unset",
                    width:"15px",
                    height:"15px",
                }}/> <p style={{
                    marginLeft:"15px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    
                    fontSize: "11px",
                  
                    /* identical to box height, or 22px */
    
                
    
                    color:" #555555"


                }}>{props.Time}</p></span>
                  {/*this is for the end of span */}
                
              

            </div>


        </div >
    

    )
}


function Internship() {
    return (
        <div className="Inter_container" style={{
            height:"700px",
        }}>

                <div style={{
                    width:"100%",
                    height:"500px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-evenly"
                
                }}>
               <Link to="/jobspaces"  style={{all:"unset"}}> < Singuler_Intern Intern_Heading="User Interface (UI) Designer" Gender="Male/Female" Time ="Today" /></Link>
                
                < Singuler_Intern Intern_Heading="Customer Service Representative (CSR)" Gender="Male/Female"    Time ="Yesterday" />
                < Singuler_Intern Intern_Heading="Front-end Developer" Gender="Female" Time ="Yesterday" />
                < Singuler_Intern Intern_Heading="Marketing Personnel" Gender="Male" Time ="4 days ago" />
                    
                </div>
            
        </div>
    )
}

export default Internship
