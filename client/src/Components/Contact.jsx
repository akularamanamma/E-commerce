import React from 'react'
import contact from './Contact.module.css';
import { TfiLocationPin } from "react-icons/tfi";
import { AiOutlineMail } from "react-icons/ai";
import { PiPhoneCallBold } from "react-icons/pi";
function Contact() {
  return (
    <div>
                 <div className={contact.map_block}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3612811034395!2d-74.00871262546876!3d40.71006263773651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1702577746114!5m2!1sen!2sus" width="100%" height="500px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" alt='' ></iframe>
            </div>

<div className={contact.info_block}>
                <article className={contact.box}>
                    <aside className={contact.circle}>
                    <TfiLocationPin />
                    </aside>
                    <ul>
                        <li style={{fontSize:'21px'}}><b>Location:</b></li>
                        <li>A108 Adam Street</li>
                        <li>New York, NY 535022</li>
                    </ul>
                </article>
    
                <article className={contact.box}>
                    <aside className={contact.circle}>
                    <AiOutlineMail />
                    </aside>
                    <ul>
                        <li style={{fontSize:'21px'}}><b>Email:</b></li>
                        <li>info@example.com</li>
                        <li>contact@example.com</li>
                    </ul>
                </article>
    
                <article className={contact.box}>
                    <aside className={contact.circle}>
                    <PiPhoneCallBold /> 
                    </aside>
                    <ul>
                        <li style={{fontSize:'21px'}}><b>Call:</b></li>
                        <li>+1 5589 55488 51</li>
                        <li>+1 5589 22475 14</li>
                    </ul>
                </article>
    
            </div>
    
   <div className={contact.table_box}>
    <form>
                <input type="text"  fontSize="20px" placeholder="Your Name"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="email"  placeholder="Your Email"/><br/><br/>
                <input type="text"  placeholder="Subject" className={contact.sub}/><br/><br/>
                <textarea placeholder="Message"></textarea><br/><br/>
                <button>Send Message</button>
            </form>
  
        </div> 
        <footer>
            <div class={contact.footer_company}>
                <h2>COMPANY</h2>
                <p>
                    A108 Adam Street <br/>
                    New York, NY 535022 <br/>
                    United States
                </p>
                <p>
                    Phone: +1 5589 55488 55 <br/>
                    Email: info@example.com
                </p>
            </div>
            <div class={contact.footer_useful_links}>
                <h3>Useful Links</h3>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div class={contact.footer_our_services}>
                <h3>Our Sevices</h3>
                <ul>
                    <li>Web Design</li>
                    <li>Web Development</li>
                    <li>Product Managment</li>
                    <li>Marketing</li>
                    <li>Graphic Design</li>
                </ul>
            </div>
            <div class={contact.footer_form}>
                <h3>Join Our Newsletter</h3>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <div class={contact.subscribe}>
                    <input type="text"/>
                    <button type="submit">Subscribe</button>
                </div>
            </div>
        </footer>

    </div>
  )
}

export default Contact