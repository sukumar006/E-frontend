import './home.css';
import React from 'react';

import brand from "./brand.png";
import b1 from "./b1.png";
import b2 from "./b2.png";
import b3 from "./b3.png";
import b4 from "./b4.png";
import p1 from "./p1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";





function Home(){
    return(
        <div> 
           
           <div className='body'>
           <div className='con'> <span>Best Quality Products</span><br></br>
           <h1>Join The Organic <br></br>Movement</h1>
           <button><a href='#'> &#128722;Shop Now</a></button>
           </div>
           </div>
           


           <div className='sec3'>
            <div className='Mainbox'>
              <div className='box1'>
                 <div className='al'>
                    <span className='truck'>&#xf0f9;</span>
                    <h1>Free Shipping <br></br>Above $5 Only</h1>
                 </div>
              </div>

              <div className='box2'>
              <div className='al'>
                    <span className='cert'>&#xf0f9;</span>
                    <h1>Certified Organic <br></br> 100% Guarantee</h1>
                 </div>
              </div>

              <div className='box3'>
              <div className='al'>
                    <span className='Money'>&#xf0f9;</span>
                    <h1>Huge Savings <br></br> At Lowest Price </h1>
                 </div>
              </div>

              <div className='box4'>
              <div className='al'>
                    <span className='easy'>&#xf0f9;</span>
                    <h1>Easy Return <br></br> No Question Ask</h1>
                 </div>
              </div>

              </div>

           </div>
            
            <div className='sec4'>
             <div className='best'><h1>
             Best Selling Products
             </h1>
                 <div className='product'>
                    <div className='p1'>
                           <img src={b1}></img>
                           <p>Groceries <br></br> <span className='pn'>Nescafe Coffee</span>
                           <br></br> $350.00</p>
                    </div>

                    <div className='p2'>
                           <img src={b2}></img>
                           <p>Groceries <br></br> <span className='pn'>Dior Homme</span>
                           <br></br> $458.00</p>
                    </div>

                    <div className='p3'>
                           <img src={b3}></img>
                           <p>Groceries <br></br> <span className='pn'>Laroche Posay</span>
                           <br></br> $650.00</p>
                    </div>

                    <div className='p4'>
                           <img src={b4}></img>
                           <p>Groceries <br></br> <span className='pn'>Olive Tree</span>
                           <br></br> $780.00</p>
                    </div>

                 </div>
             </div>


            </div>


            <div className='sec5'>
                <div className='product2'>
                    <div className='p11'>
                        <p>Farm Fresh Fruits</p>
                        <span>Ut sollitiudin quam vel purus tempus,vel elefend felis varius.</span> <br></br>
                        <div className='btn'> <button>Shop Now</button><img src={p1}></img></div>
                    </div>

                    <div className='p12'>
                    <p>Farm Fresh Fruits</p>
                        <span>Ut sollitiudin quam vel purus tempus,vel elefend felis varius.</span> <br></br>
                        <div className='btn'> <button>Shop Now</button><img src={p2}></img></div>
                    </div>

                    <div className='p13'>
                    <p>Farm Fresh Fruits</p>
                        <span>Ut sollitiudin quam vel purus tempus,vel elefend felis varius.</span> <br></br>
                   <div className='btn'> <button>Shop Now</button><img src={p3}></img></div> 
                    </div>
                     
                </div>


            </div>

            <footer className='last'>
                 <div className='l1'>
                     <img src={brand}></img><br></br>
                     <span>Maecenas mi justo,interdum at consectetur ve,<br></br>tristique et arcu</span>
                 </div>

                 <div className='l2'>
                     <p>Website</p>
                     <span className='a'><a>About</a> <br></br>
        <a>Everything</a>              <br></br>
        <a>groceries</a>  <br></br>
        <a>juice</a> <br></br>
        <a> Contact</a></span>
                 </div>

                 <div className='l3'>
                 <p>Quick Links</p>
                 <span className='a'><a>Know More About Us</a>  <br></br>
                     <a>Visit Store </a><br></br>
                     <a> Let's Connect</a> <br></br>
                     <a>Locate Stores</a> </span>
                 </div>

                 <div className='l4'>
                 <p>Site Links</p>
                 <span className='a'><a>Privacy Policy</a><br></br>
                     <a>Shipping Details</a> <br></br>
                     <a>Offers Coupons</a> <br></br>
                     <a>Terms & Conditions</a></span>
                 </div>
            </footer>


             </div>

        
    )
}
export default Home;