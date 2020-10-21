import React from 'react';
import "./Footer.css"

const Footer = () => {
    return ( 

    <footer className="footer">
        <ul className="footer-list">
            <h1 className="footer-header">الحسابات</h1>
            <li><a href="/#" className="account-link">الأنستجرام</a></li>
            <li><a href="/#" className="account-link">تويتر</a></li>
            <li><a href="/#" className="account-link">يوتيوب</a></li>
        </ul>     
        <ul className="footer-list">
            <h1 className="footer-header">مواقع التمارين</h1>
            <li><a href="/#" className="training-link">1</a></li>
            <li><a href="/#" className="training-link">2</a></li>
            <li><a href="/#" className="training-link">3</a></li>
        </ul>                                                                          
        <ul className="footer-list">
            <h1 className="footer-header">تواصل معنا</h1>
            <li><a href="/#" className="contactus-link">جوان</a></li>
            <li><a href="/#" className="contactus-link">رتاج</a></li>
            <li><a href="/#" className="contactus-link">عزيز</a></li>
        </ul>          
    </footer> 
    
    );
}
 
export default Footer;