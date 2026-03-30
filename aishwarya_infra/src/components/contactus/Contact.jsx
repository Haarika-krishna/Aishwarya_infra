import first_img from "../../assets/Contact-first-img.jpeg";
import women from "../../assets/Contact-women.jpeg";
import contactbanner from "../../assets/contactbanner.png"

import { useState } from "react";
import "./Contact.css";

// ✅ Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// 🔥 Banner Data
const banners = [
  {
    img: first_img,
    title: "Contact Us",
    desc: "We are here to help you with your dream property."
  },
  {
    img: contactbanner,
    title: "Talk to Experts",
    desc: "Our team is ready to guide you anytime."
  }
];

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // ✅ Handle Input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.text();
      alert(data);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact-main-page">

       <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                   >
                     {banners.map((item, index) => (
                       <SwiperSlide key={index}>
                        <div
                           className="banner"
                           style={{ backgroundImage: `url(${item.img})` }}
                         >
                           {/*  OVERLAY */}
                            <div className="banner-overlay"></div>
       
                             <div className="banner-content">
                                 <h1>{item.title}</h1>
                                 <p>{item.desc}</p>
                             </div>
                            </div>
                        </SwiperSlide>
                        ))}
                   </Swiper>

        {/* 🔹 Get in Touch */}
        <div className="get-in-touch">
          <h1>Get in Touch</h1>

          <div className="contact-second-container">

            <div className="left-section">
              <img src={women} alt="women-img" />
            </div>

            <div className="contact-card">
              <form onSubmit={handleSubmit} className="contact-form">

                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-input"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-input"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="contact-input"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Message / Your Query"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-textarea"
                  rows="5"
                  required
                ></textarea>

                <button type="submit" className="contact-button">
                  Send Message
                </button>

              </form>
            </div>

          </div>
        </div>

        {/* 🔹 Address Section */}
        <div className="contact-third-container">
          <h1>Our Office Address</h1>

          <div className="third-inner-container">

            <div className="left-section">
              <img src={first_img} alt="company" />
            </div>

            <div className="right-cont-section">
              <p><span class="ion--location-sharp"></span> Aishwarya Lakshmi Infra Developers, Miyapur, 500001</p>
              <p><span class="ic--baseline-phone"></span> +91- 9876543210</p>
              <p><span class="material-symbols--mail-rounded"></span> sales.aishwaryainfra@gmail.com</p>
            </div>

          </div>
        </div>

        {/* 🔹 Map Section */}
        <div className="container-map-section">
          <h1>Google Map</h1>

          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.32501495823!2d78.38464547420618!3d17.444151283452687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9115d1bdce55%3A0x40732e0724b4d734!2sSaanvika%20software%20solutions!5e0!3m2!1sen!2sin!4v1773037643587!5m2!1sen!2sin"
            width="100%"
            height="360"
            style={{ border: 0 }}
          />
        </div>

      </div>
    </>
  );
};

export default Contact;