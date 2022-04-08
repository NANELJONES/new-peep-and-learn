import React from "react";
import Grid1 from "../../components/grids/Grid1.jsx";

import img1 from "../../assets/Grid/grid_img_1.png";
import img2 from "../../assets/Grid/grid_img_2.png";
import img3 from "../../assets/Grid/grid_img_3.png";
import img4 from "../../assets/Grid/grid_img_4.png";
import img5 from "../../assets/Grid/grid_img_5.png";
import img6 from "../../assets/Grid/grid_img_6.png";
import img7 from "../../assets/Grid/grid_img_7.png";
import img8 from "../../assets/Grid/grid_img_8.png";
import img9 from "../../assets/Grid/grid_img_9.png";
import img10 from "../../assets/Grid/grid_img_10.png";
import img11 from "../../assets/Grid/grid_img_11.png";
import img12 from "../../assets/Grid/grid_img_12.png";
import img13 from "../../assets/Grid/grid_img_13.png";
import img14 from "../../assets/Grid/grid_img_14.png";
import img15 from "../../assets/Grid/grid_img_15.png";
import img16 from "../../assets/Grid/grid_img_16.png";
import img17 from "../../assets/Grid/grid_img_17.png";
import img18 from "../../assets/Grid/grid_img_18.png";
import img19 from "../../assets/Grid/grid_img_19.png";
import img20 from "../../assets/Grid/grid_img_20.png";
import img21 from "../../assets/Grid/grid_img_21.png";
import img22 from "../../assets/Grid/grid_img_22.png";
import img23 from "../../assets/Grid/grid_img_23.png";
import img24 from "../../assets/Grid/grid_img_24.png";
import img25 from "../../assets/Grid/grid_img_25.png";
function Full_grid_info(){
    return(


        <div style={{
            height:"auto"
        }}>
            <Grid1 image1={img1} image2={img2} image3={img3}  image4={img4} image5={img5}/>
            <Grid1 image1={img6} image2={img7} image3={img8}  image4={img9} image5={img10}/>
            <Grid1 image1={img11} image2={img12} image3={img13}  image4={img14} image5={img15}/>
            <Grid1 image1={img16} image2={img17} image3={img18}  image4={img19} image5={img20}/>
            <Grid1 image1={img21} image2={img22} image3={img23}  image4={img24} image5={img25}/> 
        </div>
            

    );
}

export default Full_grid_info;