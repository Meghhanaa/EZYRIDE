import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact_us_8">
      <div className="responsive-container-block container">
        <form className="form-box">
          <div className="container-block form-wrapper">
            <div className="responsive-container-block">
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12">
                <input className="input" name="FirstName" placeholder="Enter your Name" required />
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12">
                <input className="input" name="Email" placeholder="Enter your Email" required />
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12">
                <input className="input" name="PhoneNumber" placeholder="Enter your Mobile Number" required />
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12">
                <select name="CustomerType" className="input">
                  <option value="">You are a</option>
                  <option value="Customer">Customer</option>
                  <option value="Owner">Owner</option>
                </select>
              </div>
              <div className="responsive-cell-block">
                <textarea
                  className="textinput"
                  placeholder="Comment"
                ></textarea>
              </div>
            </div>
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12 checkbox-container">
              <div className="checkbox-container">
                <input type="checkbox" />
                <p className="checkbox-text">
                  All the fields are correct
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
            <div className="get-in-touch">
              <h2 className="text-blk contactus-head font-bold mb-80">Get in Touch</h2>
              <p className="text-blk contactus-subhead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis diam lectus sapien.
              </p>
              <div className="social-media-links">
                <a href="#">
                  <img
                    className="link-img"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
                    alt="Twitter"
                  />
                </a>
                <a href="#">
                  <img
                    className="link-img"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"
                    alt="Facebook"
                  />
                </a>
                <a href="#">
                  <img
                    className="link-img"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"
                    alt="Google"
                  />
                </a>
                <a href="#">
                  <img
                    className="link-img"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
                    alt="Instagram"
                  />
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
