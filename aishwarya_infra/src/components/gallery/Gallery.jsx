import './Gallery.css';
// import banner from "../../assets/Upcoming/upcoming_banner.jpg";
import CountUp from "react-countup";


import {Swiper,SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState } from 'react';
import teamgal1 from "../../assets/Gallery1.jpg";
import teamgal2 from "../../assets/gal2.jpg"
import teamgal3 from "../../assets/gal3.jpg"

import csr1 from "../../assets/csr1.jpg"

import fun1 from "../../assets/fun1.jpg"
import fun2 from "../../assets/fun2.jpg"
import fun3 from "../../assets/fun3.jpg"

const banners=[
    {
    title: "Life at Our Workplace",
    desc: "Where passion meets collaboration and innovation thrives",
    img: teamgal3,
  },
  {
    title: "Fun & Celebrations",
    desc: "Capturing the joy, laughter, and memories we create together",
    img: fun1,
  },
 {
    title: "Community Impact",
    desc: "Driven by purpose, committed to making a meaningful difference",
    img: csr1,
  },
]
function Gallery()
{
    const [allimg, setAllImg] = useState(true);
    const [funimg, setfunImg] = useState(false);
    const [Teamimg, setTeamImg] = useState(false);
    const [csrimg,setCsrImg]=useState(false)
        const AllImg = () => {
            setAllImg(true);
            setfunImg(false);
            setTeamImg(false);
            setCsrImg(false);
        };
         const funImg = () => {
            setAllImg(false);
            setfunImg(true);
            setTeamImg(false);
            setCsrImg(false);

        };
           const TeamImg = () => {
            setAllImg(false);
            setfunImg(false);
            setTeamImg(true);
            setCsrImg(false);
        };
            const csrImg = () => {
            setAllImg(false);
            setfunImg(false);
            setTeamImg(false)
            setCsrImg(true);
        };
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
                       {/* <button className='banner-exp-btn' onClick={() => navigate('/projects/upcoming')}>
                        <span>Expolre Properties</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='arr-icon'>
                            <path d="M2.5 10.0001H17.5M17.5 10.0001L10.4167 17.0834M17.5 10.0001L10.4167 2.91675" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
        <div className="gal-main-cont">
            {/* <div className="gallery-hero">
                <h1>Our  Gallery</h1>
                <p>Moments that define our culture, community, and commitment</p>
            </div> */}
            <div className='gal-bar-sec'>
               <span onClick={AllImg} style={{backgroundColor: allimg ? "#022B4B" : "#eee", color: allimg ? "#eee" : "#022B4B"}}>ALL</span>
                <span onClick={funImg} style={{backgroundColor: funimg ? "#022B4B" : "#eee", color: funimg ? "#eee" : "#022B4B"}}>Functions&Events</span>
                <span onClick={TeamImg} style={{backgroundColor: Teamimg ? "#022B4B" : "#eee", color: Teamimg ? "#eee" : "#022B4B"}} >Team Moments</span>
                <span onClick={csrImg} style={{backgroundColor: csrimg ? "#022B4B" : "#eee", color: csrimg ? "#eee" : "#022B4B"}}>CSR Activites</span>
            </div>
            {allimg && (
                <div className='gal-sec-cont'>
                <img src={fun1} alt="img" className='gal-img' />
                <img src={teamgal1} alt="img" className='gal-img' />
                <img src={fun2} alt="img" className='gal-img' />
                <img src={csr1} alt="img" className='gal-img' />
                <img src={teamgal3} alt="img" className='gal-img' />
                <img src={fun3} alt="img" className='gal-img' />
                <img src={fun1} alt="img" className='gal-img' />
                <img src={teamgal2} alt="img" className='gal-img' />
                </div>
            )}
             {funimg && (
                <>
                <div className='gal-sec-cont'>
                <img src={fun1} alt="img" className='gal-img' />
                <img src={fun3} alt="img" className='gal-img' />
                <img src={fun2} alt="img" className='gal-img' />

                </div>
                </>
            )}
              {Teamimg && (
                <>
                <div className='gal-sec-cont'>
                    {/* <p className='img-hed'>Team moments</p> */}
                <img src={teamgal1} alt="img" className='gal-img' />
                <img src={teamgal2} alt="img" className='gal-img' />
                <img src={teamgal3} alt="img" className='gal-img' />
                </div>
                </>
            )}
              {csrimg && (
                <>
                <div className='gal-sec-cont'>
                {/* <div className='gal-card'> */}
                <img src={csr1} alt="img" className='gal-img' />
                {/* <p>Swatch Bharath</p> */}
                {/* </div> */}
                </div>
                </>
            )}
        </div>
        </>
    )
}
export default Gallery