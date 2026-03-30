import './Gallery.css';
// import banner from "../../assets/Upcoming/upcoming_banner.jpg";
import { useState } from 'react';
import teamgal1 from "../../assets/Gallery1.jpg";
import teamgal2 from "../../assets/gal2.jpg"
import teamgal3 from "../../assets/gal3.jpg"

import csr1 from "../../assets/csr1.jpg"

import fun1 from "../../assets/fun1.jpg"
import fun2 from "../../assets/fun2.jpg"
import fun3 from "../../assets/fun3.jpg"


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
        <div className="gal-main-cont">
            <div className="gallery-hero">
                <h1>Our  Gallery</h1>
                <p>Moments that define our culture, community, and commitment</p>
            </div>
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