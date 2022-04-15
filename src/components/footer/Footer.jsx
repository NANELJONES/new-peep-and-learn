import React from "react";
import "./footer.css";
import {NavLink,Link,useLocation} from "react-router-dom"
import {useState} from "react"
import {useEffect} from "react"
import react from "react";
import history from "../../history";
import instagram from "../../assets/IG.svg"
import instagram1 from "../../assets/IG1.svg"


function Footer(){
	const location = useLocation();
	

	const [activeValue, setIsActive] =  useState("0")
	useEffect(() => {
		if(location.pathname==="/peepNews"){
			setIsActive("1");
		}
		
		if(location.pathname==="/faq"){
			setIsActive("2");
		}

		if(location.pathname==="/legal"){
			setIsActive("3");
		}


	}, [activeValue])
	
	

    return(
        <div className="footer">
	<ul className="socials">
		<li><a href="">		<i className="fab fa-facebook-f"></i>		</a></li>
		<li><a href="">		<img src={instagram} style={{width:"13px"}}/>		</a></li>
		<li><a href="">		<i className="fab fa-twitter"></i>			</a></li>
		<li><a href="">		<i className="fas fa-podcast"></i>			</a></li>
		<li></li>
		

		<li><Link to="/peepNews"		onClick={()=>{setIsActive("1")}}		 style={activeValue=="1"?{color:"#0B77BE",fontWeight:"600"}:null}	>Peep Blog</Link></li>
	
		<li><Link to="/faq"			onClick={()=>{setIsActive("2")}}		 style={activeValue=="2"?{color:"#0B77BE",fontWeight:"600"}:null}	>FAQ</Link></li>
	
		<li><a href="" style={{color:"gray", fontWeight:"200"}}>Careers</a></li>
	
		<li><Link to="/legal"		onClick={()=>{setIsActive("3")}}		 style={activeValue=="3"?{color:"#0B77BE",fontWeight:"600"}:null}		>Legal</Link></li>
		
	
		
	</ul>
</div>
       
    );
}




function Footer1(){


    return(
		
<div className="footer1">
	<ul className="socials">
		<li><a href="">		<i className="fab fa-facebook-f"></i>		</a></li>
		<li><a href="">		<img src={instagram1} style={{width:"13px"}}/>		</a></li>
		<li><a href="">		<i className="fab fa-twitter"></i>			</a></li>
		<li><a href="">		<i className="fas fa-podcast"></i>			</a></li>
		<li></li>
		
		<li><Link to="/peepNews"		>Peep Blog</Link></li>
		<li><Link to="/faq">FAQ</Link></li>
		<li><a href="">Careers</a></li>
		<li><Link to="/legal">Legal</Link></li>
		
		
	</ul>
</div>

    );
}

export {Footer,Footer1};