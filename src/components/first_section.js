import React from 'react';
import sec1_img from "../images/illustration-working.svg"
const First_section = ()=>(
    <section className="sec1_container">
        <div>
            <div className="sec1_content">    
                <span>More than just shorter links.</span>
                <p>Build your brand recognition and get detailed insights on how your links are performing.</p>
                <button className="btn1">Get started</button>
            </div>
        </div>
        <div>
            <img src={sec1_img} className="img1"/>
        </div>
    </section>

)
export default First_section;