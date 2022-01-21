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
                                    <span>Mission</span>
                                
                                    <p>To provide unadulterated educational solutions infrastructure focused on the national academic curricular for students in Upper Primary through Senior High School level by means of online and offline innovations.</p>
                                
                                </div>
                        </div>

                        <div className="idea_1">
                                <img src={vision}/>
                                <div className="info_holder">
                                    <span id="vision" >Vision</span>
                                
                                    <p >We seek to become the national hub for technologically oriented education in and out of the traditional classroom.</p>
                                </div>
                        </div>

                        <div className="idea_1">
                                <img src={goals}/>
                                <div className="info_holder">
                                    <span id="goals">Goals & Milestones</span>
                                
                                
                        
                                    <p>1. To make out of class tuition and studying easy and result oriented for all students irrespective of the school they attend.<br/>
                                        <br/>

                                        2. To revolutionize equal educational opportunities, resources and infrastructure to all students from upper primary to senior high levels all over the country through the means of technology.<br/>
                                        <br/>
                                        3. To make it possible for any student anywhere to get access to diverse teachers from any school for educational assistance and materials and learning assistance both online and offline.<br/>
                                        <br/>
                                        4. For students to enjoy e-library materials which include; syndicated video and audio tutorials, examinable question banks/Past questions with solutions and other electronically enhanced materials tailored for our educational system.<br/>
                                        <br/>
                                        5. Create great and healthy student relations and a beautiful learning experience.
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