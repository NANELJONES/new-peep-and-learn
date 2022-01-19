import React from "react";
import "./downloadOptions.css" 
import close from "../../components/downloadOptions/close-button.svg"
import logo from "../../components/downloadOptions/low-logo.svg"

import iosImage from "../../components/downloadOptions/iOS button.svg"
import playstoreImage from "../../components/downloadOptions/student playstore button.svg"
import windowsImage from "../../components/downloadOptions/windows button.svg"


import iosImage1 from "../../components/downloadOptions/appstore button(teachers).svg"
import playstoreImage1 from "../../components/downloadOptions/student playstore button(teachers).svg"

import Modal from "../Modal/Modal";
import line from "../../components/downloadOptions/Vector 9.svg"





function DownloadOption(props){
return(

    <div className="download_container" >
       <div className="holder">
           <div className="top">
           
               <h4> Select the platform of Peep & Learn <br/> that's  right for you </h4>
                <img  onClick={props.onClick} className="close_btn" src={close}/ >
            </div>

            <div className="bottom">

                
                    <div className="download_left">
                        <h4>Students</h4>
                        <a href=""><img src={iosImage}/></a>
                        <a href=""><img src={playstoreImage}/></a>
                        <div className="line1"></div>
                        <a href=""><img src={windowsImage}/></a>
                       
                    </div>

                    <div className="download_right">
                        <h4>Parent Or Teacher App</h4>
                        <a href=""><img src={iosImage1}/></a>
                        <a href=""><img src={playstoreImage1}/></a>
                    </div>
                

            </div>

        </div>


    </div>
);

}

export default DownloadOption;