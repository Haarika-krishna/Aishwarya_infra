import "./Services.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { MapPin, DraftingCompass, Factory,  HandPlatter, LandPlot } from "lucide-react";



import banner1 from "../../assets/servban.jpeg";
// import banner2 from "../../assets/Home/homeabout.jpg";
// import banner3 from "../../assets/Home/homeabout.jpg";
// import banner4 from "../../assets/Home/homeabout.jpg";


const banners = [
  {
    title: "Our Services",
    desc: "Delivering Quality Real Estate Developments & Trusted Investment Opportunities.",
    img: banner1,
  }
  // {
  //   title: "Find Your Dream Home",
  //   desc: "Discover beautiful homes in the best locations with modern amenities.",
  //   img: banner2,
  // },
  // {
  //   title: "Comfort Meets Luxury",
  //   desc: "Experience premium living spaces crafted for comfort and elegance.",
  //   img: banner3,
  // },
  // {
  //   title: "Your Perfect Place Awaits",
  //   desc: "Explore stylish homes and apartments built for modern families.",
  //   img: banner4,
  // },
];

function AiswhryaServices()
{
  const navigate =useNavigate();
    return(
        <>
        <div className="ser-main-cont">
          <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
       className="swiper">
        {banners.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="banner"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="banner-content">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <button  onClick={() => navigate('/contact')}>
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
          <div className="ser-our-cont">
            <h1>Our Core Services</h1>
            <p>We take pride in delivering legally approved layouts, premium gated communities,
              and high-value investment opportunities that meet the expectations of today’s property buyers and investors.
                With clear documentation, modern infrastructure, and customer-focused service, we ensure every client experiences a smooth and trustworthy property journey.</p>
              <div className="ser-cards-cont">
                <div className="ser-vice-card">
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#022B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-house-icon lucide-map-pin-house card-icon"><path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"/><path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"/><path d="M18 22v-3"/><circle cx="10" cy="10" r="3"/></svg>
                  </span>
                  <h1>Residential Plot Development</h1>
                  <p>Well-planned layouts with modern amenities & clear documentation.</p>
                </div>
                <div className="ser-vice-card">
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#022B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tent-tree-icon lucide-tent-tree card-icon"><circle cx="4" cy="4" r="2"/><path d="m14 5 3-3 3 3"/><path d="m14 10 3-3 3 3"/><path d="M17 14V2"/><path d="M17 14H7l-5 8h20Z"/><path d="M8 14v8"/><path d="m9 14 5 8"/>
                  </svg>
                  </span>
                  <h1>Gated Community Projects</h1>
                  <p>Secure, premium communities with parks & 24/7 security.</p>
                </div>
                <div className="ser-vice-card">
                  <span>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className='card-icon'>
                  <path d="M4.99981 8.33375L14.9998 13.3337L24.9998 8.33375L14.9998 3.33375L4.99981 8.33375ZM15.8148 0.19375L29.1365 6.98708C29.9465 7.40042 30.2381 8.33708 29.7881 9.08208C29.6312 9.33801 29.4062 9.54519 29.1381 9.68042L15.8148 16.4737C15.5619 16.6007 15.2828 16.6668 14.9998 16.6668C14.7168 16.6668 14.4377 16.6007 14.1848 16.4737L0.863148 9.68042C0.0531482 9.26708 -0.238518 8.33042 0.211482 7.58542C0.368394 7.32949 0.593465 7.12231 0.861482 6.98708L14.1848 0.19375C14.6915 -0.0645833 15.3081 -0.0645833 15.8148 0.19375ZM15.8148 23.1371C15.5627 23.2666 15.2833 23.3342 14.9998 23.3342C14.7163 23.3342 14.437 23.2666 14.1848 23.1371L0.863148 16.2254C0.0531482 15.8054 -0.238518 14.8521 0.211482 14.0954C0.368981 13.8375 0.593663 13.6272 0.861482 13.4871C1.05588 13.3863 1.27166 13.3336 1.49065 13.3336C1.70963 13.3336 1.92541 13.3863 2.11981 13.4871L14.1865 19.7454C14.6915 20.0087 15.3081 20.0087 15.8148 19.7454L27.8798 13.4871C28.074 13.3865 28.2895 13.3341 28.5081 13.3341C28.7268 13.3341 28.9423 13.3865 29.1365 13.4871C29.9465 13.9071 30.2381 14.8604 29.7881 15.6171C29.6306 15.875 29.406 16.0853 29.1381 16.2254L15.8148 23.1371ZM15.8148 29.8037C15.5627 29.9333 15.2833 30.0009 14.9998 30.0009C14.7163 30.0009 14.437 29.9333 14.1848 29.8037L0.863148 22.8921C0.0531482 22.4721 -0.238518 21.5187 0.211482 20.7621C0.368981 20.5041 0.593663 20.2938 0.861482 20.1537C1.05588 20.0529 1.27166 20.0003 1.49065 20.0003C1.70963 20.0003 1.92541 20.0529 2.11981 20.1537L14.1865 26.4121C14.6915 26.6754 15.3081 26.6754 15.8148 26.4121L27.8798 20.1537C28.074 20.0532 28.2895 20.0007 28.5081 20.0007C28.7268 20.0007 28.9423 20.0532 29.1365 20.1537C29.9465 20.5737 30.2381 21.5271 29.7881 22.2838C29.6306 22.5417 29.406 22.752 29.1381 22.8921L15.8148 29.8037Z" fill="#022B4B"/>
                  </svg>
                  </span>
                  <h1>Land Development</h1>
                  <p>Transforming land into approved residential layouts.</p>
                </div>
                <div className="ser-vice-card">
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#022B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-spline-pointer-icon lucide-spline-pointer card-icon"><path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"/><path d="M5 17A12 12 0 0 1 17 5"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/></svg>
                  </span>
                  <h1>Commercial Plot Development</h1>
                  <p>Strategic commercial plots for business growth.</p>
                </div>
                <div className="ser-vice-card">
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#022B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-framer-icon lucide-framer card-icon"><path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"/></svg>
                  </span>
                  <h1>Project Planning & Design</h1>
                  <p>Expert layout planning, roads, drainage & green spaces.</p>
                </div>
                <div className="ser-vice-card">
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#022B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-combined-icon lucide-chart-no-axes-combined card-icon"><path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18v3"/><path d="M8 14v7"/></svg>
                  </span>
                  <h1>Investment Opportunities</h1>
                  <p>High-value plots for safe & profitable investment.</p>
                </div>
              </div>
          </div>
          <div className="our-dev-prc">
            <h1>Our Development Process</h1>
            <span></span>
            <p>Explaining how Aishwarya Lakshmi Infra Developers work step by step.</p>
            <div className="dev-pro-sec">
              <div className="div-pic dev-pic-cont ">
                <span className="dev-pic-cir">
                  <LandPlot size={60} color="#022B4B"/>
                </span>
                <span className="dev-pic-cir">
                   <DraftingCompass size={60} color="#022B4B" />
                </span>
              <span className="dev-pic-cir">
                  <Factory size={60} color="#022B4B" />
                </span>
                <span className="dev-pic-cir">
                  <HandPlatter size={60} color="#022B4B" />
                </span>
              </div>
              <span className="scrol-line">
                <span className="dot dot1"></span>
                <span className="dot dot2"></span>
                <span className="dot dot3"></span>
                <span className="dot dot4"></span>
              </span>
              <div className="dev-pic-cont dev-pic-cont-inf ">
              <div className="dev-pic-inf">
                <h1>Land Identification</h1>
                <p>Selecting prime and fast-growing locations.</p>
              </div>
              <span className="arr-down"></span>
                <div className="dev-pic-inf">
                <h1>Layout Planning</h1>
                <p>Designing smart and legally approved layouts.</p>
              </div>
              <span className="arr-down"></span>
                <div className="dev-pic-inf">
                <h1>Infrastructure Development</h1>
                <p>Roads, drainage, electricity, and parks.</p>
              </div>
              <span className="arr-down"></span>
                <div className="dev-pic-inf">
                <h1>Plot Handover</h1>
                <p>Ready-to-own plots with clear documentation. how its show in website give me a img</p>
              </div>
              </div>
            </div>
          </div>
           <div className='ser-look-cont'>
                    <h1>Looking for your Dream Property?</h1>
                    <p>Get in Touch with Our Experts Today!</p>
                    <button className='banner-exp-btn'  onClick={() => navigate('/contact')}>
                        <span>Get in Touch</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='arr-icon'>
                            <path d="M2.5 10.0001H17.5M17.5 10.0001L10.4167 17.0834M17.5 10.0001L10.4167 2.91675" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
            </div>
         </div>
          
        </>
    )
}
export default AiswhryaServices

