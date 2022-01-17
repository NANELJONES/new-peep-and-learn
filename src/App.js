import React from "react"

import './App.css';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import DownloadOption from "./components/downloadOptions/DownloadOptions";
import {Header,Header1} from "./components/header/Header";
import {Footer,Footer1} from "./components/footer/Footer";
import Home from "./Pages/home/Home";
import Contact from "./Pages/contact/Contact";
import Mission from "./Pages/mission/Mission";
import PeepTribe from "./Pages/peepTribe/PeepTribe";
import ProductDetails from "./Pages/productDetails/ProductDetails";
import JobSpaces from './Pages/jobSpaces/JobSpaces';
import PeepNews from './Pages/peepNews/PeepNews';
import FAQ from "./Pages/faq/FAQ";
import Legal from "./Pages/legal/Legal";
import Job_Form from "./Pages/job_form/Job_Form";
import  Peep_News_Ui  from "./components/peep_news_ui/Peep_News_Ui";






function App() {
return(
   

    <div style={{
                 position: "relative",

               
                 }}>
           
        
          
           
            <Routes>
                         
                   
               <Route path="/" element={ <Home/>}/>
                <Route path="/productDeals" element={<ProductDetails/>}/>
                 
                <Route path="/mission" element={<Mission/>}/> 

                <Route path="/peepTribe" element={  <PeepTribe/>}/>
                

                <Route path="/contact" element={<Contact/>}/> 
                <Route path="/jobspaces" element={<JobSpaces/>}/> 
                <Route path="/peepNews" element={<PeepNews/>}/> 
                
                <Route path="/faq" element={<FAQ/>}/> 
                <Route path="/legal" element={<Legal/>}/> 
                <Route path="/job_form" element={<Job_Form/>}/> 
                <Route path="/peep_news_ui" element={<Peep_News_Ui/>}/> 


             </Routes>
         
        
           
       
     </div>
     
);
    };
export default App;
