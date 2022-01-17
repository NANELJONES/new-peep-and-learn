import React from 'react'
import "./accordion.css"
import {useState} from "react"
import search from "../../assets/searchicon.svg"



import forwardright from "../../assets/forwardright.svg"
import backwardsleft from "../../assets/backwardsleft.svg"




function Accordion() {



    function Allocator({data}){
        return(
            <div className="accordion">  
            {data.map((item, i) =>(
                    <div className="item"   onClick={() => toggle(i) }>
                            <div className={selected == i ? "title show" :"title"} >
                                <h2 className={selected == i ? "item_heading show" :"item_heading"} >{item.heading}</h2>
                                <span>{selected == i ?<i class="fas fa-times"></i> :<i class="fas fa-caret-down"></i> }</span>   
                            </div>
                            
                            

                            <div className={selected == i ? "content show" :"content"} >
                                <p>{item.content}</p>
                            </div>
                    </div>
            ))}
    </div>

        )

    }




    const [selected, setSelected] = useState(null)
    const [pageno, setPageNo] = useState(1);

    const toggle =(i) =>{
        if (selected == i){
                return setSelected(null)
        }
            setSelected(i)

    }
 
    const info1  = [

        {
            heading:"What are the payment options available on Peep & Learn?",
            content:"Mobile money collections from all networks in Ghana .i.e. MTN MoMo, Vodafone Cash & AirtelTigo Money. Debit cards."
        },

        {
            heading:"Are there available refunds for payments made",
            content:"Refunds are not available for subscription services on Peep & Learn as subscriptions are not automatic deductions from users account."
        },

        
        {
            heading:"What subscription service can I start my Peep & Learn account with?",
            content:"All Peep & Learn services can be subscribed to independently. But to have the best of experience services like Online Tuition and E-Library work best when paired together."
        },

        
        {
            heading:"Are all services on Peep & Learn the same subscription fees?",
            content:"Subscription services on Peep & Learn each have different subscription fees, which supplement the needs of the users."
        },

        {
            heading:"Would my account be suspended following failure to subscribe to service E-Library, Online Tuition or Home Tuition? ",
            content:"No please. All services are available once you have a Peep & Learn account. But for access to course content, learning videos and services like Peep Chat, will require a valid subscription."
        },



    ]











    const info2  = [

        {
            heading:"How many courses are available on the Peep & Learn platform? ",
            content:"There are six ¬¬¬¬(6) subjects currently accessible on the Peep & Learn platform.  They are English, Maths, Science, French, Social Studies & ICT."
        },

        {
            heading:"What are the levels that these subjects are accessible to? ",
            content:"These subjects are accessible across all upper primary to senior high level."
        },

        
        {
            heading:"What is the difference between Peep and Answer & Past Questions?",
            content:"Both Peep & Learn services are cover examinable questions available to the student. Peep and Answer, are examinable questions that cover subject specific topics and are a copyright product for Peep and Learn. Past Questions are however examinable questions that are segmented based on the exam years for a selected subject."
        },

        
        {
            heading:"What is the difference between Online Videos & Syndicated Videos?",
            content:"Online videos are LIVE class sessions that students can join online via the integrated Zoom service on Peep & Learn. Syndicated Videos are pre-recorded videos on specific subject topics on the Peep & Learn platform."
        },

        {
            heading:"How long can I have access to the Syndicated videos?",
            content:"Videos are accessible as long as you have an active Peep & Learn user account on the platform."
        },

        {
            heading:"How long can I have access to saved Online Videos?",
            content:"Videos are accessible on your user account for a duration of a month. "
        },

        {
            heading:"How useful is the Peep Chat on Peep & Learn?",
            content:"Students can use the Peep Chat service to share questions on subjects, upload and share documents, to get assistance on homework assigned and any other discussions in relation to the learning path. "
        },


        {
            heading:"How accessible is the Peep Chat service?",
            content:"For each period in time, a minimum of five subject teachers are always available on the go to assist students online. "
        },

        {
            heading:"Are Peep Chat sessions monitored?",
            content:"All parents and assigned guardians of students have access to all chat sessions between their wards and teachers for a selected Peep Chat."
        },




    ]





    const info3  = [

        {
            heading:"What does the Peep & Learn media contain?",
            content:"The media section on Peep & Learn provides access to all videos, podcast and images covering all subject topics for all subjects on the Peep & Learn app to assist with their learning."
        },

        {
            heading:"Do I need Internet access for Media Content?",
            content:"No please. All videos when viewed once are available for subsequent views following their initial download on the Peep & Learn app. "
        },

        
        {
            heading:"Are media content shareable with other users on the Peep & Learn app?",
            content:"No please. The Peep & Learn app prevents user screenshots of videos on the app."
        },



    ]




    
    const info4  = [

        {
            heading:"On which platforms is the Peep & Learn service available?",
            content:"The Peep & Learn service is available on the Google Playstore, Apple Appstore and also as a standalone desktop application."
        },

        {
            heading:"Can I access my account on the Peep & Learn website?",
            content:"The Peep & Learn website, serves as an information hub for everthing Peep & Learn. All service updates and version releases willbe accessible on the website. For account access, users need to get the mobile app or the desktop app."
        },

        
        {
            heading:"How the Revision Expert work?",
            content:"It allows students to pull out of the Peep & Learn library, all subject matter relating to keywords they create and save under the Revision Expert section. Examinable questions and up-to-date topics are also included in the revision results."
        },


        {
            heading:"Can parents monitor their wards on Peep & Learn?",
            content:"Parents can access their wards Peep Chat history, their Revision Expert dashboards, Results Stats on the Peep & Learn app."
        },




    ]


    const info5  = [

        {
            heading:"Is Peep & Learn a Ghanaian Company?",
            content:"Yes. Peep & Learn is a Ghanaian Limited Liability Company (LLC) incorporated in 2018. For more information, kindly visit the Peep & Learn website www.peepandlearn.com"
        },

        {
            heading:"Can anyone invest into Peep & Learn?",
            content:"Peep & Learn is currently open to Ghanaian and Foreign investors for a limited shareholder stake in the company. For more information regarding this process, kindly email business@peepandlearn.com"
        },

        
        {
            heading:"Who can join Peep & Learn?",
            content:"Peep & Learn is a tribe of committed individuals, dedicated to providing the best learning experience for Ghanaian students. Anyone with the right sense purpose and attitude can join the Peep & Learn team. For more information, contact careers@peepandlearn.com"
        },


        {
            heading:"Who can I become a Peep & Learn teacher?",
            content:"All teachers on the Peep & Learn platform undergo an a strict selection process before enrollment onto the platform. Interested teachers can forward their details to careers@peepandlearn.com"
        },

        {
            heading:"Is the Parent Teacher app free?",
            content:"Both of these standalone Peep & Learn apps are free to use by both parents and teachers. Parents can monitor the progress of their wards on the app and teachers can provide their services."
        },





    ]
    
    












    function pageForward(){
      return( pageno < 5 ? setPageNo(pageno + 1) : null); 
    }

    function pageBackward(){
        return( pageno > 1 ? setPageNo(pageno - 1) : null); 
      }
  




    return (
        <div id="all_acc">
            <div className='search_box'  id="search_box" >
                <input type="text" placeholder='Search asked questions'/>
                <img src={search}/>
            </div>

            <div className="Allocator_div">
                {pageno == 1 ? <Allocator data = {info1}/>: null }
                {pageno == 2 ? <Allocator data = {info2}/>: null }
                {pageno == 3 ? <Allocator data = {info3}/>: null }
                {pageno == 4 ? <Allocator data = {info4}/>: null }
                {pageno == 5 ? <Allocator data = {info5}/>: null }
                  




            </div>

           




            

            <div className='faq_nav'>

                 <button    onClick={pageBackward} >  <img src={backwardsleft}/>   </button> 
                    < p style={{color:"#0B77BE",fontFamily:"Poppins"}}>{pageno}</p>

                    <p   style={{color:"#969696",fontFamily:"Poppins"}} >/ 5</p>

                 <button    onClick={pageForward}   >       <img src={forwardright}/> </button> 
                 
            </div>
        
        </div>
       
    )
           }

export default Accordion
