import React, { Component } from "react";
import FooterComponent from "../components/footer";
import HeaderHome from "../components/header";

class ContactUs extends Component {
  render() {
    return (
      <div>
        <HeaderHome></HeaderHome>
        <div className="contact-area mtb-60px">
          <div className="container">
            <div className="custom-row-2">
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="contact-info-dec">
                      <p>+012 345 678 102</p>
                      <p>+012 345 678 102</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe"></i>
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="#">urname@email.com</a>
                      </p>
                      <p>
                        <a href="#">urwebsitenaem.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="contact-info-dec">
                      <p>Address goes here,</p>
                      <p>street, Crossroad 123.</p>
                    </div>
                  </div>
                  <div className="contact-social">
                    <h3>Follow Us</h3>
                    <div className="social-info">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="ion-social-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ion-social-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ion-social-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ion-social-google"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ion-social-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Get In Touch</h2>
                  </div>
                  <form
                    className="contact-form-style"
                    id="contact-form"
                    action="https://whizthemes.com/nazmul/php/mail.php"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <input name="name" placeholder="Name*" type="text" />
                      </div>
                      <div className="col-lg-6">
                        <input name="email" placeholder="Email*" type="email" />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="subject"
                          placeholder="Subject*"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Your Message*"
                        ></textarea>
                        <button className="submit" type="submit">
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-messege"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default ContactUs;
