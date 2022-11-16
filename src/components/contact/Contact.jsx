import './contact.scss'
import {PhoneAndroid, Mail} from "@material-ui/icons";
import { useRef } from 'react';

export default function Contact() {
    const formRef = useRef

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
              Jackal.developer@gmail.com
            </div>
            <div className="c-info-item">
              <img src="images/location.png" alt="" className="c-icon" />
              Southern Virginia Area
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
          </form>
        </div>
      </div>
    </div>
  );
}
