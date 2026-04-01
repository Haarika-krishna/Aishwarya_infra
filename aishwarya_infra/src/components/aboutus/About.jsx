import "./About.css";
import { useNavigate } from "react-router-dom";

import first_img from "../../assets/banner_img.jpeg";
import home from "../../assets/community_img.jpeg";
import vil from "../../assets/villa-img2.jpeg";
import miss from "../../assets/mission-img.jpeg";
import free from "../../assets/freepik.jpg";

import ceo from "../../assets/ceo.jpeg";
import chairman from "../../assets/chairman.jpeg";
import founder from "../../assets/founder.jpeg";
import cofounder from "../../assets/co-founder.jpeg";

import site from "../../assets/construction_site.jpeg"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const banners = [
  {
    img: first_img,
    title: "Our Journey",
    desc: "Building trust through quality infrastructure."
  },
  {
    img: home,
    title: "Modern Living",
    desc: "Creating spaces for comfortable lifestyle."
  },
  {
    img: site,
    title: "Strong Leadership",
    desc: "Driven by vision and expertise."
  }
];

// Define team members in an array for better maintainability
const teamMembers = [
  { id: 1, name: "Kamal", role: "Chairman", img: chairman },
  { id: 2, name: "Rakesh", role: "CEO", img: ceo },
  { id: 3, name: "Aishwarya", role: "Founder", img: founder },
  { id: 4, name: "Rajesh", role: "Co-Founder", img: cofounder }
];

const About = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="about-main-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="swiper"
        >
          {banners.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="banner"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="banner-content">
                  <h1>{item.title}</h1>
                  <p>{item.desc}</p>
                  <button className="about-cnt-btn" onClick={() => navigate('/contact')}>
                    <span>Contact Us</span>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='arr-icon'>
                      <path d="M2.5 10.0001H17.5M17.5 10.0001L10.4167 17.0834M17.5 10.0001L10.4167 2.91675" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* About Content */}
        <div className="about-second-container">
          <p>
            <strong>About Our Company</strong><br />
            Aishwarya Lakshmi Infra Developers is a real estate and infrastructure development company focused on building quality residential and commercial spaces.
            The company works on projects such as apartments, gated communities, villa plots, and infrastructure developments designed to provide comfortable and modern living environments.
            <br /><br />
            The company emphasizes quality construction, strategic locations, and customer satisfaction, ensuring that every project delivers value and long-term investment benefits.
          </p>
          <img src={home} alt="about" className="about-img" />
        </div>

        {/* Intro Section */}
        <div className="infra-intro">
          <h2>Shaping the Future of Living</h2>
          <p>
            We are a trusted infrastructure and real estate development company committed 
            to creating modern, well-planned, and sustainable communities.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="fifth-section">
          <div className="vision-container">
            <div className="vision-image">
              <img src={free} alt="vision"/>
            </div>
            <div className="vision-text">
              <h1>Our Vision</h1>
              <p>Our vision is to become a trusted and leading name in the real estate industry by delivering innovative, high-quality developments that enhance modern lifestyles. We strive to create spaces that are not just structures, but communities where people feel secure, comfortable, and proud to belong.</p>
            </div>
          </div>

          <div className="mission-container">
            <div className="mission-text">
              <h1>Our Mission</h1>
              <p>Our mission is to design and develop thoughtfully planned properties that combine quality construction, modern design, and sustainability. We are committed to maintaining transparency, ensuring timely delivery, and building long-term relationships with our customers through trust, reliability, and excellence in every project we undertake.</p>
            </div>
            <div className="mission-image">
              <img src={miss} alt="mission"/>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="fourth-section">
          <h1>Our Team</h1>
          <div className="scroll-wrapper">
            <div className="about-third-container">
              {/* Render team members twice for infinite scroll effect */}
              {[...teamMembers, ...teamMembers].map((member, index) => (
                <div key={`${member.id}-${index}`} className="founders-container">
                  <img src={member.img} alt={member.name} />
                  <h2>{member.name}</h2>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;