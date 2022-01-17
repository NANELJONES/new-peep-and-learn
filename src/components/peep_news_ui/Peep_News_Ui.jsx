import React from 'react'
import {Header} from "../../components/header/Header";
import "./peep_news_ui.css"
import {Footer} from "../../components/footer/Footer";

import news1 from "../../assets/peepnews1a.png";

export const Peep_News_Ui = () => {
    return (
        <div className="news_ui"> 
            <Header/>

            <div className="news_body">
                    <div className='new_picture' >
                        <img src={news1}/>
                        
                    </div>

                    <h1>We have capacity toscale up online learning</h1>
                    <p>
                    Dictum ipsum eu cursus tellus a arcu ut massa. Mi sed semper est bibendum mattis dictumst eget mauris. Pulvinar commodo suspendisse eu elit sit vel, accumsan. Mattis nibh bibendum non nisl suscipit placerat consequat, euismod. In lobortis nisl purus tincidunt orci et id at pellentesque. Augue felis natoque porttitor erat ac sit. Dui dictum mi eu curabitur scelerisque. Eget egestas cursus fringilla egestas pretium neque. Posuere proin orci mauris pharetra, nibh. Odio feugiat condimentum ut massa aliquam. Mauris platea hendrerit tortor egestas et erat quis nec. In tincidunt vulputate tortor eget malesuada id purus sem. Enim id nunc vel metus orci lobortis sapien urna. At amet fames diam congue. Ac ultricies laoreet molestie auctor tempus egestas et, fermentum dolor. Sagittis turpis ultrices quam id in. Amet netus sit libero eu odio consequat nulla. In non in amet magna lectus aenean a. Nisl vel nam mattis fames facilisis at pellentesque maecenas. Amet sed sed ac elementum faucibus quisque magna. Volutpat mattis ac consectetur tellus ridiculus gravida et venenatis. Urna sed consequat cursus lectus ac eget consectetur nascetur iaculis. Consectetur id viverra pharetra nibh. Cum nibh convallis duis amet posuere. Odio diam turpis luctus nibh vulputate. Metus diam ultricies platea at quisque cras. In mi nunc, semper condimentum malesuada mauris ullamcorper a arcu. Risus, arcu tellus vulputate nunc urna. Feugiat id turpis hac dignissim. Nunc sit odio morbi eget leo est. Quis id pellentesque vel vulputate lorem laoreet. Blandit nec, ut lacus, amet egestas egestas. Ut eu vel malesuada proin mauris et. Dignissim mi turpis non eu nisi.
                    </p>


            </div>
            <Footer/>

        </div>
    )
}

export default Peep_News_Ui;