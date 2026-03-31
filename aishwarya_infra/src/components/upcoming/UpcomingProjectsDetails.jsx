import { useParams } from "react-router-dom";
import "./UpcomingprojectsDetails.css";

import { Link, useNavigate } from "react-router-dom";

import Apartment from '../../assets/Upcoming/Apartment_1.jpeg';
import Villas from '../../assets/Upcoming/Villas_1.jpeg';
import Apartment_2 from '../../assets/Upcoming/Apartment_2.jpeg';
import Spaces from '../../assets/Upcoming/villas_2.jpeg';
import Complex from '../../assets/Upcoming/image_1.jpeg';

/* Amenity Icons */
import security from "../../assets/security.jpeg";
import gym from "../../assets/Gym.jpeg";
import power from "../../assets/power.jpeg";
import rain from "../../assets/rain.jpeg";
import play from "../../assets/PlayArea.jpeg";
import parking from "../../assets/Parking.jpeg";
import hall from "../../assets/Communityhall.jpeg";
import pool from "../../assets/swimming_pool.jpeg";
import UpcomingProject from "./UpcomingProjects";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faShower,
  faWindowMaximize,
  faRulerCombined,
} from "@fortawesome/free-solid-svg-icons";

const projectData = [
  {
    id: 1,
    title: "Aishwarya Lakshmi Residency",
    location: "Visakhapatnam, Andhra Pradesh",
    type: "Residential Apartments",
    description:
      "Modern apartments with premium amenities located in a prime area with excellent connectivity.",
    hero: Apartment,
    projectInfo:
      "Aishwarya Lakshmi Residency is a well-planned residential apartment project with a G+5 floor structure comprising a total of 120 flats. The project offers 1 BHK, 2 BHK, and 3 BHK apartments designed for comfortable family living. The unit sizes range from 800 sq.ft to 1800 sq.ft, providing spacious interiors. The flats are available in both east-facing and west-facing orientations, ensuring good ventilation and natural light. The project also includes dedicated car parking and bike parking facilities along with essential amenities.",
    gallery: [Apartment, Villas, Apartment_2],
    floorPlans: [
      { type: "1 BHK", size: "800 sq.ft", bedrooms: 1, bathrooms: 1, balconies: 1 },
      { type: "2 BHK", size: "1200 sq.ft", bedrooms: 2, bathrooms: 2, balconies: 2 },
      { type: "3 BHK", size: "1800 sq.ft", bedrooms: 3, bathrooms: 3, balconies: 2 },
    ],
    amenities: [
      { icon: security, text: "24/7 Security with CCTV Surveillance" },
      { icon: gym, text: "Fully Equipped Gymnasium" },
      { icon: play, text: "Children's Play Area" },
      { icon: parking, text: "Covered Car Parking" },
      { icon: power, text: "Power Backup" },
      { icon: rain, text: "Rainwater Harvesting" },
    ],
  },
  {
    id: 2,
    title: "Green Valley Villas",
    location: "Guntur, Andhra Pradesh",
    type: "Luxury Villas",
    description:
      "Premium villas designed with landscaped surroundings, private parking, and modern lifestyle facilities.",
    hero: Villas,
    projectInfo:
      "Green Valley Villas at Guntur is spread across 5 acres of land and includes a total of 120 residential units. It offers a mix of 1 BHK, 2 BHK, and 3 BHK homes designed for modern living. The built-up area ranges from 800 sq.ft to 1800 sq.ft, providing comfortable space for families of all sizes.",
    gallery: [Villas, Apartment, Apartment_2],
    floorPlans: [
      { type: "1 BHK", size: "800 sq.ft", bedrooms: 1, bathrooms: 1, balconies: 1 },
      { type: "2 BHK", size: "1200 sq.ft", bedrooms: 2, bathrooms: 2, balconies: 2 },
      { type: "3 BHK", size: "1800 sq.ft", bedrooms: 3, bathrooms: 3, balconies: 2 },
    ],
    amenities: [
      { icon: security, text: "Gated Community with 24/7 Security" },
      { icon: play, text: "Children's Play Area" },
      { icon: parking, text: "Ample Car Parking" },
      { icon: pool, text: "Open Swimming Pool" },
      { icon: power, text: "24/7 Power Backup" },
      { icon: rain, text: "Rainwater Harvesting System" },
    ],
  },
  {
    id: 3,
    title: "Green Meadows Residency",
    location: "Amaravati, Andhra Pradesh",
    type: "Gated Community Apartments",
    description:
      "A gated residential community offering modern apartments, security, and lifestyle amenities for families.",
    hero: Apartment_2,
    projectInfo:
      "Green Meadows Residency at Amaravati is spread across 10 acres and consists of 80 independent houses designed for modern and spacious living. The project offers 2 BHK and 3 BHK villas with built-up areas ranging from 1500 sq.ft to 3000 sq.ft. Each house is thoughtfully planned with east-facing and west-facing options to ensure proper ventilation and natural light. The community includes wide internal roads, landscaped gardens, and 24/7 security.",
    gallery: [Apartment_2, Apartment, Villas],
    floorPlans: [
      { type: "2 BHK", size: "1500 sq.ft", bedrooms: 2, bathrooms: 2, balconies: 2 },
      { type: "3 BHK", size: "3000 sq.ft", bedrooms: 3, bathrooms: 3, balconies: 3 },
    ],
    amenities: [
      { icon: security, text: "24/7 Security System" },
      { icon: gym, text: "Gym & Fitness Center" },
      { icon: play, text: "Kids Play Area" },
      { icon: parking, text: "Covered Parking" },
      { icon: power, text: "Power Backup" },
      { icon: rain, text: "Rainwater Harvesting" },
      { icon: hall, text: "Luxurious Community Hall" },
    ],
  },
  {
    id: 4,
    title: "Lakshmi Tech Park",
    location: "Visakhapatnam, Andhra Pradesh",
    type: "Commercial Spaces",
    description:
      "A modern commercial development offering office spaces and retail units ideal for startups and growing businesses.",
    hero: Spaces,
    projectInfo:
      "Lakshmi Tech Park at Visakhapatnam is a premium commercial development designed to accommodate corporate offices and retail spaces. The project features a multi-floor structure with spacious office units and flexible layouts suitable for startups, SMEs, and large enterprises. The office spaces range from 500 sq.ft to 5000 sq.ft, catering to different business requirements. The building offers ample parking facilities for both employees and visitors, along with high-speed elevators, power backup, and 24/7 security.",
    gallery: [Spaces, Apartment, Villas],
    floorPlans: [
      { type: "Small Office", size: "500 sq.ft", bedrooms: 0, bathrooms: 1, balconies: 0 },
      { type: "Medium Office", size: "1500 sq.ft", bedrooms: 0, bathrooms: 2, balconies: 1 },
      { type: "Large Office", size: "5000 sq.ft", bedrooms: 0, bathrooms: 4, balconies: 2 },
    ],
    amenities: [
      { icon: security, text: "24/7 Security System" },
      { icon: gym, text: "Gym & Fitness Center" },
      { icon: parking, text: "Covered Parking" },
      { icon: power, text: "Power Backup" },
      { icon: rain, text: "Rainwater Harvesting" },
      { icon: hall, text: "Luxurious Community Hall" },
    ],
  },
  {
    id: 5,
    title: "Lakshmi Business Hub",
    location: "Visakhapatnam, Andhra Pradesh",
    type: "Commercial Complex",
    description:
      "A strategic business hub offering office spaces, showrooms, and retail outlets in a prime commercial area.",
    hero: Complex,
    projectInfo:
      "Lakshmi Business Hub at Visakhapatnam is a well-designed retail and business hub offering a mix of shops and showrooms suitable for various businesses. The project features a multi-level structure with spacious commercial units ranging from 300 sq.ft to 3000 sq.ft. It is designed to provide maximum visibility and footfall, making it ideal for retail outlets, supermarkets, and branded showrooms. The complex includes ample parking space for visitors, wide corridors, and modern infrastructure.",
    gallery: [Complex, Apartment, Villas],
    floorPlans: [
      { type: "Small Shop", size: "300 sq.ft", bedrooms: 0, bathrooms: 1, balconies: 0 },
      { type: "Showroom", size: "1000 sq.ft", bedrooms: 0, bathrooms: 2, balconies: 0 },
      { type: "Large Showroom", size: "3000 sq.ft", bedrooms: 0, bathrooms: 3, balconies: 1 },
    ],
    amenities: [
      { icon: security, text: "24/7 Security System" },
      { icon: parking, text: "Covered Parking" },
      { icon: power, text: "Power Backup" },
      { icon: rain, text: "Rainwater Harvesting" },
      { icon: hall, text: "Luxurious Community Hall" },
    ],
  },
];

function UpcomingProjectDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projectData.find((p) => p.id === Number(id));

  if (!project) return <h2>Project Not Found</h2>;

  const isCommercial = project.type === "Commercial Spaces" || project.type === "Commercial Complex";

  return (
    <div className="project-details">

      {/* HERO SECTION */}
      <div
        className="project-hero"
        style={{ backgroundImage: `url(${project.hero})` }}
      >
        <div className="hero-overlay">
          <h1>{project.title}</h1>
          <p>{project.location}</p>
          <span className="hero-tag">{project.type}</span>
        </div>
      </div>

      {/* OVERVIEW */}
      <section className="overview">
        <h2>Project Overview</h2>
        <p>{project.description}</p>
      </section>

      {/* GALLERY */}
      {/* <section className="gallery">
        <h2>Property Gallery</h2>
        <div className="gallery-grid">
          {project.gallery.map((img, index) => (
            <img src={img} alt="property" key={index} />
          ))}
        </div>
      </section> */}

      {/* PROJECT INFORMATION */}
      {/* <section className="project-info">
        <h2>Project Details</h2>
        <p>{project.projectInfo}</p>
      </section> */}

      {/* FLOOR PLAN / LAYOUT */}
      <section className="floor-plans">
        <h2>Floor Plan & Layout</h2>
        <p className="floor-plans-subtitle">
          Choose from our thoughtfully designed unit configurations
        </p>
        <div className="floor-plan-grid">
          {project.floorPlans.map((plan, index) => (
            <div className="floor-plan-card" key={index}>
              <div className="floor-plan-header">
                <h3>{plan.type}</h3>
                {/* <span className="floor-plan-size">{plan.size}</span> */}
                <span className="floor-plan-size">
                <FontAwesomeIcon icon={faRulerCombined} /> {plan.size}
                </span>
              </div>
              <div className="floor-plan-specs">
                {!isCommercial && (
                  <div className="spec-item">
                    {/* <span className="spec-icon">🛏️</span> */}
                    <FontAwesomeIcon icon={faBed} className="spec-icon" />
                    <span>{plan.bedrooms} Bedroom{plan.bedrooms !== 1 ? "s" : ""}</span>
                  </div>
                )}
                <div className="spec-item">
                  {/* <span className="spec-icon">🚿</span> */}
                  <FontAwesomeIcon icon={faShower} className="spec-icon" />
                  <span>{plan.bathrooms} Bathroom{plan.bathrooms !== 1 ? "s" : ""}</span>
                </div>
                {plan.balconies > 0 && (
                  <div className="spec-item">
                    {/* <span className="spec-icon">🏠</span> */}

                <FontAwesomeIcon icon={faWindowMaximize} className="spec-icon" />
                    <span>{plan.balconies} Balcon{plan.balconies !== 1 ? "ies" : "y"}</span>
                  </div>
                )}
              </div>
              <button
                className="floor-plan-btn"
                onClick={() => navigate("/contact")}
              >
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* AMENITIES */}
      <section className="amenities">
        <h2>Key Features & Amenities</h2>
        <div className="amenity-grid">
          {project.amenities.map((item, i) => (
            <div className="amenity-card" key={i}>
              <img src={item.icon} alt="icon" />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="project-cta">
        <h2>Interested in this Property?</h2>
        <p>Contact us today to learn more and schedule a visit.</p>
        <button onClick={() => navigate("/contact")}>Contact Us</button>
      </section>

    </div>
  );
}

export default UpcomingProjectDetails;