import React from 'react'
import {Header2} from "../../components/header/Header";
import "./job_form.css"
import {Footer} from "../../components/footer/Footer";
const Job_Form = () => {
    return (
        <div className='cv_body'>
                <div className="jobspaces_top">
                    <Header2/>
                    <h2 className='job_desc'>User Interface (UI) Designer</h2>
                    
                </div>
                <div className='job_down'>
                        <h2>SUBMIT YOUR APPLICATION</h2>

                        <div className='job_input'>
                            <label> Resume/CV </label>

                            
                            <input type="file" id="charley"/>
                            <label style={{backgroundColor:"#DDDEE0",padding:"10px",borderRadius:"3px", color:"#707070",marginRight:"45%"}}  for="charley">  ATTACH RESUME/CV </label>
                            

                        </div >

                        <div className='job_input'>
                            <label> Full name </label>
                            <input type="text"/>

                        </div >


                        <div className='job_input'>
                            <label> Email </label>
                            <input type="text"/>

                        </div >



                        <div className='job_input'>
                            <label> Phone Number </label>
                            <input type="text"/>

                        </div >



                        <h2 style={{marginTop:"50px"}}>ADDITIONAL INFORMATION</h2>
                        <textarea   style={{marginTop:"20px"}}></textarea>


                        <button   	className="apply_btn" style={{marginTop:"30px"}}    > SUBMIT APPLICATION</button>

                </div>
               
                

          <Footer/>


        </div>
    )
}

export default Job_Form
