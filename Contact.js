import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./contact.css";
import brand from "./brand.png";
function Contact() {
  return (
    <div><section className="contact-section">
      {/* Header */}
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>
          Reach out to us anytime! We are here to answer your questions, provide
          support, and ensure you have a great experience. Contact us via phone,
          email, or visit our location. We value your feedback and inquiries.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="contact-cards-container">
        <div className="contact-card">
          <FaPhoneAlt />
          <p>+123 456 7890</p>
          <p>+123 456 7890</p>
        </div>

        <div className="contact-card">
          <FaEnvelope />
          <p>info@example.com</p>
          <p>support@example.com</p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt />
          <p>1569 Ave, New York,</p>
          <p>NY 10028, USA</p>
        </div>
      </div>

    </section>
    <div>
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
            </footer></div>


    </div>
  );
}

export default Contact;
