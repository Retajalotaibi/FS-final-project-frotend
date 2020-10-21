import React from 'react';
import imggg from "./Screenshot-2020-10-15-235421.png";
import "./Hero.css"

const Hero = () => {
    return ( 
        <div className="hero-section">
            <div className="top-hero-container">
                <div className="top right">
                    <h2 className="hero-header">لغة الإشارة هي أنبل هدية أعطاها الله للصم</h2>
                    <p className="hero-paragraph">لغتنا لا تختلف</p>
                    <a href="/#" className="signup-button hide">إنشاء حساب</a>
                </div>
                <div className="bottom left">
                    <a href="/#" className="signup-button show">إنشاء حساب</a>
                    <img src={imggg} alt="hero-video" className="hero-video"/>
                </div>
                 
            </div>
        </div>
     );
}
 
export default Hero;