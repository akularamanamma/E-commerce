import React from 'react'
import home from './Home.module.css'
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IoBagOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosSync } from "react-icons/io";
import { IoMove } from "react-icons/io5";
function Home() {
  return (
    <div>
        <section className={home.heading}>
            <main className={home.content}>
                <h2>Nike New Collection!</h2>
                <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incidient ut labore et dolor magna aliqua.Ut enim ad minim veniam,quis nosstrud execitation  </p>
                <button>+</button><span style={{fontSize:'13px', padding:'20px'}}>ADD TO BAG</span>
            </main>
            <main className={home.image}>
                <img src='https://preview.colorlib.com/theme/karma/img/banner/banner-img.png' alt='' height={400} width={700}/>
            </main>
        </section>
        <section className={home.logos}>
            <div className={home.logo}>
                <div className={home.logo1}>
                    <img src="https://preview.colorlib.com/theme/karma/img/features/f-icon1.png" alt="" />
                    <h2>Free Delivery</h2>
                    <h3>Free Shipping on all order</h3>
                </div>
                <div className={home.logo2}>
                    <img src="https://preview.colorlib.com/theme/karma/img/features/f-icon2.png" alt="" />
                    <h2>Return Policy</h2>
                    <h3>Free Shipping on all order</h3>
                </div>
                <div className={home.logo3}>
                    <img src="https://preview.colorlib.com/theme/karma/img/features/f-icon3.png" alt="" />
                    <h2>24/7 Support</h2>
                    <h3>Free Shipping on all order</h3>
                </div>
                <div className={home.logo4}>
                    <img src="https://preview.colorlib.com/theme/karma/img/features/f-icon4.png" alt="" />
                    <h2>Secure Payment</h2>
                    <h3>Free Shipping on all order</h3>
                </div>
            </div>
        </section>

    <section className={home.images}>
        <div className={home.imag}>
            <div className={home.image1}>
               <img src="https://preview.colorlib.com/theme/karma/img/category/c1.jpg" alt="" height={230} width={500}/>
               <main className={home.sports}>
            <h5>SNEAKERS FOR SPORTS </h5>
          </main>
            </div>
          <div className={home.image2}>
               <img src="https://preview.colorlib.com/theme/karma/img/category/c2.jpg" alt="" height={230} width={250}/>
               <main className={home.shoes}>
            <h5>SNEAKERS FOR SPORTS </h5>
          </main>
          </div>
          <div className={home.image3}>
               <img src="https://preview.colorlib.com/theme/karma/img/category/c3.jpg" alt="" height={230} width={250}/>
               <main className={home.legs}>
            <h5>PRODUCT FOR COUPLE </h5>
          </main>
          </div>
          <div className={home.image4}>
               <img src="https://preview.colorlib.com/theme/karma/img/category/c4.jpg" alt="" height={230} width={500}/>
               <main className={home.boots}>
            <h5>SNEAKERS FOR SPORTS </h5>
          </main>
          </div>
        </div>
        <main className={home.watch}>
        <div className={home.watch_image}>
            <img src="https://preview.colorlib.com/theme/karma/img/category/c5.jpg" alt="" height={480} width={350}/>
            <main className={home.wathes}>
            <h5>SNEAKERS FOR SPORTS </h5>
          </main>
          </div>
        </main>
    </section>
    <article className={home.arrows}>
<div className={home.arrow}>
    <h2><span style={{paddingRight:'15px',color:'#969696',fontSize:'50px'}}><HiOutlineArrowLongLeft/></span>Latest Products<span style={{paddingLeft:'15px',color:'#969696', fontSize:'50px'}}><HiOutlineArrowLongRight /></span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit,sed to eiusmod tempor incidudunt ut labore et dolore magna liqua.
        </p>
    </div>
   </article>
   <section className={home.products}>
    <div className={home.product}>
        <aside className={home.heart}>
            <img src="https://preview.colorlib.com/theme/karma/img/product/p1.jpg" alt="" />
            <h2>ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON </h2>
            <p>$150.00<span style={{color:'#cecece'}}>$210.00</span></p>
            <div className={home.symbols}>
                <div className={home.bag}>
                <p><IoBagOutline /></p>
                <p><FaRegHeart /></p>
                <p><IoIosSync /></p>
                <p><IoMove /></p>
            </div>
            </div>
        </aside>
        <aside className={home.heart}>
            <img src="https://preview.colorlib.com/theme/karma/img/product/p2.jpg" alt="" />
            <h2>ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON </h2>
            <p>$150.00<span style={{color:'#cecece'}}>$210.00</span></p>
            <div className={home.symbols}>
                <div className={home.bag}>
                <p><IoBagOutline /></p>
                <p><FaRegHeart /></p>
                <p><IoIosSync /></p>
                <p><IoMove /></p>
            </div>
            </div>
        </aside>
        <aside className={home.heart}>
            <img src="https://preview.colorlib.com/theme/karma/img/product/p3.jpg" alt="" />
            <h2>ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON </h2>
            <p>$150.00<span style={{color:'#cecece'}}>$210.00</span></p>
            <div className={home.symbols}>
                <div className={home.bag}>
                <p><IoBagOutline /></p>
                <p><FaRegHeart /></p>
                <p><IoIosSync /></p>
                <p><IoMove /></p>
            </div>
            </div>
        </aside>
        <aside className={home.heart}>
            <img src="https://preview.colorlib.com/theme/karma/img/product/p4.jpg" alt="" />
            <h2>ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON </h2>
            <p>$150.00<span style={{color:'#cecece'}}>$210.00</span></p>
            <div className={home.symbols}>
                <div className={home.bag}>
                <p><IoBagOutline /></p>
                <p><FaRegHeart /></p>
                <p><IoIosSync /></p>
                <p><IoMove /></p>
            </div>
            </div>
        </aside>
        <aside className={home.heart}>
            <img src="https://preview.colorlib.com/theme/karma/img/product/p5.jpg" alt="" />
            <h2>ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON </h2>
            <p>$150.00<span style={{color:'#cecece'}}>$210.00</span></p>
            <div className={home.symbols}>
                <div className={home.bag}>
                <p><IoBagOutline /></p>
                <p><FaRegHeart /></p>
                <p><IoIosSync /></p>
                <p><IoMove /></p>
            </div>
            </div>
        </aside>
        <aside className={home.heart}>
            <img src="https://preview.colorlib.com/theme/karma/img/product/p6.jpg" alt="" />
            <h2>ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON </h2>
            <p>$150.00<span style={{color:'#cecece'}}>$210.00</span></p>
            <div className={home.symbols}>
                <div className={home.bag}>
                <p><IoBagOutline /></p>
                <p><FaRegHeart /></p>
                <p><IoIosSync /></p>
                <p><IoMove /></p>
            </div>
            </div>
        </aside>
        <aside className={home.heart}>
            <img src="https://preview.colorlib.com/theme/karma/img/product/p7.jpg" alt="" />
            <h2>ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON </h2>
            <p>$150.00<span style={{color:'#cecece'}}>$210.00</span></p>
            <div className={home.symbols}>
                <div className={home.bag}>
                <p><IoBagOutline /></p>
                <p><FaRegHeart /></p>
                <p><IoIosSync /></p>
                <p><IoMove /></p>
            </div>
            </div>
        </aside>
        <aside className={home.heart}>
            <img src="https://preview.colorlib.com/theme/karma/img/product/p8.jpg" alt="" />
            <h2>ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON </h2>
            <p>$150.00<span style={{color:'#cecece'}}>$210.00</span></p>
            <div className={home.symbols}>
                <div className={home.bag}>
                <p><IoBagOutline /></p>
                <p><FaRegHeart /></p>
                <p><IoIosSync /></p>
                <p><IoMove /></p>
            </div>
            </div>
        </aside>
    </div>
   </section>

   <article className={home.weeks}>
<div className={home.deals}>
    <h2>Deals of the Week</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit,sed to eiusmod tempor incidudunt ut labore et dolore magna aliqua.
        </p>
    </div>
   </article>
   <section className={home.detalis}>
    <div className={home.detail}>
        <main className={home.heeals}>
            <aside className={home.heal}>
                <img src="https://preview.colorlib.com/theme/karma/img/r1.jpg" alt="" />

            </aside>
            <aside className={home.black}>
                <h3>BLACK LACE HEELS</h3>
                <p>$189.00<span style={{color:'#787278',textDecoration:'line-through',padding:'10px'}}>$210.00</span></p>
            </aside>
        </main>
        <main className={home.man}>
            <aside className={home.mans}>
                <img src="https://preview.colorlib.com/theme/karma/img/r2.jpg" alt="" />

            </aside>
            <aside className={home.boy}>
                <h3>BLACK LACE HEELS</h3>
                <p>$189.00<span style={{color:'#787278',textDecoration:'line-through',padding:'10px'}}>$210.00</span></p>
            </aside>
        </main>
        <main className={home.lays}>
            <aside className={home.lay}>
                <img src="https://preview.colorlib.com/theme/karma/img/r3.jpg" alt="" />

            </aside>
            <aside className={home.lace}>
                <h3>BLACK LACE HEELS</h3>
                <p>$189.00<span style={{color:'#787278',textDecoration:'line-through',padding:'10px'}}>$210.00</span></p>
            </aside>
        </main> 
        <main className={home.handsome}>
            <aside className={home.hand}>
                <img src="https://preview.colorlib.com/theme/karma/img/r4.jpg" alt="" />

            </aside>
            <aside className={home.hands}>
                <h3>BLACK LACE HEELS</h3>
                <p>$189.00<span style={{color:'#787278',textDecoration:'line-through',padding:'10px'}}>$210.00</span></p>
            </aside>
        </main>
        <main className={home.girl}>
            <aside className={home.girls}>
                <img src="https://preview.colorlib.com/theme/karma/img/r5.jpg" alt="" />

            </aside>
            <aside className={home.girl_product}>
                <h3>BLACK LACE HEELS</h3>
                <p>$189.00<span style={{color:'#787278',textDecoration:'line-through',padding:'10px'}}>$210.00</span></p>
            </aside>
        </main>
        <main className={home.girl_heal}>
            <aside className={home.girl_heals}>
                <img src="https://preview.colorlib.com/theme/karma/img/r6.jpg" alt="" />
         </aside>
            <aside className={home.karma}>
                <h3>BLACK LACE HEELS</h3>
                <p>$189.00<span style={{color:'#787278',textDecoration:'line-through',padding:'10px'}}>$210.00</span></p>
            </aside>
        </main>
        <main className={home.theme}>
            <aside className={home.themes}>
                <img src="https://preview.colorlib.com/theme/karma/img/r7.jpg" alt="" />

            </aside>
            <aside className={home.theme_product}>
                <h3>BLACK LACE HEELS</h3>
                <p>$189.00<span style={{color:'#787278',textDecoration:'line-through',padding:'10px'}}>$210.00</span></p>
            </aside>
        </main>
        <main className={home.tshirt}>
            <aside className={home.shirts}>
                <img src="https://preview.colorlib.com/theme/karma/img/r8.jpg" alt="" />

            </aside>
            <aside className={home.short}>
                <h3>BLACK LACE HEELS</h3>
                <p>$189.00<span style={{color:'#787278',textDecoration:'line-through',padding:'10px'}}>$210.00</span></p>
            </aside>
        </main>
        <main className={home.yellow}>
            <aside className={home.yellows}>
                <img src="https://preview.colorlib.com/theme/karma/img/r9.jpg" alt="" />

            </aside>
            <aside className={home.yellow_shoe}>
                <h3>BLACK LACE HEELS</h3>
                <p>$189.00<span style={{color:'#787278',textDecoration:'line-through',padding:'10px'}}>$210.00</span></p>
            </aside>
        </main>   
    </div>
    <div className={home.wathces}>
    <img src="https://preview.colorlib.com/theme/karma/img/category/c5.jpg" alt="" />    
    </div>
   </section>
   <footer>
            <div class={home.footer_company}>
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
            <div class={home.footer_useful_links}>
                <h3>Useful Links</h3>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div class={home.footer_our_services}>
                <h3>Our Sevices</h3>
                <ul>
                    <li>Web Design</li>
                    <li>Web Development</li>
                    <li>Product Managment</li>
                    <li>Marketing</li>
                    <li>Graphic Design</li>
                </ul>
            </div>
            <div class={home.footer_form}>
                <h3>Join Our Newsletter</h3>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <div class={home.subscribe}>
                    <input type="text"/>
                    <button type="submit">Subscribe</button>
                </div>
            </div>
        </footer>

    </div>
  )
}

export default Home