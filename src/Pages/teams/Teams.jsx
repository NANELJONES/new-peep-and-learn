import React from "react";
import "./teams.css";
import manage from "../../assets/Managerial.png";
import creative from "../../assets/CreativeTeam.png";
import dev from "../../assets/Development.png";
import analysis from "../../assets/Analysis.png";



function Teams(props){
    return (
        <div className="Team_body">

            <div className="Teams_info" >
                        <div className="team_pic" style={{backgroundImage:`url(${manage})`, backgroundPosition:"center",backgroundRepeat:"no-repeat"}} >
                           
                        </div>
                        <div className="team_info">
                            <h3>Managerial Team</h3>
                            <p>The Peep management team is a multifaceted unit, comprising the best minds across product management and ownership, business analysis and operational management. The team successfully oversees the product development lifecycle across all Peep product modules and the delivery of the Peep vision.</p>
                            <p> All activities of the management team is governed by the Peep board, with the representation from managing partners who hold board decision making rights over the company.</p>
                        </div>
            </div>


            <div className="Teams_info" >
                        <div className="team_pic" style={{backgroundImage:`url(${creative})`, backgroundPosition:"center",backgroundRepeat:"no-repeat"}} >
                           
                        </div>
                        <div className="team_info">
                            <h3>Creative Team</h3>
                            <p>To tell the story of the brand and to communicate the vision of Peep and Learn, is the true North Star for the Peep creative team. To achieve this, the team regularly participates in creative JAD sessions with the analysis team, to deeply understand and drive creative synergies that translate into the best experiences for users of Peep products. This is evident through the use of intuitive UI/UX designs and interactive product prototypes, to best address unique user scenarios. </p>
                            <p> The Peep creative team also leads effort in product design thinking and research, as well as the production and management of syndicated videos and peep campaigns by the Peep Studio.</p>
                        </div>
            </div>

            <div className="Teams_info" >
                        <div className="team_pic" style={{backgroundImage:`url(${dev})`, backgroundPosition:"center",backgroundRepeat:"no-repeat"}} id="last_image" >
                           
                        </div>
                        <div className="team_info">
                            <h3>Development Team</h3>
                            <p>Unlike traditional software development companies, the Peep development team prides itself with distinct developer units for each Peep product module; that is the Student Mobile Module, Student Desktop Module, Parent Mobile Module, Teacher Mobile Module and the Windows Admin Portal Module. </p>
                            <p> Developer units within the development team regularly commit to the Peep GitHub repository following successful peer review meetings over the code base. Communication is efficient and reliable over the teams adopted Slack channel, with management level decision-making ingrained in the daily stand up meetings for product updates by team members.</p>
                           
                            <p>Development team members also participate in requirements elicitation sessions with the analysis teams, assisting in efforts to define different product roadmaps and module backlogs. All team activities is coordinated by the resident CTO.
</p>
                        </div>
            </div>

            <div className="Teams_info" >
                        <div className="team_pic" style={{backgroundImage:`url(${analysis})`, backgroundPosition:"center",backgroundRepeat:"no-repeat"}} >
                           
                        </div>
                        <div className="team_info">
                            <h3>Analysis Team</h3>
                            <p>The Peep analysis team augments the activities of all teams within Peep and Learn. With its research department, the team is able to glean requisite product feedback via qualitative and quantitative research approaches from all identified product stakeholders, which feeds as input for the writing department. </p>
                            
                            <p>The writing department carry on product insights by translating them into product documentation, covering all salient product requirements for active product modules and their current iterations.</p>
                           
                            <p>The operational department completes the Peep analysis team by overseeing the daily success stories of all Peep teams; through diligent management of daily operations and activities of the teams.</p>
                        </div>
            </div>
            <br/>

            <br/>
            <br/>
            <br/>











































    </div>
    );
}







export default Teams;