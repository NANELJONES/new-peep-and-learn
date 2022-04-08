import React from "react";
import {Link,NavLink } from "react-router-dom";
import classes from "./header.css";
import DownloadOption from "../../components/downloadOptions/DownloadOptions.jsx"
import Modal2 from "../Modal/Modal2";
import {useState} from "react"
import Backdrop from "../Backdrop";
import Modal from "../../components/Modal/Modal.jsx"
import logo from "../../assets/page logo.svg";
import whitelogo from "../../assets/logowhite.svg";
import mobile_menu from "../../assets/mobile_menu.png";
import mobile_menu_white from "../../assets/mobile_menu_white.svg";
import {useContext} from "react";
import instagram from "../../assets/IG.svg"
import instagram1 from "../../assets/IG1.svg"




function Header(props){
	const [MobileValue, showMobileValue] = useState(false);
	
	const [showDownloadOptions , setDownloadOptions]= useState(false)
	const [ModalValue, setModalValue] = useState(false)
	

	
	


	function showOption(){
		
		setModalValue(true);
		setDownloadOptions(!showDownloadOptions);
	}




    return(
		<div>
			
		
		
		<nav className= { MobileValue ? "header_nav animate": "header_nav"}>
			<div className={classes.image}>
				<a href="/"><img className="main_logo" src={logo}	/></a> 
			</div>

			<img className ="mobile_menu" src={mobile_menu} alt="Image Not Found" onClick={()=>{showMobileValue(true)}}/>
			
			<div className= { MobileValue ? "navlinks animate": "navlinks"} onClick={()=>{showMobileValue(false)}} >
					<div className="header_socials_link">
						<li><a href="">		<i className="fab fa-facebook-f"></i>		</a></li>
						<li><a href="">		<img src={instagram} style={{width:"16px",margin:"auto"}}/>		</a></li>
						<li><a href="">		<i className="fab fa-twitter"></i>			</a></li>
						<li><a href="">		<i className="fas fa-podcast"></i>			</a></li>
						<li></li>
					</div>

					<ul className="footer_links">

						<li><Link to="/peepNews"	className="Nav_Link"		 	>Peep News</Link></li>
				
						<li><Link to="/faq"		className="Nav_Link"		 	>FAQ</Link></li>
					
						<li><a href="" >Careers</a></li>
					
						<li><Link to="/legal"		className="Nav_Link"			>Legal</Link></li>
						
						<li><a  href="https://jupeglobal.com/venture-capital/">Jupe Global	</a></li>

					</ul>

					<ul className="header_list">
						<li ><NavLink to="/"	className="Nav_Link"	  >Home</NavLink></li>

						<li><NavLink  to="/productDeals"		className="Nav_Link"			>Product Details</NavLink></li>
						
						<li><NavLink  to="/mission"		className= "Nav_Link"				>Mission & Vision</NavLink></li>

						<li><NavLink  to="/peepTribe"		className= "Nav_Link">Peep Tribe</NavLink></li>
						
						<li><NavLink  to="/contact"		className= "Nav_Link"		 >Contact</NavLink></li>
						
					</ul>

				<button style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight: "600",	fontSize: "11px",	}}	className={ "header_btn"} onClick={showOption}>Download App</button>
			</div>   
			
	
		</nav>
		
		
		{showDownloadOptions ? <DownloadOption onClick={showOption } /> : null }
		{showDownloadOptions ? <Modal onClick={()=>{setDownloadOptions(false)} } /> : null }
		
		
	
		{MobileValue ? <Modal onClick={()=>{showMobileValue(false)}}/> : null}


		</div>


    );
}






function Header1(props){
	
	const [showDownloadOptions , setDownloadOptions]= useState(false)
	const [ModalValue, setModalValue] = useState(false)
	const [changes , setChanges] = useState(true); 
	const [MobileValue, showMobileValue] = useState(false);
	const [peepValue , setPeepValue] = useState(false); 
	


	function showOption(){
		
		setModalValue(!ModalValue);
		setDownloadOptions(!showDownloadOptions);
	}


	function changeHome(){
		setChanges(true)
	}


    return(
		<div>
		
		
		<nav className= { MobileValue ? "header_nav animate": "header_nav"}>
			
			<div className={classes.image}>
				<a href="/"><img className="main_logo" src={changes? whitelogo : logo }	/></a> 
			</div>


			<img className ="mobile_menu" src={mobile_menu_white} alt="Image Not Found" onClick={()=>{showMobileValue(true)}}/>
			
			
			<div className= { MobileValue ? "navlinks animate": "navlinks"} onClick={()=>{showMobileValue(false)}} >
			
				<div className="header_socials_link">
						<li><a href="">		<i className="fab fa-facebook-f"></i>		</a></li>
						<li><a href="">		<img src={instagram} style={{width:"16px",margin:"auto"}}/>		</a></li>
						<li><a href="">		<i className="fab fa-twitter"></i>			</a></li>
						<li><a href="">		<i className="fas fa-podcast"></i>			</a></li>
						<li></li>
				</div>
			
				<ul className="footer_links">

					<li><Link to="/peepNews"	className="Nav_Link"		 	>Peep News</Link></li>

					<li><Link to="/faq"		className="Nav_Link"		 	>FAQ</Link></li>

					<li><a href="" >Careers</a></li>

					<li><Link to="/legal"		className="Nav_Link"			>Legal</Link></li>

					<li><a  href="https://jupeglobal.com/venture-capital/">Jupe Global	</a></li>

				</ul>


			
				<ul className="header_list">
					<li ><NavLink to="/"	className= "Nav_Link"	  id={showMobileValue && MobileValue ?"home_change1":"home_change"} onClick={()=>{setChanges(false)}}>Home</NavLink></li>

					<li><NavLink  to="/productDeals"		className={peepValue ? "Nav_Link_white" : "Nav_Link"}		onClick={()=>{setChanges(false); setPeepValue(false)}}	>Product Details</NavLink></li>
					
					<li><NavLink  to="/mission"		className={peepValue ? "Nav_Link_white" : "Nav_Link"}				onClick={()=>{changeHome(); setPeepValue(false)}}	>Mission & Vision</NavLink></li>

					<li><NavLink  to="/peepTribe"		className={peepValue ? "Nav_Link_white" : "Nav_Link"}	
						style={isActive => ({
						
							color: peepValue ? "white" : null,
							borderBottom:peepValue ? "3px solid white" :null,
							borderBottomRadius:peepValue ? "5px" :null,		
						})}											
					onClick={()=>{setPeepValue(true);setChanges(true) }}	
					>Peep Tribe</NavLink></li>
					
					<li><NavLink  to="/contact"		className={peepValue ? "Nav_Link_white" : "Nav_Link"}			onClick={()=>{changeHome(); setPeepValue(false)}} >Contact</NavLink></li>
					
				</ul>





				<button style={{
				fontFamily: "Poppins",
				fontStyle: "normal",
				fontWeight: "600",
				fontSize: "11px",
				}}	className={peepValue ? "header_btn_white" : "header_btn"} onClick={showOption}>Download App</button>

			</div>   
			
	
		</nav>
		
		{showDownloadOptions ? <DownloadOption onClick={showOption } /> : null }
		{showDownloadOptions ? <Modal onClick={()=>{setDownloadOptions(false)} } /> : null }
		
		
	
		{MobileValue ? <Modal onClick={()=>{showMobileValue(false)}}/> : null}


		</div>


    );
}

























function Header2(props){
	
	const [showDownloadOptions , setDownloadOptions]= useState(false)
	const [ModalValue, setModalValue] = useState(false)

	const [MobileValue, showMobileValue] = useState(false);
	const [peepValue , setPeepValue] = useState(true); 



	function showOption(){
		
		setModalValue(!ModalValue);
		setDownloadOptions(!showDownloadOptions);
	}


	



    return(
		<div>
		
	
		<nav className= { MobileValue ? "header_nav animate": "header_nav"}>
			<div className={classes.image}>
				<a href="/"><img className="main_logo" src={whitelogo}	/></a> 
			</div>

			<img className ="mobile_menu" src={mobile_menu_white} alt="Image Not Found" onClick={()=>{showMobileValue(true)}}/>
		

			
			<div className= { MobileValue ? "navlinks animate": "navlinks"} onClick={()=>{showMobileValue(false)}} >
				<div className="header_socials_link">
						<li><a href="">		<i className="fab fa-facebook-f"></i>		</a></li>
						<li><a href="">		<img src={instagram} style={{width:"16px",margin:"auto"}}/>		</a></li>
						<li><a href="">		<i className="fab fa-twitter"></i>			</a></li>
						<li><a href="">		<i className="fas fa-podcast"></i>			</a></li>
						<li></li>
				</div>
			
				<ul className="footer_links">

					<li><Link to="/peepNews"	className="Nav_Link"		 	>Peep News</Link></li>

					<li><Link to="/faq"		className="Nav_Link"		 	>FAQ</Link></li>

					<li><a href="" >Careers</a></li>

					<li><Link to="/legal"		className="Nav_Link"			>Legal</Link></li>

					<li><a  href="https://jupeglobal.com/venture-capital/">Jupe Global	</a></li>

				</ul>

			
				<ul className="header_list" style={!MobileValue ? {borderRight:"3px solid white"}:{}}>
					<li ><NavLink to="/"	className= "Nav_Link"	  id={!MobileValue ? "home_change":"home_change1"} >Home</NavLink></li>

					<li><NavLink  to="/productDeals"		className={!MobileValue ? "Nav_Link_white" : "Nav_Link"}			>Product Details</NavLink></li>
					
					<li><NavLink  to="/mission"		className={!MobileValue ? "Nav_Link_white" : "Nav_Link"}			>Mission & Vision</NavLink></li>

					<li><NavLink  to="/peepTribe"		className={!MobileValue ? "Nav_Link_white" : "Nav_Link"}	
						style={isActive => ({
						
							color: !MobileValue ? "white" : null,
							borderBottom:!MobileValue ? "3px solid white" :null,
							borderBottomRadius:!MobileValue? "5px" :null,
							

						})} onClick={()=>{setPeepValue(true)}}	
					>Peep Tribe</NavLink></li>
					
					<li><NavLink  to="/contact"		className={	!MobileValue ? "Nav_Link_white" : "Nav_Link"}			 >Contact</NavLink></li>
					
				</ul>
				

				<div className="headerr_btn">

				<button style={{
				fontFamily: "Poppins",
				fontStyle: "normal",
				fontWeight: "600",
				fontSize: "11px",}}	className={!MobileValue  ? "header_btn_white" : "header_btn" } 													onClick={showOption}>Download App</button>
				</div>
			</div>   
	
		</nav>
		
		{showDownloadOptions ? <DownloadOption onClick={showOption } /> : null }
		{ModalValue ? <Modal onClick={showOption}/> : null}
		{MobileValue ? <Modal onClick={()=>{showMobileValue(false)}}/> : null}

		</div>


    );
}




export  {Header,Header1,Header2};