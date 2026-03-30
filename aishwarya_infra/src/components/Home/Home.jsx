import './Home.css'
import { useNavigate } from 'react-router-dom';
import CountUp from "react-countup";


import {Swiper,SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import homeabout from "../../assets/homeabout.jpg";
import banner1 from "../../assets/HomeBanner1.png";
import banner2 from "../../assets/homebanner.jpeg";


import about from "../../assets/homeabout.jpeg";
import completed from "../../assets/completed.jpeg"
import upcoming from "../../assets/upcom.jpeg";
import ongoing from "../../assets/ongoing.jpeg"


const banners=[
    {
        title:"Elevating Modern Living",
        desc:"Luxury apartments and modern homes designed for your lifestyle.",
        img:banner1,
    },
      {
    title: "Comfort Meets Luxury",
    desc: "Experience premium living spaces crafted for comfort and elegance.",
    img: banner2,
  },
   {
    title: "Your Perfect Place Awaits",
    desc: "Explore stylish homes and apartments built for modern families.",
    img: homeabout,
  },
]
function Home()
{
    const navigate = useNavigate();
    return(
        <>
          <Swiper
              modules={[Navigation, Pagination, Autoplay]}
            //   navigation
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
                    <div className="banner-content">
                      <h1>{item.title}</h1>
                      <p>{item.desc}</p>
                       <button className='banner-exp-btn' onClick={() => navigate('/projects/upcoming')}>
                        <span>Expolre Properties</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='arr-icon'>
                            <path d="M2.5 10.0001H17.5M17.5 10.0001L10.4167 17.0834M17.5 10.0001L10.4167 2.91675" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
        <div className="Asw-home-cont">
              
            <div className='home-about-cont'>
                <div className='home-our-achi-cont'>
                    <div className='our-achi-inn'>
                        <h1><CountUp end={150} duration={1.5} enableScrollSpy={true}/>+</h1>
                        <p>Projects</p>
                        <span>With over 150 completed projects, we provide reliable construction and modern living spaces.</span>
                    </div>
                    <span></span>
                     <div className='our-achi-inn'>
                        <h1> <CountUp end={10} duration={2} enableScrollSpy={true} />+</h1>
                        <p>Years of Industry Experience</p>
                        <span>We have more than 10 years of experience in the construction and real estate industry.</span>
                    </div>
                    <span></span>
                     <div className='our-achi-inn'>
                        <h1><CountUp end={500} duration={2} enableScrollSpy={true} />+</h1>
                        <p>Happy Customers</p>
                        <span>Our quality work and timely delivery have made more than 500 customers happy.</span>
                    </div>
                </div>
                {/* <h1>About Our Compnay</h1>
                <p>At Aiswarya Lakshmi Infra, we specialize in developing modern infrastructure with a strong commitment to quality and transparency. 
                    Our experienced team works with advanced construction practices and premium materials to deliver projects that stand the test of time.</p> */}
                <div className='home-about-sec'>
                        <img src={about} alt="homebanners"  className='home-about-img'/>
                        <div className='home-about-inn'>
                            <h1>About Us</h1>
                             <p>At Aiswarya Lakshmi Infra, we specialize in developing modern infrastructure with a strong commitment to quality and transparency. 
                                Our experienced team works with advanced construction practices and premium materials to deliver projects that stand the test of time.
                            </p> 
                            <p>We aim to create homes and developments that combine comfort, style, and functionality, making them perfect for today’s families and businesses.</p>
                            <button className='home-about-btn'  onClick={() => navigate('/about')} >
                                 <span>Read More</span>
                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='arr-icon'>
                                <path d="M2.5 10.0001H17.5M17.5 10.0001L10.4167 17.0834M17.5 10.0001L10.4167 2.91675" stroke="#022B4B" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg></button>
                            {/* <p className='home-about-btn'>
                                <span>Read More</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='arr-icon'>
                                <path d="M2.5 10.0001H17.5M17.5 10.0001L10.4167 17.0834M17.5 10.0001L10.4167 2.91675" stroke="#022B4B" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </p> */}
                        </div>
                </div>
                <div className='home-our-prj-cont'>
                    <h1>Our Projects</h1>
                    <div className='our-prj-cards'>
                        <div className='our-prj-card'>      
                            <img src={upcoming} alt="img" className='our-prj-img' />
                            <div className='prj-card-inn'>
                                <h1>Upcomming Projects</h1>
                                <p>Check out our upcoming developments and future communiunids</p>
                                <button  onClick={() => navigate('/projects/upcoming')}>View Details</button>
                            </div>
                        </div>
                        <div className='our-prj-card'>      
                            <img src={ongoing} alt="img" className='our-prj-img' />
                            <div className='prj-card-inn'>
                                <h1>Ongoing Projects</h1>
                                <p>Take a look at current constuction projects in progress</p>
                                <button   onClick={() => navigate('/projects/upcoming')}>View Details</button>
                            </div>
                        </div>
                        <div className='our-prj-card'>      
                            <img src={completed} alt="img" className='our-prj-img' />
                            <div className='prj-card-inn'>
                                <h1>Compeletd Projects</h1>
                                <p>Expolre our recently completed residential and Commercial Projects</p>
                                <button   onClick={() => navigate('/projects/completed')}>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-why-cont'>
                    <h1>Why Choose Us</h1>
                    <div className='why-chose-cont'>
                        <div className='why-qali'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='why-icon'>
                            <path d="M17.8125 10.9374C17.1875 14.0624 14.8314 17.0045 11.5241 17.6623C8.2169 18.3202 4.8608 16.7818 3.20034 13.847C1.53987 10.9122 1.9498 7.24312 4.21704 4.74709C6.48427 2.25106 10.3125 1.56246 13.4375 2.81246" stroke="#EAD292" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.1875 9.6875L10.3125 12.8125L17.8125 4.6875" stroke="#EAD292" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Quality Construction</p>
                        </div>
                        <div className='why-qali'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='why-icon'>
                            <path d="M17.8125 10.9374C17.1875 14.0624 14.8314 17.0045 11.5241 17.6623C8.2169 18.3202 4.8608 16.7818 3.20034 13.847C1.53987 10.9122 1.9498 7.24312 4.21704 4.74709C6.48427 2.25106 10.3125 1.56246 13.4375 2.81246" stroke="#EAD292" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.1875 9.6875L10.3125 12.8125L17.8125 4.6875" stroke="#EAD292" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>On Time Delivery</p>
                        </div>
                        <div className='why-qali'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='why-icon'>
                            <path d="M17.8125 10.9374C17.1875 14.0624 14.8314 17.0045 11.5241 17.6623C8.2169 18.3202 4.8608 16.7818 3.20034 13.847C1.53987 10.9122 1.9498 7.24312 4.21704 4.74709C6.48427 2.25106 10.3125 1.56246 13.4375 2.81246" stroke="#EAD292" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.1875 9.6875L10.3125 12.8125L17.8125 4.6875" stroke="#EAD292" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Affordable Pricing</p>
                        </div>
                        <div className='why-qali'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='why-icon'>
                            <path d="M17.8125 10.9374C17.1875 14.0624 14.8314 17.0045 11.5241 17.6623C8.2169 18.3202 4.8608 16.7818 3.20034 13.847C1.53987 10.9122 1.9498 7.24312 4.21704 4.74709C6.48427 2.25106 10.3125 1.56246 13.4375 2.81246" stroke="#EAD292" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.1875 9.6875L10.3125 12.8125L17.8125 4.6875" stroke="#EAD292" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Experienced Team</p>
                        </div>
                         <div className='why-qali'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='why-icon'>
                            <path d="M17.8125 10.9374C17.1875 14.0624 14.8314 17.0045 11.5241 17.6623C8.2169 18.3202 4.8608 16.7818 3.20034 13.847C1.53987 10.9122 1.9498 7.24312 4.21704 4.74709C6.48427 2.25106 10.3125 1.56246 13.4375 2.81246" stroke="#EAD292" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.1875 9.6875L10.3125 12.8125L17.8125 4.6875" stroke="#EAD292" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Customer Support</p>
                        </div>
                         <div className='why-qali'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='why-icon'>
                            <path d="M17.8125 10.9374C17.1875 14.0624 14.8314 17.0045 11.5241 17.6623C8.2169 18.3202 4.8608 16.7818 3.20034 13.847C1.53987 10.9122 1.9498 7.24312 4.21704 4.74709C6.48427 2.25106 10.3125 1.56246 13.4375 2.81246" stroke="#EAD292" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.1875 9.6875L10.3125 12.8125L17.8125 4.6875" stroke="#EAD292" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Support Services</p>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className='home-look-cont'>
                    <h1>Looking for your dream home?</h1>
                    <p>Great Construction Quality and timely Delivery</p>
                    <button className='but-banner-exp-btn' onClick={() => navigate('/projects/upcoming')}>
                        <span>Explore Properties</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='arr-icon'>
                            <path d="M2.5 10.0001H17.5M17.5 10.0001L10.4167 17.0834M17.5 10.0001L10.4167 2.91675" stroke="#022B4B" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    
            </div>
        </div>
        </>
    )
}
export default Home

