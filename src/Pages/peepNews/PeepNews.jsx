import React from 'react'
import styles from"./peepNews.module.css"
import {NavLink,Link} from "react-router-dom";
import {Footer} from "../../components/footer/Footer";
import {Header} from "../../components/header/Header";

import news1 from "../../assets/peepnews1.svg";
import news2 from "../../assets/peepnews2.svg";
import news3 from "../../assets/peepnews3.svg";

import news4 from "../../assets/peepnews4.svg";
import news5 from "../../assets/peepnews5.svg";

import news6 from "../../assets/peepnews6.svg";
import news7 from "../../assets/peepnews7.svg";
import news8 from "../../assets/peepnews8.png";


const PeepNews = () => {
    return (
        <div className={styles.peepNews_container}>
            <Header />


            <div className={styles.top_header}>
                <h1>Peep Blog</h1>
                <h6>The latest and best educational news & articles handpicked by our editorial office.</h6>
            </div>

            

            <div className={styles.total_news_holder}>


                <div className={styles.news}>

                   <div className={styles.long_news}        style={{background: ` url(${news1})`,   backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat",}}> 
                      <p>Address barriers <br/> to digital learning <br/> growth</p>
                   </div>
                
                   <div className={styles.short_news}        style={{backgroundImage:`url(${news2})`,backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                         <p className={ styles.down_text} >A global education crisis : How can governments overcome learning losses in 2022?</p>
                   </div>

                   <div className={styles.short_news}         style={{backgroundImage:`url(${news3})`,backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                          <p>Coronavirus Safety Tips for Everyone</p>
                   </div>
                
                
                
                
                
                </div>  


                <div className={styles.news}>

                    <div className={styles.long_news}        style={{backgroundImage:`url(${news4})`,backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}> 
                          <p className={ styles.down_text}>Time management and planning: Why online learning has been a game-changer for Gen-Zs</p>
                    </div>

                    <div className={styles.long_news}        style={{backgroundImage:`url(${news5})`,backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}> 
                    <p className={ styles.down_text}>Can Hybrid Learning Reshape the Educational Landscape? (By Huang Yu)</p>
                    </div>








                </div> 



                <div className={styles.news}>

                   <div className={styles.long_news}        style={{background: `linear-gradient(to top, black 3%, rgba(0, 0, 0, 0)), url(${news8})`,backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}> 
                      <p className={ styles.down_text}>Why education is one of the most powerful weapons to transform society</p>
                   </div>
                
                   <div className={styles.short_news}        style={{background: `linear-gradient(to top, black 3%, rgba(0, 0, 0, 0)), url(${news7})`,backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                         <p className={ styles.down_text}>The African Edtech solutions empowering tomorrows future leaders</p>
                   </div>

                   <div className={styles.short_news}         style={{backgroundImage:`url(${news6})`,backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                          <p style={{color:"black"}}>The art of the pivot: African women as critical problem solvers in the 21st century</p>
                   </div>
                
                
                
                
                
                </div>  




           

           </div>












        <Footer/>
   
                  
        </div>
    )
}

export default PeepNews
