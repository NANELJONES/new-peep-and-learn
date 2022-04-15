import React from 'react'
import {Header} from "../../components/header/Header";
import "./peep_news_ui.css"
import {Footer} from "../../components/footer/Footer";

import news1 from "../../assets/peepnews1a.png";
import bleach from "../../assets/Bleach.jpg";
import { useLocation } from 'react-router-dom';




import new_news1 from "../../assets/peepnews1.svg";
import new_news2 from "../../assets/peepnews2.svg";
import new_news3 from "../../assets/peepnews3.svg";

import new_news4 from "../../assets/peepnews4.svg";
import new_news5 from "../../assets/peepnews5.svg";
import new_news6 from "../../assets/peepnews6.svg";
import new_news7 from "../../assets/peepnews7.svg";
import new_news8 from "../../assets/peepnews8.png";






export const Peep_News_Ui = () => {

    const var_location = useLocation()
   
    return (
        <div className="news_ui"> 
            <Header/>

            <div className="news_body">
                
                    <div className='new_picture' >   

                         {var_location.state =="blog1" ? <><img src={new_news1}/></> : null}
                   
                         {var_location.state =="blog2" ? <><img src={new_news2}/></> : null}
                         {var_location.state =="blog3" ? <><img src={new_news2}/></> : null}
                        
                         {var_location.state =="blog4" ? <><img src={new_news4}/></> : null}
                         {var_location.state =="blog5" ? <><img src={new_news5}/></> : null}
                         {var_location.state =="blog6" ? <><img src={new_news8}/></> : null}
                         {var_location.state =="blog7" ? <><img src={new_news7}/></> : null}
                         {var_location.state =="blog8" ? <><img src={new_news6}/></> : null}
                   
                   
                   
                   
                     </div>

                  
                   {var_location.state =="blog1" ? <>{blog1()}</> : null}
                   {var_location.state =="blog2" ? <>{blog2()}</> : null}
                   {var_location.state =="blog3" ? <>{blog3()}</> : null}
                   {var_location.state =="blog4" ? <>{blog4()}</> : null}
                   {var_location.state =="blog5" ? <>{blog5()}</> : null}
                   {var_location.state =="blog6" ? <>{blog6()}</> : null}
                   {var_location.state =="blog7" ? <>{blog7()}</> : null}
                   {var_location.state =="blog8" ? <>{blog8()}</> : null}



            </div>
            <Footer/>

        </div>
    )





function blog1(){
    return(
        <div className='blog_feed'>
        
    <h1>Address barriers to digital learning</h1>
            <p>

            Today, the world celebrates the International Day of Education. Education is the bedrock of development, with human capital critical to economic and social development.
            Skills is one of the pillars of the Kenya government’s Digital Economy Blueprint launched in 2019. During the Covid-19 pandemic, education has been both significantly disrupted, and significantly transformed.
            We must reflect and pick education for the future to grow digital economy and achieve Vision 2030.
            According to a study by the World Bank, it is estimated that interruptions to school and learning are projected to result in losses valued at $15 trillion.
            This is in terms of affected children’s future earnings and in long-lasting impacts on well-being and life prospects, particularly for the most disadvantaged learners.
            The majority want to see the events of Covid-19 that started in early 2020 behind us. Not only did the pandemic exacerbate inequalities in education and learning across the country but it also laid bare the challenges within the sector, especially in regards to readiness and preparedness.
            The theme for this year’s Day of Education is “Changing Course, Transforming Education”.
            Technology has played a significant role in transforming education, especially growth in online learning.
            According to a study by Unesco, at the beginning of the pandemic it was estimated that, globally, 826 million students were without household computers, 706 million lacked internet at home and another 56 million lacked 3G/4G network coverage.
            </p>



     <h3 style={{fontFamily:"Poppins"}}>Great risk</h3>
            <p>


            Without adequate ICT devices, internet connectivity, education resources, or teacher training, virtual learning fails. This provides a great risk for more students being left behind and increasing inequalities.
            In Kenya, network operators provide 4G networks that cover more than 96 percent of the population and are rapidly expanding last-mile fibre to homes.
            This was particularly timely given the transition to working and studying remotely.
            The Ministry of Education provided remote teaching support using the internet, radio and television while encouraging academic institutions to use teaching materials that create a more accessible online learning environment.
            Many network operators provided free or subsidised access to the government’s Kenya Education Cloud and private sector education websites.
            The Ajira Program through the Ministry of ICT has provided access to learning resources to youth online, allowing tens of thousands of youth to upskill, gain certification and gainful online employment.
            Education technology (EdTech) has thus enabled remote leaning and education. With the penetration of mobile technology in developing markets, EdTech has the potential to give millions of students an opportunity to learn now and in the future.
            Huawei has continued to play a key role in providing learning resources through our multiple digital skills programmes.

            </p>









            <h3>Electricity access</h3>
            <p>

            As we look to the future, it is critical that we continue to ensure online learning becomes the norm, enabling learning anytime and anywhere.
            To do this, we must also address barriers that became painfully clear during the pandemic, such as enhancing access to devices, electricity and digital skills.
            It is also critical to improve the use of technology in schools. It is encouraging that the government plans to connect many more schools.
            As a country, we have made significant strides in ensuring learning never stopped during the pandemic and we have seen the possibilities for what learning in future could look like.
            On the International Day of Education, we must all commit to making it a priority to use technology to improve equity, access and quality of learning for all, so that the country and every Kenyan can reach their full potential to enable the development of digital economy.


            </p>
            <a href="https://www.businessdailyafrica.com/bd/opinion-analysis/letters/address-barriers-to-digital-learning-growth-3691922 ">https://www.businessdailyafrica.com/bd/opinion-analysis/letters/address-barriers-to-digital-learning-growth-3691922 </a>







       </div>
      
    )

    
}

function blog2(){
    return(
        <div className='blog_feed'>
        
    <h1>A global education crisis: How can governments overcome learning losses in 2022?</h1>
            <p>

            For two whole years, the Covid-19 health crisis has disrupted education systems worldwide and forced school closures which have impacted hundreds of millions of children. All of them have suffered learning loss. Some, though, have suffered more than others.
            In developed countries, access at home to computers and cheap and reliable broadband allowed students to make the transition to online learning. School closures were painful, but technology mitigated the impact. In some cases, African leaders were also able to go a long way towards replicating classroom teaching.<br/><br/>
            But for many African children, access to technology is limited. Many also found their schools closed for the longest periods. Schools in Uganda only reopened at the start of 2022 even though schools in Liberia took a shorter break for lock downs.  Recent evidence suggests that learning losses as a result of the pandemic have been even worse than previously estimated. According to World Bank Education, “Learning Poverty” – defined as a child not being able to read or understand a simple text by age 10 – is expected to increase by 70% in the Global South as a result.  
            Such learning loss would be a disaster anywhere. But on a continent where so many children were already being failed – with up to 90 percent of 10-year-olds in sub-Saharan Africa in Learning Poverty even before the pandemic – it is potentially catastrophic.
            <br /><br/>
            Today’s United Nations International Day of Education is taking place under the theme “Changing Course, Transforming Education” – a recognition that the impact of the covid pandemic requires a radical reset of education.
            “In  these  exceptional  times,  business  as  usual  is  no  longer  an  option.  If we are to  transform the future, if we are to change course, we must rethink education” explains Audrey Azoulay, Director General of UNESCO, the UN’s education agency.
            Together with UNESCO and UNICEF, the UN’s children’s agency, The World Bank has mapped out a route to building back education in 2022, in a landmark report addressing the status of education on a global scale. “The State of the Global Education Crisis: A Path to Recovery”  makes clear what must be done.
            It starts by pointing to the lack of data about education. <br/>
            <br/>
            “To tackle the learning crisis, countries must first address the learning data crisis” it says. 
            According to the Global Partnership for Education, just 20 out of 61 GPE partner countries — lower income countries it supports in order to improve learning outcomes — report at least 10 of 12 key education-related outcomes.
            Without such data, it is simply impossible to know how well children are learning. <br/>
            <br/>
            At Bridge Liberia, we know that learning is a science.  The government school program we support is rooted in gathering and analysis of data.
            In Liberia, schools supported by Bridge Liberia are monitored in real-time by a digital and data-driven electronic dashboard that displays the data of all 350 primary schools under the program.
            The World Bank report also calls for a prioritization of “evidence-based strategies, proven techniques for promoting foundational learning” 
            <br/><br/>
            This is precisely the approach being taken by the Liberian Government, which has announced a more than doubling of its LEAP education advancement program, which will now cover 130,000 students in more than 500 primary schools – precisely because in the six years it has been running it has been proven to work. Children under LEAP have gained at least an additional year of learning.  In schools supported by Bridge Liberia, the largest partner with 350 schools and part of NewGlobe, the learning gains are equivalent to 2.5 years.
            The same report also calls for a range of other urgent improvements in education systems to claw back covid learning losses. It points to the need for extended lesson time for children, for instruction to be targeted, so learning is appropriate to each child, and for more use of structured pedagogy – in essence, a more scientific approach to teaching.<br/><br/>
            These approaches are at the core of the learning program at Bridge Liberia supported schools – precisely because they have been shown time and again to improve learning outcomes. Our   structured pedagogical approach is based on decades of research and application. The results speak for themselves. 
            But the World Bank report does not just talk about data and systems. It also focuses on the single most important aspect of learning – teachers – calling on governments to “ensure teachers are well-supported.”  
            <br/><br/>
            At NewGlobe, we believe that improving teachers’ well-being and professional development is essential to education recovery. Our data-driven approach provides teachers, schools leaders and staff with tools to learn and develop their skills. 
            Every teacher receives bespoke training. Prior to the opening of schools for the academic year 2021/2022 Bridge Liberia collaborated with the Ministry of Education  and trained over 1,500 government school teachers.
            <br/>
            <br/>
            Such training is followed by a program of continuous personal development. Learning and development coaches conduct live lesson observations and use them to provide teachers with practical insights on how to make their lessons even more impactful. It is a never-ending cycle of learning about learning.
            The World Bank estimates the learning losses caused by the covid pandemic to be the greatest crisis in global education for a century. There is increasing recognition that to claw back those losses, and ensure that children are truly learning, change in education systems is essential. They must be driven by data, focus on outcome and apply what has been proven to work. 
            By Gbovadeh Gbilia

            </p>


            <a href="https://frontpageafricaonline.com/opinion/a-global-education-crisis-how-can-governments-overcome-learning-losses-in-2022/  ">https://frontpageafricaonline.com/opinion/a-global-education-crisis-how-can-governments-overcome-learning-losses-in-2022/ </a>







       </div>
      
    )

    
}

function blog3(){
    return(
        <div className='blog_feed'>
        
    <h1>Coronavirus Safety Tips for Everyone</h1>
            <p>

            Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
            Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. However, some will become seriously ill and require medical attention.
            <br />
            <br />
            <b>HOW IT SPREADS</b>
            <br />
            The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols.
            You can be infected by breathing in the virus if you are near someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth. The virus spreads more easily indoors and in crowded settings.ran Africa in Learning Poverty even before the pandemic – it is potentially catastrophic.
                        <br /><br/>
          
            </p>

           <p> <b>To prevent the spread of COVID-19:</b></p>
            <p>
           
                Maintain a safe distance from others (at least 1 metre), even if they don’t appear to be sick.
                <br />
                <br />
                Wear a mask in public, especially indoors or when physical distancing is not possible.
                <br />
                <br />
                Choose open, well-ventilated spaces over closed ones. Open a window if indoors.
                <br />
                <br />
                Clean your hands often. Use soap and water, or an alcohol-based hand rub.
                <br />
                <br />
                Get vaccinated when it’s your turn. Follow local guidance about vaccination.
                <br />
                <br />
                Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.
                <br />
                <br />
                Stay home if you feel unwell.
                <br />
                <br />
                If you have a fever, cough and difficulty breathing, seek medical attention. Call in advance so your healthcare provider can direct you to the right health facility. This protects you, and prevents the spread of viruses and other infections.
                Masks
                <br />
                <br />
                Properly fitted masks can help prevent the spread of the virus from the person wearing the mask to others. Masks alone do not protect against COVID-19, and should be combined with physical distancing and hand hygiene. Follow the advice provided by your local health authority.



            </p>


        




       </div>
      
    )

    
}


function blog4(){
    return(
        <div className='blog_feed'>
        
    <h1>Time management and planning: Why online learning has been a game-changer for Gen-Zs</h1>
            <p>

            Johannesburg - Online learning facilities across South Africa have noticed a huge increase in the number of high school learners signing up for online studying. Since the Covid-19 pandemic broke out, learners were forced to follow the online route, but experts say young people live online, and it comes as no surprise that many of them have taken to it the way they did.

            </p>

            
            <p>
            Gabriella Gitari is a bright 19-year-old from Krugersdorp who studies psychology at the University of Cape Town (UCT). She is part of Gen Z and the so-called “lost generation” who began their studies during the pandemic. But Gitari is far from lost – having matriculated from a leading online high school prior to lockdown, she was among the first in the country to embrace online school
                
            </p>

            <p>
            Gitari started out at a regular brick and mortar high school in Krugersdorp, but being a highly motivated student who didn’t enjoy distractions such as being shuffled from class to class or having to do compulsory extra-murals, she switched to Teneo Online School before her Matric year in 2020 to focus on her studies. 
            </p>

            <p>
            “I can decide how much time I need to spend on each subject and how I want to organise my week. You have the freedom to decide if you want to do extra-murals or not. I could focus on doing well, and by Friday, I was done with my tasks so I could enjoy my weekends as well.”
            </p>

            <p>
            “I can decide how much time I need to spend on each subject and how I want to organise my week. You have the freedom to decide if you want to do extra-murals or not. I could focus on doing well, and by Friday, I was done with my tasks so I could enjoy my weekends as well.”
            </p>


            <p>
            Gitari said the switch to online exams was one of the biggest pluses of online school. “I liked taking exams in normal school, but now I can do it without anxiety. You just wake up, prep, and sit at your desk for the exam. At regular schools, you have so many other stress factors, such as getting dressed and getting to school on time
          
            </p>

            <p>
            “You also feel pressure when you see everyone else is done, and I was never done first because I’m a thorough person. Online school is different: it teaches you it’s you versus yourself.” 

            </p>


            <p>

            While the past two years have left many South African students feeling lost and anxious, Gitari said her early start with online schooling has helped her transition effortlessly to a university with a hybrid online/off-line set up, and even taught her a few important life skills. <br/> <br/>
            “Online school makes you more open to learning and relating to others. You become more confident, open, forthcoming, and less judgmental. Everyone is equal. It carries over to your real-life friendships.

            <br/>
            <br/>
            “Online school also teaches you to become self-motivated and to become really good at managing your own time. Being at UCT now, I have noticed some of my friends, who come from regular high schools, struggling with time management because nobody checks up on you anymore – you need self-discipline.”
            <br/>
            <br/>
            Crucially, the live classes and online schooling also gave her the head space to really find herself and work out what she wanted to do with her life.

            <br/>
            <br/>
            “Yes, we did miss out on certain things in the lockdown, but it was also a blessing in disguise because it gave us the chance to figure out our abilities and what we wanted to do with our lives – it gave us direction, and that makes us excited for our 20s and the rest of our lives.”

            <br/>
            <br/>
            Looking at it all through the lens of organisational psychology – a subject she enjoys – Gitari sees how online education is priming her generation for the real future of work in the fourth industrial revolution era.


            <br/>
            <br/>
            Gitari and her peers will build their careers in a time when humans need to work with technology.
      
            <br/>
            <br/>

            “Everything is so digital and connected now. We’ll never fully go back to an off-line economy. We need to be more comfortable with digital systems and technology because it opens up so many opportunities.”


            <br/>
            <br/>

            Director at the Think Digital Academy Vicky Moraitis said the global shift to online learning had enhanced the way young people already live and is “super-flexible”.

            <br/>
            <br/>

            “You can learn and study from anywhere in the world. You have access to the best learning materials and the highest qualified teachers. The learners set their schedules, and they stick to them. They have to if they are to flourish at universities or even in the workplace,” she said.

            <br/>
            <br/>
            Moraitis said online learning is particularly attractive to students with health issues, those who travel often and even those who pursue other interests like athletes, dancers and musicians.

            <br/>
            <br/>
            “In the normal classroom set-up, there is no time to fall behind. You either catch up in your own time, or you just fall behind. 

            <br/>
            <br/>

            With online learning, you can view a lesson as many times as you need to, and the feedback is instant,” she added.



            <br/>
            <br/>

            For those worried about costs, Moraitis said online learning requires as little as two to three gigs of data per month.

            <br/>
            <br/>

            “We have also received outstanding results. We are shaping critical and independent thinkers, which are the life skills young people will need when they study and work.”
            <br/>
            <br/>


            Moraitis said they have had a 15% increase in enrolments from 2021.

            <br/>
            <br/>
            Meanwhile, Teneo said it had seen significant interest in enrolments for 2022. On average, there have been 60 to 100 new enrolments every day since the start of the New Year. The school said it aims to reach 13 000 enrolments by the end of February.


            <br/>
            <br/>

            Valenture Institute CMO, Yazeed Osman, said, with this being the first year of the UCT Online High School, it has by far been their best performing year in terms of total enrolments within the schools of the Valenture Institute portfolio.

            <br/>
            <br/>

            “Over 4,500 learners have already been confirmed to start this year, with over 30% starting in Grade 8, 20% in Grade 9, and even 50% split between Grade 10 and 11. By the end of January, we will enroll a total of 5,000 learners.

            <br/>
            <br/>
            We publicly launched the school in July of 2021, and the early response from the market was so overwhelming that we had to work very hard to scale up our teaching and support teams to accommodate the demand.

            <br/>
            <br/>

            “To date, we've received over 10,000 applications, with 5,000 of them starting in January 2022. While I wouldn't necessarily say these numbers are surprising, we are very pleased with the impact this project has already had on the South African education system,” he said.

            </p>

            <a href="https://www.iol.co.za/saturday-star/news/time-management-and-planning-why-online-learning-has-been-a-game-changer-for-gen-zs-f999a364-ab94-444a-a2a3-eb00c0e45844">https://www.iol.co.za/saturday-star/news/time-management-and-planning-why-online-learning-has-been-a-game-changer-for-gen-zs-f999a364-ab94-444a-a2a3-eb00c0e45844</a>







       </div>
      
    )

    
}

function blog5(){
    return(
        <div className='blog_feed'>
        
    <h1>Can Hybrid Learning Reshape the Educational Landscape? (By Huang Yu)</h1>
         


     <h3 style={{fontFamily:"Poppins"}}>By Huang Yu, Director of the Education and Healthcare Department, Global Government Business Unit, Enterprise Business Group.</h3>
            <p>


            For hundreds of years, students worldwide have been taught almost exclusively in classrooms, typically with a passive, teacher-centric approach. In the past decade, though, this has begun to change: The education (https://bit.ly/3n0DkRO) field has started to digitally transform. And that process has been accelerated in the last year or so, with the COVID-19 pandemic suddenly and drastically disrupting education around the world. In these unprecedented times, educational organizations have been forced to seek solutions to ensure learning continuity for all students — a challenge that has become one of the most discussed topics for educators worldwide. Against this backdrop, an alternative approach has emerged: hybrid learning (https://bit.ly/3H49MuI).   Huawei has continued to play a key role in providing learning resources through our multiple digital skills programmes.

            </p>


            <p>
            Hybrid learning is an educational model that entails some students attending class in-person while others join virtually — from home, a university dormitory, or almost any location where they can access the Internet — in what's become known as an Online-Merge-Offline (OMO) mode. In relation to blended learning (online learning that complements in-person classes) and e-Learning (educational courses that are solely delivered electronically), which have been widely put into practice by educators during past decade, hybrid learning is an evolutionary teaching method. It emphasizes applying digitalized teaching methods to class activities in order to deliver a digital, interactive, and engaging class atmosphere, while ensuring the students attending remotely can enjoy the same learning experience.
            </p>

            <p>
            As a leading ICT solution provider, Huawei has been dedicated to developing new technologies in this field for a decade. And in recent years, the company has launched the Huawei Hybrid Learning Solution. The solution has served hundreds of schools and universities in many countries and regions, with the number of users increasing dramatically during the pandemic period.
            </p>

            <p>
            The Learning Management System (LMS) integrated into Huawei's Hybrid Learning Solution was developed in cooperation with ULearning, a Software as a Service (SaaS) partner certified by HUAWEI CLOUD. ULearning's LMS provides comprehensive and user-friendly features throughout the entire learning process — before, in, and after class.
            </p>

            <p>
            In the before-class lesson planning stage, the LMS allows the teacher to upload and archive e-content in multiple formats (such as Word, PowerPoint, PDF, JPEG, and video files), as well as providing flexibility to wrap up those files into the courseware.
          
            </p>

            <p>
            In class, teachers can use HUAWEI IdeaHub <a>https://bit.ly/3BZe1UA</a> — a productivity tool that bundles videoconferencing and wireless sharing, featuring a 4K soft light screen that's available in 65-inch or 86 -inch models, with interactive touch functions designed for use in education — to log into the LMS and play, with a new pedagogical approach, the prepared digital courseware online for students attending in-person. Meanwhile, students attending remotely can use their laptop or tablet to log into the LMS and watch a split-screen view of both what's being shared on the IdeaHub screen and a live video feed that's collected using cameras and microphones inside the classroom, processed, then streamed to the LMS.
            </p>
            
            <p>
            Importantly, students can also communicate, or even collaboratively interact, with everyone in the physical classroom, empowered by the conferencing system — with Real-Time-Communication (RTC), technology and protocols applied, which has been integrated into the LMS and is supported by HUAWEI CLOUD.
            </p>

            <p>
            As well as those fundamental features, the LMS also provides some helpful tools — like polls, in-class quizzes, attendance checking, and group discussions — making the teaching experience more efficient and interactive, and encouraging engaging knowledge-sharing.

            </p>

            <p>
            When a lesson is over, learning doesn't have to end, with after-class study as important as scheduled classes. Using advanced technologies, students are now able to continue their studies outside of class times — doing exercises, fulfilling assignments, and even taking online tests set by the teacher. The LMS will automatically record and, empowered by AI algorithms, analyze all statistics generated from the whole learning process, outputting analytics reports about the performance of the class, as well as each individual student's knowledge, so that the teacher can evaluate the outcomes and improve teaching methodology accordingly. Because the system knows each student's knowledge weak points, digital nudge technology is applied to disseminate different content to different students, putting adaptive learning into practice.
            </p>



            <p>

            As well as Huawei's strengths as a provider of traditional ICT solutions and its role as a global cloud service provider, Huawei is committed to bringing reliable, effective, secure, cost-effective and Artificial Intelligence (AI) services through technological innovation, together with thousands of ecosystem partners. In this hybrid learning solution, Huawei provides state-of-the-art hardware products, such as IdeaHub; network devices, like its AirEngine Wi-Fi 6 Access Points (APs); as well as critical cloud services.
                
            </p>


            <p>
            To succeed with a hybrid learning class, from a technical perspective, the key elements of a solution should include:

            <br/>
            <br/>
            A feature-rich LMS that must integrate the videoconferencing system.
            <br/>
            <br/>
            A set of digital devices in the classroom that enable the teacher to use digital courseware and interactive teaching techniques.
            <br/>
            <br/>
            A highly reliable cloud service that supports many concurrent users, particularly at peak times.
            <br/>
            <br/>
            A high-speed and stable network connection so that all learners — both online and offline — will be able to access a wealth of knowledge.
            <br/>
            <br/>
            Factors such as these will be decisive for education systems around the world as they explore the best approaches to guaranteeing learning continuity. Having proved its worth during the pandemic, with some schools and universities applying partial opening policies, and its role transforming from supplementary to essential — hybrid learning seems set to reshape the landscape of education worldwide.


            </p>

            <a href="https://www.pulse.com.gh/apo/can-hybrid-learning-reshape-the-educational-landscape-by-huang-yu/1nps1sp"> Read More Here </a>







       </div>
      
    )

    
}

function blog6(){
    return(
        <div className='blog_feed'>
        
    <h1>Why education is one of the most powerful weapons to transform society</h1>
            <p> <i>

            Education is one of the most powerful weapons -- it can change people, communities, entire nations and the future of humanitycording to a study by Unesco, at the beginning of the pandemic it was estimated that, globally, 826 million students were without household computers, 706 million lacked internet at home and another 56 million lacked 3G/4G network coverage.
           
            </i></p>

            <p>
            Nelson Mandela has rightly said that 'Education is the most powerful weapon which you can use to change the world.' Yes, education is the key to eliminate all problems. If you want to grow and be successful then you need to be educated!

            Education is an essential need!
            <br/>
            <br/>

            Education provides you the tools to improve the quality of life in modern society both economically and sociologically. Education is power and no one can ever deny this fact. Education has the power to change your entire life. Starting from promoting gender equality to reducing poverty, it is one gesture in which you receive information and give systematic instructions in return.
            <br/>
            <br/>

            So in order to be successful, you need education
            <br/>
            <br/>

                
            </p>



     <h3 style={{fontFamily:"Poppins"}}>How does education change you?</h3>
            <p>

            How does education change you?Huawei has continued to play a key role in providing learning resources through our multiple digital skills programmes.

            </p>









            <h3>How does education change society?</h3>
            <p>
            Society is made of up different kinds of people and the mindset of each of them differs a lot. An educated one can guide to the right path in a better manner, he/she can come up with a variety of ideas which may be related to political participation, social equality or environmental sustainability. So it is pretty much clear that the power of knowledge can help you walk in the right path, take the right decision and can help you in bringing the change that you always wanted
            </p>

            <h3>Education helps you solve problems</h3>
            <p>
            Every problem comes with a solution but sometimes problem-solving can be difficult and tedious. An educated person will always try to find the answer to the questions 'what?', 'why?' and 'how?'. This very attitude will help him/her solve problems.
            </p>

            <h3>Education helps you fight poverty</h3>
            <p>
            Poverty and education are very much related to each other because people living in poverty may stop going to school so they can work, which leaves them without literacy and numeracy skills, which anyhow effects their careers. Hence, education increases individual earnings and put an end to your lifelong sufferings.
            </p>


            <h3>Education gives you courage to speak against injustice</h3>
            <p>
            The most common way people give up their power is by thinking they don’t have any said Alice Walker.
            <br/><br/>
            Educated people know what is right and what is wrong. So if something is going wrong anywhere, then an educated person has the courage to raise voice against the injustice. Truly educated people will not refuse to stand up against injustice.
            <br/><br/>
            Even Union HRD Minister Ramesh Pokhriyal 'Nishank' in the 57th convocation of IIT said that education is a 'weapon' which can transform the lives of students, their families and society.
            <br/><br/>
            Hence it is rightly said that education can change people, communities, entire nations, and even the future of humanity





            </p>



            <a href="https://www.indiatoday.in/education-today/featurephilia/story/why-education-is-one-of-the-most-powerful-weapons-to-transform-society-1579790-2019-09-02 ">Read More Here</a>







       </div>
      
    )

    
}

function blog7(){
    return(
        <div className='blog_feed'>
        
    <h1>The African Edtech solutions empowering tomorrow’s future leaders</h1>
            <p>

            The COVID-19 crisis has irrevocably changed education. At the outset of the pandemic, 180+ countries mandated temporary school closures, leaving about 1.6 billion children and youth out of school and affecting approximately 85% of children world-wide
            <br /><br/>
            All countries were able to deploy remote learning technologies using a combination of TV, radio, online and mobile platforms. Currently, most countries are working towards re-opening schools, but there will still be intermittent closures and use of hybrid learning. <br/>
            <br/>
            However, school closures and limited access to remote learning means that learning poverty is likely to worsen from 53% to 63% especially in low-income countries. <br/>
            <br/>
            “This begs the question: how can technology help today’s children and the adults of tomorrow?” says Jo Griffiths Co-founder of the Global Innovation Initiative Group (GIIG), the exclusive rights holder of the Global Startup Awards (GSA) Africa – the first and only continent-wide Sustainable Development Goal-aligned tech innovation competition
            <br/><br/>
            iSchool, Northern Africa Regional Winner has created an online education platform for 6-18 year olds, with over 8,000 graduates and 100+ coding coaches. The platform has recently become both STEM and AI accredited and has been voted in the Top 10 EdTech startups in the world
            <br/><br/>
            Mohamed Algawish, Founder of iSchool, states: “From day one we at iSchool believe in the potential of our nation’s young minds, that is why we are working day and night carrying a mission to empower today’s generation so that they become tomorrow’s technology leaders.”
            <br/>
            <br/>
            Hanae Bezad Founder / President of Douar Tech, an inclusive tech hub and platform that contributes raising the resilience of vulnerable youth, especially rural women in Morocco and other countries in Africa, shares that her hope is for parents to understand the potential of technology to empower their children
            
            <br/>
            <br/>
            “A lot of kids have to walk many kilometres just to go to school. I’ve also been in areas where I’ve had discussions with parents who have decided to take their daughters out of school because they are now hitting puberty and they don’t want them to risk getting pregnant or to have their period at school as there’s no infrastructure for them.
            <br/>
            <br/>

            Preventing their children from attending school is basically killing any chance for them to thrive in the 21st century. Technology has to solve this and empower people with knowledge to become the best version of themselves
            
            <br/>
            <br/>
            Douar Tech is the Northern Africa Regional Winner of GSA Africa’s ESG Tech category and provides vulnerable youth with innovative entrepreneurship and web development skills.
            <br/>
            <br/>
            George Akilimali, CEO and Founder of Tanzanian digital learning content development agency Smartcore, one of the GSA Africa country winners, shares that in Sub Saharan Africa there are more than 65 million students who are out of school.
            
            <br/>
            <br/>

            “That number is terrifying. Additionally, for those who are lucky enough to be in school, the quality of education is unfortunately low. That is why we have the challenge of unemployment; people lack skills because of the quality of education itself. These are the biggest problems in education in Africa today.”

            <br/>
            <br/>

            Another GSA Africa country winner, Ibrahim Oredola, Founder of SKillNG, a skill acquisition accelerator startup based in Nigeria, adds that while students do learn some skills, they aren’t equipped with the right skills that are demanded globally.
            <br/>
            <br/>
            “Unemployment is one of the greatest problems in Africa, especially in Nigeria, where we have over 80% of the workforce either unemployed or underemployed because there is a skill mismatch and skill gap. In fact, recent research has found that 90% of job applicants are not qualified for the jobs they apply for. With tech being the backbone of every single industry nowadays, we need people to be tech-empowered.”
            <br/>
            <br/>
            Looking to the future, Mustafa Abd Ellatif, Co-Founder and CEO of EYouth, the Egyptian country winner, believes that education will be completely online – especially universities. “Not only will it be cheaper, but this will also enable students to attend any university in the world to get the learning they desire.”
            <br/>
            <br/>
            Griffiths concludes by saying:” To have a chance of impacting SDG Goal 4 – providing access to quality education on the continent, we need to first find the solutions that are solving educational challenges on the ground. Through the GSA Africa 2021 competition, Edtech constituted 19% of the 7500+ nominations.
            <br/>
            <br/>
            Our aim is to give visibility to these solutions and connect them to the right networks to help ensure inclusive and equitable quality education, promoting lifelong learning opportunities for all.”
            <br/>
            <br/>
            By Isaac Kaledzi


            

            
            
            </p>


            <a href="https://africafeeds.com/2022/01/24/the-african-edtech-solutions-empowering-tomorrows-future-leaders/  ">Read More Here </a>







       </div>
      
    )

    
}

function blog8(){
    return(
        <div className='blog_feed'>
        
    <h1>AFRICAN WOMEN AND GIRLS: Leading a continent</h1>
            <h3>The art of the pivot: African women as critical problem solvers in the 21st century</h3>
            <p>

            While rebuilding a country previously engulfed in civil war for over 14 years, my administration oversaw, then, one of the deadliest health crises of the 21st century. I, Africa’s first democratically elected woman president and Liberia’s first elected president of the post-conflict period, had to pivot quickly in both attitude and action, as a means of responding to the Ebola outbreak of 2014. The outbreak posed a devastating threat to Liberia’s people and to the gains we had made in recovery and development. Rather than falter, we leaned into the complex challenges the outbreak posed, crafting and embarking upon an approach that embraced the strategies called for by community health workers and ordinary people fighting to save their loved ones. During this period, we lost many lives but averted a national crisis and found an inclusive and sustainable path of hope. In most African countries, strengthening the national health structure requires investing in and prioritizing community health workers and systems. Local community health workers are crucial in times of crisis because of their proximity to those most impacted. Utilizing community leadership ensures communities feel empowered and share in the responsibility, creating genuinely inclusive and responsive approaches. Liberia’s early success in addressing the COVID-19 pandemic relied on the same community health workers and leaders from the Ebola crisis. They were central in the dissemination of reliable information, coordination efforts across the country, building partnerships both internally and internationally, and leading their communities.
            <br />
            <br />
            Women’s leadership in Africa is not a new phenomenon. Throughout Africa’s history, women were critical problem solvers, leading militaries during the pre-colonial period, freedom fighters during independence movements, transitional leaders during post-conflict periods, and leaders during some of the worst economic, political, and health crises of the 21st century. Moving forward, Africa must harness women’s knowledge, skills, and talents at all levels of the problem-solving process, as a means of reclaiming the continent’s future.
            <br />
            <br />
            
            The pivot is an art form that women leaders have perfected globally, making them critical problem solvers that are more responsive and effective during times of crisis. In public leadership, effective pivoters engage in critical reflection and decisive decision making as well as take on—simultaneously and seriously—a diversity of voices throughout the problem-solving process. Though pivoting requires a shift in direction or approach, the ultimate vision remains the same
            <br />
            <br />
            While shifting strategies during the COVID-19 pandemic, women leaders continued to prioritize lives and livelihoods. Though not surprising to many of us in Africa, as my leadership journey highlights, women continue to be vital in crafting complex responses to complicated problems. Across the continent, women were/are at the frontlines as medical and health experts and community healthcare workers
            <br />
            <br />
            Despite their leadership, African women remain underrepresented in official roles
            <br />
            <br />
            Though women’s leadership in certain countries has come under renewed focus, globally, women still only occupy 25.7 percent of the available parliamentary positions, 7.2 percent of head-of-state positions, 6.2 percent of head-of-government positions, and 21.3 percent of cabinet positions. In Africa, women occupy about 24 percent of parliamentary seats, significantly close to the global average. Unfortunately, only two sub regions, Southern Africa and East Africa, largely account for Africa’s high rates of women’s representation, boasting 31 percent and 32.4 percent women’s parliamentary representation, respectively. The other three sub regions fall over 10 percentage points behind. In short, many African countries have come a long way, but the majority still fall far behind even the 1995 Beijing Platform for Action’s diffident 30 percent and the African Union Agenda 2063 goal of 50 percent women’s representation.
            <br />
            <br />
            Notwithstanding the data, Africa is still a global leader in women’s public leadership. Five African countries are in the top 20 nations for women’s parliamentary representation, and, at 60 percent, Rwanda still leads the world in terms of women in parliament. Four African countries, each with over 45 percent women’s representation in cabinets, are among the top 20 countries globally. Moreover, African women’s growing presence as public leaders is not confined to national institutions, and African women now hold leadership positions in the World Trade Organization, African Union, and United Nations, among others. More importantly, they directly contribute to and conduct regional and international efforts that address Africa’s most pressing issues today: peace and security, gender justice, climate change, and technology and economic development.
            <br />
            <br />
            Pressing concerns of the 21st century:

            </p>



     <h5 style={{fontFamily:"Poppins"}}>A. Peace and security</h5>
            <p>
            Peace and security are of renewed importance in Africa, given the rise of militarism, extremism, assaults on democratic processes, and the global withdrawal from transnational cooperation and coordination. In fact, in 2021 alone, West Africa experienced three military coups. Importantly, history has shown us that often increased militarism leads to increased marginalization, particularly for women. Furthermore, the work of African women scholars has repeatedly called for us to conceive of security outside of simply borders and imagine the security of the individual. In this sense, we might raise essential questions about what security looks like for African women and how existing institutions can better involve the voices of women. Madame Bineta Diop, the African Union Special Envoy on Women, Peace, and Security (WPS) is working to raise and answer these questions. Under her leadership, the AU developed the Continental Results Framework for measuring and mapping the implementation of the WPS agenda. In addressing issues such as gender-based violence, economic insecurity, poverty, and education, we not only secure lives but can potentially better secure the state.
            </p>


    <h5 style={{fontFamily:"Poppins"}}>B. Gender justice</h5>
            <p>
            Intrinsically tied to peace and security issues is gender justice. The language of gender justice activists in Africa is fundamental. They prioritize the development of a world where men and women are equals and strive to achieve a world that is also equitable. In a fair world, frameworks, resources, and laws are implemented and provided to ensure that women and girls have access to the necessary financial resources and tools that will close the gaps created by gender inequality and marginalization, directly transforming communities as a whole. The recent activism of Sudanese women in 2019 and 2020, which ushered in a new leadership, sheds light on the power of gender activism today in Africa. Their demands for reform extended far beyond equality, ensuring that the transitional government and constitution guaranteed 40 percent women’s representation, expanded women’s rights to travel alone, banned execution of children, and outlawed female genital cutting. Of course, we remain watchful as women have still not been afforded their rightful leadership places in Sudan.
           </p>



    <h5 style={{fontFamily:"Poppins"}}>C. Climate change</h5>
    <p>
        Our ability to transform communities will depend on responding to one of the most pressing global issues: climate change. As some parts of Africa become hotter and drier, the agricultural sector and, in turn, economic livelihoods are directly affected. In Africa, agriculture, a climate-sensitive industry, provides for 70 percent of Africans, 30 percent of the continent’s GDP, 50 percent of the continent’s export value, and 65 percent of the continent’s labor force. African women account for a large share of the agricultural labor force, and they are far more likely to work in vulnerable employment, increasing their risk of livelihood insecurity. To equitably address climate change, we must craft multi-stakeholder and multi-sectoral approaches that take women and girls’ distinct vulnerabilities, capacities, and leadership at the community and national levels seriously. We know that women lead the way in crafting equitable and sustainable solutions to climate change, transforming lives and livelihoods, increasing climate resistance, and improving overall well-being. African women leaders are already taking the lead in responding to climate change. For instance, Mayor Yvonne Aki-Sawyerr of Sierra Leone launched a three-year plan to develop Freetown that addresses environmental degradation, and Hindou Oumarou Ibrahim of Chad works to ensure that climate change adaptation plans include the voices of indigenous communities.
    </p>


    <h5 style={{fontFamily:"Poppins"}}>D. Technology and economic growth</h5>
    <p>
        Climate change’s economic implications raise essential questions about how African countries might strengthen their economies in an age dominated by technology. By expanding access to digital technologies, African nations will empower the poor with access to information, job opportunities, and services that will improve their lives. With a growing youth population and an ever-expanding workforce, investments in technology and technological infrastructure lay the foundations for economic growth. Such investments and developments could improve access to inclusive financing, modernize the agricultural sector, and improve health care systems. Technology poses new opportunities and possibilities for women’s inclusion and advancement. For example, in the agricultural sector, African women are utilizing technology and technological innovations to improve agricultural process and, in turn, improve livelihoods. Women and girls cannot and should not be left behind.
    </p>









         
            <a href="https://www.brookings.edu/essay/african-women-and-girls-leading-a-continent/  ">Read More </a>







       </div>
      
    )

    
}






    
}

export default Peep_News_Ui;