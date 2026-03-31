import { useParams } from "react-router-dom";
import "./CompleteProjDetails.css";

import img1 from "../../assets/villa.jpeg";
import img2 from "../../assets/flat.jpeg";
import img3 from "../../assets/Gated-communities.jpeg";

/* Amenity Icons */
import security from "../../assets/security.jpeg";
import gym from "../../assets/Gym.jpeg";
import power from "../../assets/power.jpeg";
import rain from "../../assets/rain.jpeg";
import play from "../../assets/PlayArea.jpeg";
import parking from "../../assets/Parking.jpeg";
import hall from "../../assets/Communityhall.jpeg";
import pool from "../../assets/swimming_pool.jpeg";

import {
  FaBuilding,
  FaMapMarkerAlt,
  FaHome,
  FaLayerGroup,
  FaCity,
  FaBed,
  FaRulerCombined,
  FaCompass,
  FaCar,
  FaRupeeSign
} from "react-icons/fa";

const iconMap = {
  name: <FaBuilding />,
  address: <FaMapMarkerAlt />,
  propertyType: <FaHome />,
  floors: <FaLayerGroup />,
  totalFlats: <FaCity />,
  totalUnits: <FaCity />,
  configurations: <FaBed />,
  unitSize: <FaRulerCombined />,
  builtUpArea: <FaRulerCombined />,
  totalArea: <FaRulerCombined />,
  facing: <FaCompass />,
  parking: <FaCar />,
  usage: <FaBuilding />,
  priceRange: <FaRupeeSign />
};

const projectData = [
  {
    id: 1,
    title: "Aishwarya Lakshmi Residency",
    location: "Hyderabad, Telangana",
    description:
      "Aishwarya Lakshmi Residency is a premium residential apartment project designed for modern urban living. The project offers spacious homes, quality construction, and excellent connectivity to major IT hubs, schools, hospitals, and shopping centers.",

    hero: img1,
    gallery: [img1, img2, img3],
    details: {
  Name: "Aishwarya Lakshmi Residency",
  Address: "Hyderabad, Telangana",
  PropertyType: "Residential Apartments",
  Floors: "G+5 floors structure",
  TotalFlats: "Total of 20 flats available",
  Configurations: "Available in 1 BHK, 2 BHK, and 3 BHK options",
  UnitSize: "Flats sizes from 800 to 1800 sq.ft",
  Facing: "available in both east and west facing",
  Parking: "parking available for both cars and bikes",
  PriceRange: "Prices start from ₹45 Lakhs up to ₹1.2 Crores"
},   
    amenities: [
      { icon: security, text: "24/7 Security with CCTV Surveillance" },
      { icon: gym, text: "Fully Equipped Gymnasium" },
      { icon: play, text: "Children’s Play Area" },
      { icon: parking, text: "Covered Car Parking" },
      { icon: power, text: "Power Backup" },
      { icon: rain, text: "Rainwater Harvesting" },
    ],
  },

  {
    id: 2,
    title: "Aurora Villas",
    location: "Vanasthalipuram, Hyderabad",
    description:
      "Aurora Villas is an exclusive gated villa community designed for luxury living with private gardens, premium architecture, and world-class amenities.",

    hero: img2,
    details: {
  Name: "Aurora Villas",
  Address: "Vanasthalipuram, Hyderabad",
  PropertyType: "Villa Community",
  TotalArea: "Spread across 5 acres of land",
  TotalUnits: "Total of 20 residential units",
  Configurations: "Offers 1 BHK, 2 BHK, and 3 BHK homes",
  BuiltUpArea: "Built-up area ranges from 800 to 1800 sq.ft",
  Parking: "Ample parking space available",
  PriceRange: "Villa prices range from ₹80 Lakhs to ₹2 Crores"
},
    gallery: [img2, img1, img3],

    amenities: [
      { icon: security, text: "Gated Community with 24/7 Security" },
      { icon: play, text: "Children’s Play Area" },
      { icon: parking, text: "Ample Car Parking" },
      { icon: pool, text: "Open Swimming Pool" },
      { icon: power, text: "24/7 Power Backup" },
      { icon: rain, text: "Rainwater Harvesting System" },
    ],
  },

  {
    id: 3,
    title: "Green Horizon Community",
    location: "Nagole, Hyderabad",
    description:
      "Green Horizon Community is a peaceful gated apartment community surrounded by greenery and designed for comfortable family living.",

    hero: img3,
    details: {
  Name: "Green Horizon Community",
  Address: "Nagole, Hyderabad",
  PropertyType: "Independent Houses / Villas",
  TotalArea: "Spread across 10 acres",
  TotalUnits: "Includes 80 independent houses",
  Configurations: "Offers 2 BHK and 3 BHK villas",
  BuiltUpArea: "House sizes range from 1500 to 3000 sq.ft",
  Facing: "Homes available in east and west facing",
  Parking: "Dedicated and visitor parking available",
  Security: "24/7 security provided",
  PriceRange: "Prices range between ₹1 Crore and ₹3 Crores"
},
    gallery: [img3, img1, img2],

    amenities: [
      { icon: security, text: "24/7 Security System" },
      { icon: gym, text: "Gym & Fitness Center" },
      { icon: play, text: "Kids Play Area" },
      { icon: parking, text: "Covered Parking" },
      { icon: power, text: "Power Backup" },
      { icon: rain, text: "Rainwater Harvesting" },
      {icon: hall, text: "Luxurious Community Hall"},
    ],
  },
  {
    id: 4,
    title: "Prime Edge Business Park",
    location: "Nanakramguda, Rangareddy",
    description:
      "Prime Edge Business Park is a peaceful Commercial Spaces surrounded by Famous Companies and designed for comfortable working Complexs.",

    hero: img3,
   details: {
  Name: "Prime Edge Business Park",
  Address: "Nanakramguda, Rangareddy",
  PropertyType: "Commercial Office Spaces",
  Floors: "Multi-floor building",
  UnitSize: "Office spaces range from 500 to 5000 sq.ft",
  Usage: "Suitable for startups, SMEs, and corporate offices",
  Parking: "Ample parking available",
  Elevators: "High-speed elevators installed",
  PowerBackup: "Power backup available",
  Security: "24/7 security provided",
  PriceRange: "Office spaces start from ₹50 Lakhs and go up to ₹5 Crores"
},
    gallery: [img3, img1, img2],

    amenities: [
      { icon: security, text: "24/7 Security System" },
      { icon: gym, text: "Gym & Fitness Center" },
      { icon: play, text: "Kids Play Area" },
      { icon: parking, text: "Covered Parking" },
      { icon: power, text: "Power Backup" },
      { icon: rain, text: "Rainwater Harvesting" },
      {icon: hall, text: "Luxurious Community Hall"},
    ],
  },
  {
    id: 5,
    title: "Vertex Commercial Center",
    location: "Kokapet, Hyderabad",
    description:
      "Green Horizon Community is a peaceful gated apartment community surrounded by greenery and designed for comfortable family living.",

    hero: img3,
    details: {
  Name: "Vertex Commercial Center",
  Address: "Kokapet, Hyderabad",
  PropertyType: "Retail & Commercial Hub",
  Floors: "Multi-level commercial structure",
  UnitSize: "Shops range from 300 to 3000 sq.ft",
  Usage: "Suitable for retail shops, showrooms, and supermarkets",
  Parking: "Visitor parking available",
  Infrastructure: "Modern infrastructure with wide corridors",
  Visibility: "Located in a high footfall area",
  PriceRange: "Commercial units range from ₹30 Lakhs to ₹3 Crores"
},
    gallery: [img3, img1, img2],

    amenities: [
      { icon: security, text: "24/7 Security System" },
      { icon: gym, text: "Gym & Fitness Center" },
      { icon: play, text: "Kids Play Area" },
      { icon: parking, text: "Covered Parking" },
      { icon: power, text: "Power Backup" },
      { icon: rain, text: "Rainwater Harvesting" },
      {icon: hall, text: "Luxurious Community Hall"},
    ],
  },
];

function CompletedProjectDetails() {
  const { id } = useParams();

  const project = projectData.find((p) => p.id === Number(id));

  if (!project) return <h2>Project Not Found</h2>;

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
          <span className="hero-tag">
            Modern apartments with premium amenities
          </span>
        </div>
      </div>

      {/* OVERVIEW */}
      <section className="overview">
        <h2>Project Overview</h2>
        <p>{project.description}</p>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <h2>Property Gallery</h2>

        <div className="gallery-grid">
          {project.gallery.map((img, index) => (
            <img src={img} alt="property" key={index} />
          ))}
        </div>
      </section>

      {/* project information */}

      <section className="project-info">

         <h2>Project Details</h2>
<div className="details-wrapper">
  {Object.entries(project.details).map(([key, value], index) => {
    
    const label = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, str => str.toUpperCase());

    return (
      <div className="detail-row" key={index}>

        {/* LEFT SIDE */}
        <div className="detail-left">
          <span className="icon">
            {iconMap[key.charAt(0).toLowerCase() + key.slice(1)] || <FaBuilding />}
          </span>
          <span className="label">{label}</span>
        </div>

        {/* RIGHT SIDE */}
        <div className="detail-right">
          {value}
        </div>

      </div>
    );
  })}
</div>
      </section>

      {/* AMENITIES */}
      <section className="amenities">

        <h2>Key Features & Amenities</h2>

        <div className="amenity-grid">
          {project.amenities.slice(0, 8).map((item, i) => (
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
        <button>Contact Us</button>
      </section>

    </div>
  );
}

export default CompletedProjectDetails;