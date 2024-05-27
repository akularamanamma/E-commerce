
import React from 'react'
import about from  './About.module.css'
import { Link } from 'react-router-dom';
import { SiFlipkart } from "react-icons/si";
function About() {
  return (
    <div>
      <section className={about.groups}>
<aside className={about.image}>
  <img src="https://corporate.flipkart.net/assets/images/flipkart-group.jpg" alt="" />
</aside>
<aside className={about.group}>
  <h1>The Flipkart Group</h1>
  <p>The Flipkart Group is one of India's leading digital commerce entities and includes group companies Flipkart, Myntra, Flipkart Wholesale, Flipkart Health+, Cleartrip and ANS Commerce.</p>
  <button>ABOUT US</button>
</aside>
      </section>
   <section className={about.ethics}>
    <h2>Ethics & Compliance</h2>
    <img src="https://corporate.flipkart.net/assets/images/Homepage_ethics.jpg" alt="" />
    <p>Building trust with Integrity. At Flipkart, every decision made is based on ethical and moral principles - no success is meaningful if it’s not achieved the right way.</p>
    <button>KNOW MORE</button>
    </section>
    <section className={about.army}>
      <aside  className={about.flipcart}>
       <h2>Flipkart Culture</h2>
       <p>Flipkart culture is steeped in fostering trust, inclusion, support, recognition and genuine care that enables Flipsters to create, innovate, and bring their best selves to work</p>
       <button>EXPLORE OUR CULTURE</button>
      </aside>
      <aside className={about.flipcarts}>
        <img src="https://corporate.flipkart.net/assets/images/fk-together.png" alt="" />
      </aside>
      </section>
      <section className={about.ligths}>
<aside className={about.ligth}>
  <img src="https://corporate.flipkart.net/assets/images/technology-image.png" alt="" />
</aside>
<aside className={about.techonolgy}>
  <h1>TECHNOLOGY AT FLIPKART</h1>
  <h3>INNOVATION</h3>
  <p>Flipkart technology drives path-breaking, customer-focused innovation that makes high quality products accessible to Indian shoppers, besides making the online shopping experience convenient, intuitive and seamles</p>
  <button>READ MORE</button>
</aside>
      </section>
     <section className={about.order}>
    <h2>Sustainability</h2>
    <img src="https://corporate.flipkart.net/assets/images/WBCSD_inarticle.jpg" alt="" />
    <p>The future of e-commerce is sustainable, equitable and inclusive. As we continue to drive changes across key areas of our operations, our commitment is embedded in our vision to create a positive impact, for the planet and communities.</p>
    <button>KNOW MORE</button>
    </section>
    <section className={about.links}>
      
        <ul>
          <li>
          <Link style={{color:"#027cd5"}}>Flipkart<span><SiFlipkart style={{fontSize:'30px',color:"#027cd5",backgroundColor:'#f6e42e'}}/></span></Link>
          </li>
          <li>
          <Link>Legal</Link>
          </li>
          <li>
          <Link>Media</Link>
          </li>
          <li>
          <Link>Careers</Link>
          </li>
          <li>
          <Link>Flipkart Group</Link>
          </li>
          <li>
            <Link>Flipkart Foundation</Link></li>
        </ul>
     
      <div className={about.email}>
        <p>© 2022 www.flipkart.com. All rights reserved.</p>
      </div>
      </section>     
    </div>
  )
}

export default About
