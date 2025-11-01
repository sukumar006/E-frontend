import brand from "./brand.png";
import "./about.css";
import Grapes from"./grapes.jpg";

function About(){
    return(
<div>
  <header><h1>About Us</h1></header>

  <section>
    <div className="sec1">
        <div className="con1">
        <h1>We are your Favourite Store. </h1>
         <p>The sun, a fiery orb of a thousand colors, began its slow descent below the horizon, 
            painting the sky with strokes of deep orange and soft pink as the world prepared for the quiet embrace of twilight, a moment of peaceful
             transition where day surrendered to the gentle hush of the coming night, offering a brief and beautiful 
             spectacle before the stars emerged.</p>
        </div>
         
    <img src={Grapes}></img>
    </div>
  </section>

  <section>
<div className="sec2">
<h1 className="them">Number Speak For Themselves!</h1>
<div className="count">
  <h1>5000+ <br></br>Curated Products</h1>
  <h1>800+ <br></br>Curated Products</h1>
  <h1>40+ <br></br>Products Categories</h1>
</div>
</div>

  </section>
<br></br>
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
export default About;