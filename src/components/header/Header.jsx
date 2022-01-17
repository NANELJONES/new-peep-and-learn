import React from "react";
import {Link,NavLink } from "react-router-dom";
import classes from "./header.css";
import DownloadOption from "../../components/downloadOptions/DownloadOptions.jsx"
import {useState} from "react"
import Backdrop from "../Backdrop";
import Modal from "../../components/Modal/Modal.jsx"
import logo from "../../assets/page logo.svg";
import whitelogo from "../../assets/logowhite.svg";
import {useContext} from "react";




function Header(props){
	
	const [showDownloadOptions , setDownloadOptions]= useState(false)
	const [ModalValue, setModalValue] = useState(false)
	

	
	


	function showOption(){
		
		setModalValue(!ModalValue);
		setDownloadOptions(!showDownloadOptions);
	}




    return(
		<div>
		
		
		<nav className="header_nav">
			<div className={classes.image}>
				<a href="/"><img src={ logo}	/></a> 
			</div>
			
			<div className="navlinks">
				<ul className="header_list">
					<li ><NavLink to="/"	className="Nav_Link"	  >Home</NavLink></li>

					<li><NavLink  to="/productDeals"		className="Nav_Link"			>Product Details</NavLink></li>
					
					<li><NavLink  to="/mission"		className= "Nav_Link"				>Mission & Vision</NavLink></li>

					<li><NavLink  to="/peepTribe"		className= "Nav_Link">Peep Tribe</NavLink></li>
					
					<li><NavLink  to="/contact"		className= "Nav_Link"		 >Contact</NavLink></li>
					
				</ul>

				<button style={{
				fontFamily: "Poppins",
				fontStyle: "normal",
				fontWeight: "600",
				fontSize: "11px",
				}}	className={ "header_btn"} onClick={showOption}>Download App</button>

			</div>   
			
	
		</nav>
		
		{showDownloadOptions ? <DownloadOption onClick={showOption } /> : null }
		{ModalValue ? <Modal onClick={showOption}/> : null}


		</div>


    );
}






function Header1(props){
	
	const [showDownloadOptions , setDownloadOptions]= useState(false)
	const [ModalValue, setModalValue] = useState(false)
	const [changes , setChanges] = useState(true); 

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
		
		
		<nav className="header_nav">
			<div className={classes.image}>
				<a href="/"><img src={changes? whitelogo : logo}	/></a> 
			</div>
			
			<div className="navlinks">
				<ul className="header_list">
					<li ><NavLink to="/"	className= "Nav_Link"	  id="home_change" onClick={()=>{setChanges(false)}}>Home</NavLink></li>

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
		{ModalValue ? <Modal onClick={showOption}/> : null}


		</div>


    );
}

























function Header2(props){
	
	const [showDownloadOptions , setDownloadOptions]= useState(false)
	const [ModalValue, setModalValue] = useState(false)
	const [changes , setChanges] = useState(true); 

	const [peepValue , setPeepValue] = useState(true); 
	


	function showOption(){
		
		setModalValue(!ModalValue);
		setDownloadOptions(!showDownloadOptions);
	}


	function changeHome(){
		setChanges(true)
	}


    return(
		<div>
		
		
		<nav className="header_nav">
			<div className={classes.image}>
				<a href="/"><img src={changes? whitelogo : logo}	/></a> 
			</div>
			
			<div className="navlinks">
				<ul className="header_list">
					<li ><NavLink to="/"	className= "Nav_Link"	  id="home_change" onClick={()=>{setChanges(false)}}>HOME</NavLink></li>

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
		{ModalValue ? <Modal onClick={showOption}/> : null}


		</div>


    );
}





































export  {Header,Header1,Header2};