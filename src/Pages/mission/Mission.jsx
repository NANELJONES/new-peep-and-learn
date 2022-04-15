import React from "react";
import {Header1} from "../../components/header/Header";

import "./mission.css";
import {Footer1} from "../../components/footer/Footer";
import boy from "../../assets/IMG_6770 1.svg"
import bulb_icon from "../../assets/icon.svg"
import vision from "../../assets/vision icon.svg"
import goals from "../../assets/goalsicon.svg"

function Mission(){

    return(
 
        <div class="mission_container">
              <Header1/>
            
            <div className="mission_left">
        
            </div>

            <div className="mission_right">
                    <div className="mission_holder">

                        <div className="idea_1">
                                <img src={bulb_icon}/>
                                <div className="info_holder">
                                    <span>Peep Mission</span>
                                
                                    <p>To provide unadulterated educational solutions and infrastructure focused on academic curriculums peculiar to each host country in Africa for all students (Primary and Secondary) by means of online and offline innovation.</p>
                                
                                </div>
                        </div>

                        <div className="idea_1">
                                <img src={vision}/>
                                <div className="info_holder">
                                    <span id="vision" >Peep Vision</span>
                                
                                    <p >We seek to become the hub for technologically oriented education in and out of the traditional classroom system in Africa.</p>
                                </div>
                        </div>

                        <div className="idea_1">
                                <img src={goals}/>
                                <div className="info_holder">
                                    <span id="goals">Peep Goals & Milestones</span>
                                
                                
                        
                                    <p>1. 	To revolutionize equal educational opportunities, resources, and infrastructure to all students from upper primary to senior high levels all within the various host countries in Africa through the means of technology.<br/>
                                        <br/>

                                        2. 	To make out of class tuition and studying easy and result oriented for all students irrespective of the school they attend.<br/>
                                        <br/>
                                        3. 	To foster a healthy teacher-student relationship by providing students access to diverse teachers for learning materials and prompt academic assistance. <br/>
                                        <br/>
                                        4. 	For students to experience beautiful learning experiences with electronically enhanced educational materials from our e-library which has; syndicated videos and audio tutorials, examinable question banks/past questions tailored to suit the educational system of the host country.<br/>
                                        <br/>
                                   
                                    </p>
                                </div>
                        </div>

                    </div>
            </div>

            <Footer1/>
        </div>
    );
}
export default Mission;