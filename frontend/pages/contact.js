import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { AiFillSetting } from "react-icons/ai";
import { FaHeart, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - In production, you would send formData to your server
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="contactpage">
      <div className="contactcard">
        <div className="contactdesign">
          <div className="topccard">
            <div className="tcardsvg">
              <HiMiniBars3BottomLeft />
              <AiFillSetting />
            </div>
            <div className="usercoderimg">
              <img src="/img/coder.png" alt="user" />
            </div>
            <div className="usercoderinfo">
              <h1>Manujaya Sasanka</h1>
              <h3>Web Developer</h3>
              <div className="usercodersvg">
                <Link href="https://www.linkedin.com/in/manujaya-sasanka-4a4284218/">
                  <FaHeart />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contactform" onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
            {submitted && <p className="success-message">Message Sent Successfully!</p>}
          </form>

          {/* Bottom Section */}
          {/* <div className="bottomcard">
            <div className="bcardtext">
              <p>
                <FaEnvelope /> contact@makmovies.com
              </p>
              <p>
                <FaPhoneAlt /> +94 783471760
              </p>
              <p>
                <FaMapMarkerAlt /> Colombo, Sri Lanka
              </p>
              <FaHeart />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
