import React from 'react'
import "./jobSpaces.css";
import dash from "../../assets/smalldash.svg"
import {Footer} from "../../components/footer/Footer";
import {Header2} from "../../components/header/Header"
import person from "../../assets/white_male_vector.svg"
import {Link,NavLink,useLocation } from "react-router-dom";

function JobSpaces() {

    const location =  useLocation ()
    return (

        <div className = "job_cover" style={{
            body:"100%",
 width:"100%", backgroundColor:"#ECEFF1"
 }}> 

        
       <Header2/>
            <div className="jobspaces_top">

                <h1  className="job_heading">{location.state}</h1>


             

            </div>


            <h3 >No Jobs Available</h3>

       
            <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>


























{/*             

            <div className="job_info">
                <div className="top_info">
                        <img src={dash}/>
                        <h3>Job Description</h3>
                        
                </div>
        
                
                
                <p>Dictum ipsum eu cursus tellus a arcu ut massa. Mi sed semper est bibendum mattis dictumst eget mauris. Pulvinar commodo suspendisse eu elit sit vel, accumsan. Mattis nibh bibendum non nisl suscipit placerat consequat, euismod. In lobortis nisl purus tincidunt orci et id at pellentesque. Augue felis natoque porttitor erat ac sit. Dui dictum mi eu curabitur scelerisque.
                    Eget egestas cursus fringilla egestas pretium neque. Posuere proin orci mauris pharetra, nibh. Odio feugiat condimentum ut massa aliquam. Mauris platea hendrerit tortor egestas et erat quis nec. In tincidunt vulputate tortor eget malesuada id purus sem. Enim id nunc vel metus orci lobortis sapien urna.
                    At amet fames diam congue. Ac ultricies laoreet molestie auctor tempus egestas et, fermentum dolor. Sagittis turpis ultrices quam id in. Amet netus sit libero eu odio consequat nulla. In non in amet magna lectus aenean a. Nisl vel nam mattis fames facilisis at pellentesque maecenas. Amet sed sed ac elementum faucibus quisque magna. Volutpat mattis ac consectetur tellus ridiculus gravida et venenatis. Urna sed consequat cursus lectus ac eget consectetur nascetur iaculis. Consectetur id viverra pharetra nibh.
                    Cum nibh convallis duis amet posuere. Odio diam turpis luctus nibh vulputate. Metus diam ultricies platea at quisque cras. In mi nunc, semper condimentum malesuada mauris ullamcorper a arcu. Risus, arcu tellus vulputate nunc urna. Feugiat id turpis hac dignissim.
                    Nunc sit odio morbi eget leo est. Quis id pellentesque vel vulputate lorem laoreet. Blandit nec, ut lacus, amet egestas egestas. Ut eu vel malesuada proin mauris et. Dignissim mi turpis non eu nisi.</p>
            </div>


            <div className="job_info">
                <div className="top_info">
                        <img src={dash}/>
                        <h3>Responsibilities</h3>
                </div>
                
                <p>
                <b> Your main responsibilities will be:</b><br/><br/>

                Mi sed semper est bibendum mattis dictumst eget mauris. Pulvinar commodo suspendisse eu elit sit vel, accumsan. Mattis nibh bibendum non nisl suscipit placerat consequat, euismod. <br/>
                <br/>
                Eget egestas cursus fringilla egestas pretium neque. Posuere proin orci mauris pharetra, nibh. Odio feugiat condimentum ut massa aliquam. <br/>
                <br/>
                At amet fames diam congue. Ac ultricies laoreet molestie auctor tempus egestas et, fermentum dolor. Sagittis turpis ultrices quam id in. Amet netus sit libero eu odio consequat nulla.<br/>
                <br/>
                In non in amet magna lectus aenean a. Nisl vel nam mattis fames facilisis at pellentesque maecenas. Amet sed sed ac elementum faucibus quisque magna. Volutpat mattis ac consectetur tellus ridiculus gravida et venenatis. <br/>
            
                Cum nibh convallis duis amet posuere. Odio diam turpis luctus nibh vulputate. Metus diam ultricies platea at quisque cras. In mi nunc, semper condimentum malesuada mauris ullamcorper a arcu. Risus, arcu tellus vulputate nunc urna. <br/>
                </p>
            </div>



            
            <div className="job_info">
                <div className="top_info">
                        <img src={dash}/>
                        <h3>Desired Requirements</h3>
                </div>
                
                <p>
                Nulla arcu vel nam leo nisi. Scelerisque euismod augue aenean sed at. Et eu odio mi pretium, tortor nulla ut nisi elit.  <br/>
                <br/>
                Justo, amet ultricies vulputate cras in. Enim et felis dignissim sed libero, massa nam consectetur egestas. Purus, euismod vulputate faucibus quis sapien.  <br/>
                <br/>
                Gravida diam quis ac dignissim sollicitudin vitae rutrum. Id mauris mattis consequat ac molestie vitae risus. <br/>
                <br/>
                Consequat consectetur vulputate aliquet tempor odio nulla metus tristique lorem.
                 <br/>
            
                 Scelerisque lacus at sollicitudin feugiat malesuada. Vitae in urna cum vulputate molestie erat malesuada. Leo amet sed vulputate dui, ipsum semper condimentum malesuada mauris ullamcorper a arcu. Risus, arcu tellus vulputate <br/>





                </p>
            </div>


            





            <div className="job_info">
                <div className="top_info">
                        <img src={dash}/>
                        <h3>What Peep & Learn offers you</h3>
                </div>
                
                <p>
            

                Mi sed semper est bibendum mattis dictumst eget mauris. Pulvinar commodo suspendisse eu elit sit vel, accumsan. Mattis nibh bibendum non nisl suscipit placerat consequat, euismod. <br/>
                <br/>
                Eget egestas cursus fringilla egestas pretium neque. Posuere proin orci mauris pharetra, nibh. Odio feugiat condimentum ut massa aliquam. <br/>
                <br/>
                At amet fames diam congue. Ac ultricies laoreet molestie auctor tempus egestas et, fermentum dolor. Sagittis turpis ultrices quam id in. Amet netus sit libero eu odio consequat nulla.<br/>
                <br/>
                In non in amet magna lectus aenean a. Nisl vel nam mattis fames facilisis at pellentesque maecenas. Amet sed sed ac elementum faucibus quisque magna. Volutpat mattis ac consectetur tellus ridiculus gravida et venenatis. <br/>
            
                Cum nibh convallis duis amet posuere. Odio diam turpis luctus nibh vulputate. Metus diam ultricies platea at quisque cras. In mi nunc, semper condimentum malesuada mauris ullamcorper a arcu. Risus, arcu tellus vulputate nunc urna. <br/>
                </p>
            </div>

        <br/>
        <br/>

        <Link  to="/job_form"	>   <button className="apply_btn">Apply</button>    </Link> 
*/}

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>


        <Footer/>

 
        </div>
    )
}

export default JobSpaces
