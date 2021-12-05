import Button from "@momentum-ui/react/lib/Button";
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="content">
        <div className="left-side">
          <div className="address details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic">
              Address - Jharsuguda ODISHA INDIA(768216)
            </div>
          </div>

          <div className="email details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email : </div>
            <div className="text-one">Foodbox@gmail.com</div>
            <div className="text-two">info.Foodbox@gmail.com</div>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Send us a message</div>
          <p>
            If you have any work from me or any types of quries related to my
            tutorial, you can send me message from here. It's my pleasure to
            help you.
          </p>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Enter your email" />
            </div>

            <div className="input-box message-box">
              <input type="text" placeholder="Enter your Query" />
            </div>
            <div className="button">
            <Button children="Send-Now"  color="blue" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
