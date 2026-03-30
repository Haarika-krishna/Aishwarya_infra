import Home from './components/Home/Home'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/contactus/Contact'
import About from './components/aboutus/About'
import Blog from './components/blog/Blog'
import Service from './components/services/Service'
import UpcomingProjects from './components/upcoming/UpcomingProjects'
import Completed from './components/completed/Completed'
import Gallery from './components/gallery/Gallery'
import BlogDetails from './components/blog/BlogDetails'
import CompletedProjectDetails from './components/completed/CompletedProjectDetails'
import AiswhryaServices from './components/services/Service';
import Policies from './components/Terms/Privecy';
import Terms from './components/Terms/Terms';
import ScrollToTop from './ScrollToTop';
import UpcomingProjectDetails from './components/upcoming/UpcomingProjectsDetails';
// import ScrollToTop from './ScrollToTop';

function App() {

  return (
    <>
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>

      <Routes>
        

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/privacy-policy" element={<Policies />} />

        <Route path="/terms" element={<Terms />} />

        <Route path="/projects/upcoming" element={<UpcomingProjects />} />

        <Route path="/blog/:id" element={<BlogDetails/>}/>

        <Route path="/completed/:id" element={<CompletedProjectDetails/>}/>
        <Route path="/upcoming/:id" element={<UpcomingProjectDetails/>}/>

        {/* PROJECT ROUTES */}

        <Route path="/services" element={<AiswhryaServices />} />

        <Route path="/projects/completed" element={<Completed />} />

        <Route path="/gallery" element={<Gallery />} />

      </Routes>

      <Footer/>

    </BrowserRouter>
    </>
  )
}

export default App