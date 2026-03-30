import { useParams } from "react-router-dom";
import { blogData } from "./BlogData";
import { useNavigate } from "react-router-dom";

import "./BlogDetails.css";

const BlogDetails = () => {

const {id} = useParams()
const navigate = useNavigate();

const blog = blogData.find((item)=> item.id === Number(id))

return(

<div className="blog-details">

{/* HERO */}

<div className="hero">
<img src={blog.img} alt="blog"/>
<div className="hero-overlay"></div>
<h1>{blog.title}</h1>
</div>

<div className="property-description">

<h2>Investment Guide</h2>

{blog.propertyDescription.map((text,index)=>(
<p key={index}>{text}</p>
))}

</div>
{/* CONTENT */}

<div className="content">

{blog.content.map((para,index)=>(
<p key={index}>{para}</p>
))}

</div>

{/* BENEFITS */}

<div className="benefits">

<div className="benefits-left">
    <h2>Key Benefits</h2>

<ul>
{blog.benefits.map((b,index)=>(
<li key={index}><span className="gg--check-o"></span>{b}</li>
))}
</ul>
</div>

 <div className="benefits-right">
    <img src={blog.image} alt="benefits"/>
  </div>
</div>

{/* PROPERTY TYPES SECTION */}

<div className="property-section">

<h2>Types of Properties</h2>

<div className="property-grid">

{blog.propertyTypes.map((item,index)=>(
<div className="property-card" key={index}>
<img src={item.img} alt="property"/>
<p>{item.text}</p>
</div>
))}

</div>

</div>

{/* CTA */}

<div className="blog-cta">

<h2>Interested in investing in premium properties?</h2>

<button onClick={() => navigate("/contact")}>Contact Us</button>

</div>

</div>

)

}

export default BlogDetails