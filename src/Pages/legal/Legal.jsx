import React from 'react'
import "./legal.css"
import {useState} from "react"
import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
function Legal() {

    const[style, setStyle] = useState("button1")
     
    
    return (
        <div className='legal_body' >
            <Header/>
            <div className='legal_container'>
                <div className='legal_left' >
                    <h2>LEGAL</h2>
                    <ul>
                        <button className={style=="button1"? "legal_changer": "button_style"} onClick={()=>{setStyle("button1")}}>Privacy Policy</button>
                        <button className={style=="button2"? "legal_changer": "button_style"} onClick={()=>{setStyle("button2")}}>Terms of Use</button>
                        <button className={style=="button3"? "legal_changer": "button_style"} onClick={()=>{setStyle("button3")}}>Cancellation Policy</button>
                        
                    </ul>
                </div>

                <div className='legal_right'>
                    {style=="button1"? Privacy_Policy() : null}   
                    {style=="button2"? TermsOfUse() : null}   
                    {style=="button3"? CancellationPolicy() : null}   






                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

function Privacy_Policy(){

return(
    <>
    <div className='privacy_div'>
    <div className= "policy_subhead">
                <h2>PEEP AND LEARN DATA RETENTION POLICY</h2>
                <br/>
              
                <h2>INTRODUCTION</h2>
                <br/>
                <p>Peep and Learn strives to comply to applicable laws and regulations related to the retention of personal data under the Data Protection Act, 2012.</p>

                <p>This policy outlines the basic rules by which Peep and Learn manages the retention of the personal data of students, teachers, parents and other individuals that is processed by Peep and Learn. The policy sets out the required retention periods for different categories of data and sets out the minimum standards to be applied when destroying certain information.</p>
                
                <h2>WHO IS AFFECTED BY THIS POLICY</h2>
                <br/>
                <p>All students, teachers, parents regardless of their length of employment/placement in the service are required to read and understand this document, so they are fully aligned with the policy of Peep and Learn. This document will be made available upon request.</p>
                    <p> This policy applies to all data used at Peep and Learn. Examples of data include:<br/>
                    - Emails<br/>
                    - Soft copy documents<br/>
                    - Video, audio and photographs<br/>
                </p>

        </div>

            <div className= "policy_subhead">
                <h2>RETENTION RULES</h2>
                <h2>Safeguarding of Data during Retention Period</h2>
                <p>Personal data retained on electronic storage media (hard drive, server) or in the cloud, the Owner/Manager will ensure that backup copies of the information also is available. The 3-2-1 backup strategy will be used: 3 copies total, 2 local copies, 1 offsite. Responsibility for the storage of data falls to the Owner/Manager.
                Personal data physically retained in hard copy format may become out of date quickly and this will be considered by the Owner/ Manager.</p>
              
                <h2>Destruction of Data</h2>
                <p>Managers of Peep and Learn will regularly review all data, whether held electronically or in hard copy format, to decide whether to destroy or delete any data once the purpose for which those documents were created is fulfilled.
                Overall responsibility for the destruction of data falls to the Owner / Manager. Once the decision is made to dispose of personal data, the data will be deleted, shredded or otherwise destroyed appropriately.
                The method of destruction varies and will be dependent upon the nature of the document. For example, any documents that contain sensitive or confidential information (and particularly sensitive personal data) will be disposed of as confidential waste and be subject to secure electronic deletion.
                <br/>
                The specific deletion or destruction process may be carried out either by an employee or by an internal or external service provider that the Owner/ Manager subcontracts for this purpose. Destruction of data is always approved by the Owner / Manager and the details recorded. Any applicable general provisions under relevant data protection laws <b>(Data Protection Act, 2012)</b> and Peep and Learn’s Personal Data Protection Policy shall be complied with.
                <br/>
                Appropriate controls are in place to prevent the permanent loss of essential information of Peep and Learn as a result of malicious or unintentional destruction of information. To this end only managers and senior managers are allowed any access to stored data relating information on the students, teachers and parents of the service. A breach of this control or the removal of any files from the service will be considered gross misconduct.
                The Owner/ Manager shall fully document and approve the destruction process.
                </p>

                <h2>Breach, Enforcement and Compliance</h2>
                <p>The person appointed with responsibility for Data Protection, the Owner / Manager, ensures that each employee complies with this policy. It is also the responsibility of the Owner/ Manager to assist any local office with enquiries from any local data protection or governmental authority.  <br/>
                <br/>
              
                Any suspicion of a breach of this Policy must be reported immediately to the Owner / Manager. All instances of suspected breaches of the Policy shall be investigated, documented and action taken as appropriate.
                Failure to comply with this Policy may result in adverse consequences, including, but not limited to, loss of customer confidence and possibly litigation, financial loss and damage to Peep and Learn’s reputation, personal injury, harm or loss. Non-compliance with this Policy by employees, or any third parties, who have been granted access to Peep and Learn premises or data, may therefore result in
                disciplinary proceedings or termination of their employment or contract. Such non-compliance may also lead to legal action against the parties involved in such activities.</p>

        </div>





        <div className= "policy_subhead">
                <h2>DOCUMENT DISPOSAL</h2>
                <h2>Routine Disposal Schedule</h2>
                <p>Records (only those containing personal data) which may be routinely destroyed unless subject to an on-going legal or regulatory inquiry are as follows:<br/>
                - Announcements and notices of day-to-day activities;<br/>
                - Message slips;<br/>
                - Outing reminder slips;<br/>
                - Newsletters.<br/>
                <br/>
                The Owner/Manager will determine what documents can be routinely destroyed.
                If there is a current court case or legal proceedings, all documents will be retained. Advise will be sought before disposing of documentation that may be subject to legal proceedings.
                </p>
              
                <h2>Destruction Method</h2>
                <p>Documents that include any personal data shall be disposed of confidentially (cross-cut shredded and incinerated) and shall be subject to secure electronic deletion if stored electronically. Confirmation of destruction will be sought as needed. </p>

                <h2>Validity and document management</h2>
                <p>This document is valid from __________________.</p>
                <p id ="last_p">  The owner of this document is the Owner / Manager, who must check and, if necessary, update the document at least once a year.</p>
    
                <p id ="last_p1">   This policy was adopted by Peep and Learn on Date: _______________________</p>

        </div>

        
    </div>
    </>
)


}




function TermsOfUse(){
    return(
        <>
        
        
        <div className= "policy_subhead">
                
                <h2>Terms & Conditions: Peep & Learn</h2>
                <br/>
                
                <p>Peep & Learn (www.peepandlearn.com) as also represented as “Peep and Learn”,”We”,”Our”, “Us” and “Service(s)” is a service platform, designed and built to allow for an interactive learning experience based on the Ghanaian education curriculum accessible to learners via smartphones, tablets and a desktop.</p>
              
                <p>The P&L website is intended to provide a detailed outline of all services and future offerings of the P&L service platform. With direct links to the dedicated app stores – Apple App Store and Google Playstore – the P&L website, allows learners to download and access all curriculum relevant content for their studies on either Apple or Android devices respectively. For the purpose of the Terms and Conditions (also referenced by “Terms” or “Agreement”) outlined here – including and not limited to future annexes and amendments – “You”, “Your” and “User” shall refer to any person that visits the P&L website or downloads, installs and accesses any P&L mobile application, from any of the dedicated app stores at any identified point in time.</p>
              

                <h2>1.0 Minimum Age</h2>
                <p>1.1 Our services are currently available to persons aged four (4) years and above.<br/>
                   1.2 For users between the ages of four (4) to eighteen (18), by agreeing to these Terms and Conditions through your use, access, browsing of our services, downloading and installing any of our mobile applications with or without payment and with or without subscription, through any means shall signify your acceptance of the Terms and Conditions as outlined and your agreement to be legally bound by the same.  </p>

        
        </div>



        <div className= "policy_subhead">
                <h2>2.0 Acceptance of Terms</h2>
                <p>2.1 By signing up for any of our services – i.e. E-Library Platform, Online Tuition or Home Tuition Service – you accept and agree to be bound by these Terms and Conditions, governing the use of our services from here on.<br/>      
                  2.2 Where you do not agree to these Terms and Conditions, you must not sign up for any of our services as listed above and for any future offerings by us.<br/>
                  2.3 Where you are acting on the behalf of a minor (learners between the ages of four to eighteen), the minor is also bound by these Terms.<br/>
                  2.4 You are therefore advised to carefully read these Terms and Conditions, as your use, access, browsing of our services, downloading and installing any of our mobile applications with or without payment and with or without subscription, through any means shall signify your acceptance of the Terms and Conditions as outlined and Your agreement to be legally bound by the same.
 
                 </p>
        </div>



        <div className= "policy_subhead">
                <h2>3.0 Services Overview</h2>
                <p>3.1 The Peep &amp; Learn service platform currently offers learners’ access to an E-Library, Home Tuition and Online Tuition. These are available for both the desktop version and mobile applications for Peep and Learn.<br/>
                    3.2 Our E-Library service provides learners’ with access to past questions for BECE(Basic Education Certificate Examination) and WASSCE(West African Senior School Certificate Examinations), a question bank from examiners and tutors, examination guidelines and learning schemes as stipulated by the Ghana Education Service(GES).<br/>
                    3.3 Our Home Tuition service provides a convenient facility to find and secure the services of vetted and verified tutors for your ward.<br/>
                    3.4 Our Online Tuition service provides a best in-class interactive experience for your wards, in the comfort of your home or on the go. Learners’ can join a class and participate in class sessions with exercises and assignments towards their academic laurels.<br/>
                    3.5 Users can sign up and register for any of our services either by accessing the P&L platform on the desktop version or on the mobile apps available in dedicated play stores.<br/>
                    3.6 Users can sign up and register for our services from any geographical region. Our services are not restricted to learners from the West African sub region.<br/>
                    3.7 For parent or guardians and student learners’, upon successful registration you will be required to make payment for access to any of the services:<br/>
                    3.7.1 Both E-Library and Home Tuition services are subscription services that require a learner to make a monthly payment, which provides a month’s access to the requested service. After your subscription expires, you will no longer have
                    access to our resources.<br/>
                    3.7.2 The Online Tuition service is a pay-as-you-go service which allows learners to pay for scheduled online classes as and when required.
                    3.8 With payments, approvals shall be required from the parent(s) or guardian(s) of a learner for Primary Students and Junior High School Students, as classified by the GES. Approvals would however not be required for Senior High School Students above the age of eighteen (18).<br/>
                    3.9 Our pricing has been made with the learners’ and tutors in mind, to provide the best services at the most convenient cost bracket. In the event of price changes, you will be notified via any of our dedicated service channels prior to the completion of your next scheduled payment for all active subscriptions.<br/>
                    3.10 For Teachers and Tutors who would like to render their services on the Peep & Learn platform, you are required to complete the specified registration process with P&L. After which our office shall contact you for Teacher Learning Materials (TLM), training schedules, and other relevant logistics needed for your assignment.<br/>

 
                 </p>
        </div>



        <div className= "policy_subhead">
                <h2>4.0 Acceptable Use Policy</h2>
                <p>4.1 You shall use the Peep &amp; Learn service platform in conjunction with the mobile applications made available, for lawful purposes only.<br/>
                    4.2 In this regard, a user shall not post, send or transmit any material which violates or infringes in any way upon the rights of others or perform any act that may be deemed as unlawful, threatening, abusive, defamatory, invasive of privacy or otherwise objectionable and would constitute as a criminal offence, give rise to civil liability or otherwise violate any law stipulated.<br/>
                    4.3 Peep &amp; Learn prohibits actions and activities by users that it deems at its sole discretion, as being intended to restrict or inhibit any other user from accessing any and all future services made available by Peep & Learn.<br/>
                    4.3.1 In lieu of this, actions including but not limited to any commercial solicitation, advertising personal brands and services are strictly prohibited on all Peep & Learn platforms i.e. desktop and mobile applications.<br/>
                    4.4 Peep & Learn reserves the right to deny you access to any of its service offerings or any portion of it thereof without notice for actions and or activities that fall out of line with any of the acceptable use policies or any other policy for its services.<br/>
                    4.5 Peep &amp; Learn also reserves the right to review posts, feedback and any user submitted posts to any of our service offerings by any user and to remove any material and content posted that defy our unacceptable use policies, as well as to suspend the user(s).<br/>
                    4.6 Your use of any of the services offered by Peep & Learn shall solely be for your personal and non-commercial use. Any use of the Peep &  Learn service platform other than for personal purposes is strictly prohibited.<br/>
                    4.6.1 In lieu of this, the following restrictions shall apply to your personal and non-commercial use of the our service offerings:<br/>
                    4.6.2 (1) the use of any material or information, including images or photographs, which are made available through our services in any manner that infringes any copyright, trademark, patent, trade secret or other proprietary rights of the owner.<br/>
                    4.6.3 (2) the upload of files that contain viruses, malware, worms, corrupted files, or any other software or programs that may damage and affect the operation and performance of our services and systems.<br/>
                    4.6.4 (3) the restriction or inhibition of any other user from using and enjoying any Peep and Learn service offering.<br/>
                    4.6.5 (4) the use of robots, page-scrapers and any other automated device or program, or any similar or equivalent manual process, to access and acquire or in any other way to reproduce any content structure, documents and information made available by the Peep and Learn service offerings<br/>
                    4.6.6 (6) the download or copy of content in any form thereof – text, video and audio – from any Peep and Learn service, to any person or a directory of users either online or physically<br/>
                    4.6.7 (7) violation of any applicable laws and or regulations<br/>

 
                 </p>
        </div>

















        <div className= "policy_subhead">
                <h2>5.0 Intellectual Property</h2>
                <p>5.1 The content of the Peep and Learn website and its associated service offerings, including but not limited to computer programs, data files, techniques, algorithms, codes, logos, marks, trade secrets, designs, text, graphics, pictures, audio and video files, other data or copyrightable materials or content, and their selection and arrangement, are protected as a collective work or compilation under the Ghanaian copyright laws and other relevant convention and treaties.<br/>
                    5.2 All individual content in any form whatsoever on any of the Peep and Learn service offerings remains the property of Peep &amp; Learn.<br/>
                    5.3 All trademarks and service marks, whether registered or unregistered, as well as product names and company names or logos, displayed or mentioned on the Peep & Learn service platform or any of its offerings, are the sole property of their respective owners. Users may<br/>
                    only use such marks with the prior written consent of the respective owners.

 
                 </p>
        </div>






        <div className= "policy_subhead">
                <h2>6.0 Disclaimer of Warranty</h2>
                <p>6.1 Peep and Learn makes no warranty, implied or expressed, that any part of the users’ engagement with any of the Peep and Learn service offerings will be uninterrupted and error free.<br/>
                    6.2 Peep and Learn, or any of its employees or affiliates shall not accept any responsibility for any damage, loss or injury suffered by a user caused by any failure of performance, error, omission or interruption in any of the service offerings made available by Peep and Learn.<br/>
                    6.3 Peep and Learn disclaim liability for any errors or inaccuracy which may occur or be contained in any of our materials across any of our service offerings.<br/>
                    6.4 Peep and Learn reserves the right to remove, review, edit or delete any content at any time; as applicable to all service offerings made available by Peep and Learn. Peep and Learn shall not be responsible for any opinions or claims resulting from them.<br/>

                 </p>
        </div>
        

        <div className= "policy_subhead">
                <h2>7.0 Miscellaneous</h2>
                <p>7.1 Users continued usage of the Peep and Learn service platform or any of its service offerings, constitutes an acceptance to any changes to these Terms and Conditions.<br/>
                    7.2 Users are solely responsible for remaining knowledgeable, as to any changes Peep and Learn shall effect to these Terms and Conditions.  
                 </p>
        </div>
        


        
        
        
        
        
        </>

    )
}




function CancellationPolicy(){
return(
    <>
    
    <div className= "policy_subhead">
                
                <h2>Cancellation Policy: Peep & Learn</h2>
                <br/>
              
                
               
                <p>The Peep & Learn service platform offers a subscription service that allows parents & guardians access to its curated educational curriculum within defined billing cycles for selected services on Peep and Learn. The following sections highlight the conditions that validate a member’s subscription and conditions necessary for successful cancellation of a membership subscription.</p>

                <h2>1.0	Subscription </h2>
                <p>1.1	The Peep and Learn service platform currently offers a default pay-as-you-go model for access to all of its services; i.e. Home Tuition, E-Library and Online Tuition. This was chosen due to the flexibility it offers parents and guardians of wards on the Peep and Learn platform.<br/>
                    1.2	Successful payments shall provide a month’s access to the requested service. After which access would be revoked after a month. (See Section 3.7 Services Overview under the Terms & Conditions: Peep and Learn)<br/>
                    1.3	A subscription model is currently also available to both E-Library and Home Tuition services, allowing parents and guardians the option to secure in advance, access to these services for their wards. The Peep and Learn subscription model allows for payments past the default monthly billing cycle for all services on the Peep and Learn platform.<br/>
                    1.4	Monthly in-app and SMS notifications would be pushed to parents and guardians of wards on the default monthly billing cycle; as reminders to maintain active accounts on the Peep and Learn service platform.<br/>
                    1.5	In-app and SMS notifications would be pushed to parents and guardians of wards on a subscription model after the duration of the subscription paid for. Accounts shall revert to the monthly billing cycle after expiration of a purchased subscription duration.<br/>
                </p>
        </div>




        <div className= "policy_subhead">
                

                <h2>2.0	Subscription Cancellation </h2>
                <p>2.1	Parents and guardians on a subscription plan can cancel an active subscription via the app, SMS and voice calls to designated service lines for the Peep and Learn service platform.<br/>
                    2.2	Parents and guardians shall be contacted via the cancellation request channel used i.e. app, SMS and voice calls, to confirm the request received. <br/>
                    2.3	All cancellation requests received shall be responded to with a day to three (3) days max of receipt.<br/>
                    2.4	A cancellation request received during a month of an active subscription account would be processed and completed to reflect payment for the current month within which the cancellation request was received.<br/>
                    2.5	The cancellation request would be processed and a balance refunded to the parent or guardian of the account in question, via the payment used for the initial subscription request, minus the subscription fee for the active month where the cancellation request was received.<br/>
                    2.6	For a cancellation request received, a designated support personnel shall be assigned to the requesting parent or guardian to help resolve the issue at hand where possible. If not, the cancellation request is effected at the end of the currently active month.<br/>
                    3.0	Account Activation and Deactivation<br/>
                    3.1	For an effected cancellation requests, a users’ account shall be deactivated and shall only be activated after a successful billing is completed by the user. <br/>
                    3.2	Peep and Learn shall maintain all account details of a user for a duration of one (1) year, following an effected cancellation request. After which all user data shall be inaccessible on the Peep and Learn service platform.<br/>
     
              </p>
        </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>

)
}



export default Legal
