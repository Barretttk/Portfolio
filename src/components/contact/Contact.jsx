import './contact.scss'
// import {PhoneAndroid, Mail} from "@material-ui/icons";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import React from 'react'
import { useState } from 'react';



const Contact = () => {

    const formRef = useRef();
    const [done,setDone] = useState(false)

   const handleSubmit = (e) => {
     e.preventDefault();
     emailjs
       .sendForm(
         "service_jocgxvl",
         "template_eodv29d",
         formRef.current,
         "Vh1yltVIyjmfxE6Ua"
       )
       .then(
         (result) => {
           console.log(result.text);
           setDone(true);
         },
         (error) => {
           console.log(error.text);
         }
       );
   };


  return (
    <div className="contact" id="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="c-left">
          <h1 className="c-title"> Lets discuss the next opportunity </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="images/phone.png" alt="" className="c-icon" />
              +1 (252) - 722 - 5349
            </div>
            <div className="c-info-item">
              <img src="images/mail.png" alt="" className="c-icon" />
              Jackel.developer@gmail.com
            </div>
            <div className="c-info-item">
              <img src="images/location.png" alt="" className="c-icon" />
              South Eastern Virginia (757)
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="contact-desc">Looking forward to working with you.</p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              class="no-outline"
              placeholder="Name"
              name="user_name"
            />
            <input
              type="text"
              class="no-outline"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              type="text"
              class="no-outline"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              class="no-outline"
              placeholder="Message"
              name="message"
              rows="10"
            />
            <button>Submit</button>
            {done && "Thank you I will get back with you shortly."}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact
