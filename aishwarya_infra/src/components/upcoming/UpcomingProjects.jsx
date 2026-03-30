import './upcoming.css'
import { SwiperSlide,Swiper } from 'swiper/react';
import  {Navigation,Pagination,Autoplay} from 'swiper/modules'

import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner from "../../assets/Upcoming/upcoming_banner.jpeg";


const banners = [
  {
    title: "Explore Our UpComing Projects",
    desc: "Building the future with quality, innovation, and trust.",
    img: banner,
  }
]

import Apartment from '../../assets/Upcoming/Apartment_1.jpeg';
import Villas from '../../assets/Upcoming/Villas_1.jpeg';
import Apartment_2 from '../../assets/Upcoming/Apartment_2.jpeg';
import Spaces from '../../assets/Upcoming/villas_2.jpeg';
import Complex from '../../assets/Upcoming/image_1.jpeg';
const projects = [
  {
    id:1,
    title: "Aishwarya Lakshmi Residency",
    location: "Visakhapatnam, Andhra Pradesh.",
    type: "Residential Apartments",
    description:
      "Modern apartments with premium amenities located in a prime area with excellent connectivity.",
    image: Apartment,
  },
  {
      id:2,
    title: "Green Valley Villas",
    location: "Guntur, Andhra Pradesh.",
    type: "Luxury Villas",
    description:
      "Premium villas designed with landscaped surroundings, private parking, and modern lifestyle facilities.",
    image: Villas,
  },
  {
      id:3,
    title: "Green Meadows Residency",
    location: "Amaravati, Andhra Pradesh.",
    type: "Gated Community Apartments",
    description:
      "A gated residential community offering modern apartments, security, and lifestyle amenities for families.",
    image: Apartment_2,
  },
   {
      id:4,
    title: "Lakshmi Tech Park",
    location: "Visakhapatnam, Andhra Pradesh.",
    type: "Commercial Spaces",
    description:
      "A modern commercial development offering office spaces and retail units ideal for startups and growing businesses.",
    image: Spaces,
  },
   {
      id:5,
    title: "Lakshmi Business Hub",
    location: "Visakhapatnam, Andhra Pradesh",
    type: "Commercial Complex",
    description:
      "A strategic business hub offering office spaces, showrooms, and retail outlets in a prime commercial area.",
    image: Complex,
  },
];


function UpcomingProjects(){
const navigate = useNavigate();

    return(
        <>
        <div className='upc-main-cont'>
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
            
            <div className='upc-intrd-sec'>
                <h1>Our Current Developments</h1>
                <p>At Aishwarya Lakshmi Infra, we are committed to delivering modern infrastructure and high-quality developments.
                Our ongoing projects reflect our dedication to innovation, durability, and customer satisfaction.
                Each project is designed with attention to detail, strategic location planning, and modern architectural standards to create spaces that truly enhance lifestyles.</p>
            </div>
            <div className="upc-prj-cards">
              {projects.map((project, index) => (
                  <div className="upc-card" key={index}>
                  <img src={project.image} alt="upcoming" className="upc-card-img" />
                  <h1>{project.title}</h1>
                  <p>
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      >
                      <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
                      <circle cx="12" cy="8" r="2" />
                      <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
                      </svg>
                      <span>{project.location}</span>
                  </p>

                  <span className="card-type">{project.type}</span>

                  <p className="card-type-des">{project.description}</p>

                   <span className="card-view">
                      {/* <p>View</p> */}
                      <Link to={`/upcoming/${project.id}`} className="card-view">
                            <p>View</p>
                      </Link>
                      {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#022B4B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className='view-icon'
                      >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                      </svg> */}
                  </span> 
                  </div>
              ))}
            </div>
            <div className='up-look-cont'>
                    <h1>Looking for your Dream Property?</h1>
                    <p>Get in Touch with Our Experts Today!</p>
                    <button className='banner-exp-btn' onClick={() => navigate('/contact')}>
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
export default UpcomingProjects