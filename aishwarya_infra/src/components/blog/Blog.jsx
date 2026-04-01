import './blog.css'

import first_img from "../../assets/Contact-first-img.jpeg";
import ban from "../../assets/banner_dot.jpeg";
import villa from "../../assets/villa.jpeg";
import virtual from "../../assets/virtualImage.jpeg";
import plot from "../../assets/plot.jpeg";
import flat from "../../assets/flat.jpeg";
import gated from "../../assets/Gated-communities.jpeg";
import touch from "../../assets/getintouch.jpeg";
import property from "../../assets/property.jpeg";

import { Link, useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// 🔥 Swiper Banner Data
const banners = [
  {
    img: virtual,
    title: "Latest Insights",
    desc: "Stay updated with real estate trends and investment tips."
  },
  {
    img: ban,
    title: "Luxury Living",
    desc: "Explore premium villas and modern lifestyle."
  },
  {
    img: gated,
    title: "Smart Investments",
    desc: "Discover why gated communities are trending."
  }
];


// 🔹 Blog Cards Data
const blogData = [
  {
    id:1,
    img: gated,
    title: "What are the benefits of investing in gated community plots",
  },
  {
    id:2,
    img: villa,
    title: "Why are villas considered a premium living option?",
  },
  {
    id:3,
    img: flat,
    title: "Why do many people prefer buying flats in cities?",
  },
  {
    id:4,
    img: plot,
    title: "Why are residential plots a popular investment choice?",
  },
  {
    id:5,
    img: property,
    title: "Why Is Property Investment A Good Option?",
  }
];


const Blog = () => {

  const navigate =useNavigate();
  return (
    <>
      <div className="blog-main-container">

        {/*  Swiper Section */}
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
                                   <button>
                                  <span>Contact Us</span>
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='arr-icon'>
                                      <path d="M2.5 10.0001H17.5M17.5 10.0001L10.4167 17.0834M17.5 10.0001L10.4167 2.91675" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                  </button>
                              </div>
                             </div>
                         </SwiperSlide>
                         ))}
                    </Swiper>
                       

        {/* 🔹 Blog Cards */}
        <div className="blog-sec-container">
          {blogData.map((blog) => (
            <div className="blog-card" key={blog.id}>
              
              <div className="image-container">
                <img src={blog.img} alt={blog.title} />
              </div>

              <div className="content-sec">
                <h2>{blog.title}</h2>

                <Link to={`/blog/${blog.id}`}>
                  <button className='read-btn'>
                    Read more 
                  </button>
                </Link>
              </div>

            </div>
          ))}
        </div>


        {/* 🔹 Contact Section */}
        <div className='up-look-cont'>
                    <h1>Looking for your Dream Property?</h1>
                    <p>Get in Touch with Our Experts Today!</p>
                    <button className='banner-exp-btn' onClick={() => navigate("/contact")}>
                        <span>Get in Touch</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='arr-icon'>
                            <path d="M2.5 10.0001H17.5M17.5 10.0001L10.4167 17.0834M17.5 10.0001L10.4167 2.91675" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
            </div>

      </div>
    </>
  );
};

export default Blog;