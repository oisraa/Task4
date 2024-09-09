import React from 'react'
import NavBar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import { FaUserDoctor } from "react-icons/fa6";
import { FaHospitalAlt } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import DynamicCard from './components/Services/DynamicCard';
import { FaHeartbeat, FaPills, FaMicroscope } from 'react-icons/fa';
import { RiHourglass2Fill } from "react-icons/ri";
import { LiaAwardSolid } from "react-icons/lia";
import HelpSection from './components/HelpSection/HelpSection';
import AboutUs from './components/AboutUs/AboutUs';
import ServicesSection from './components/ServicesSection/ServiceSection';
import AppointmentForm from './components/AppointmentForm/AppointmentForm';
import ServiceCard from './components/ServiceCard/ServiceCard';
import DepartmentsSection from './components/DepartmentSection/DepartmentsSection';
import TestimonialSection from './components/TestimonialSection/TestimonialSection';
import Doctors from './components/Doctors/Doctors';
import FAQ from './components/FAQ/FAQ';
import Pricing from './components/Pricing/Pricing';
import ContactSection from './components/ContactSection/ContactSection';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';




function App  ()  {
  const logo = {img :'/assets/img/logo.png' }
  const items = [{
    id : "HOME",
    name : "HOME"
  },
    {
    id : "ABOUT",
    name : "ABOUT"
    },
    {
    id : "SERVICES",
    name : "SERVICES"
    },
    {
      id : "DEPARTMENTS",
      name : "DEPARTMENTS"
      },
      {
       id : "DOCTORS",
      name : "DOCTORS"
      },
      {
        id : "DROPDOWN",
       name : "DROPDOWN"
       },
       {
        id : "CONTACT",
       name : "CONTACT"
       },
]
  return (
    <>
  <NavBar logo={logo} items={items} btn="Make an Appointment"/>
   <Hero bgImg='/assets/img/hero-carousel/hero-carousel-3.jpg' title='Temporibus autem quibudam' desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups." firstBtn="Read more"/>
   <div className="container mt-5">
   <div className="d-flex flex-wrap gap-3 justify-content-center"> {/* Controls the gap and responsiveness */}  
      <DynamicCard icon={FaHeartbeat} text="Lorem Ipsum: Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi" />
      <DynamicCard icon={FaPills} text="Sed ut perspici: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" />
      <DynamicCard icon={FaMicroscope} text="Magni Dolores: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia" />
      <DynamicCard icon={RiHourglass2Fill} text="Magni Dolores: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia" />

    </div>
    </div>
    <HelpSection />
    
    <AboutUs
      title="About Us"
      subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      imageUrl="/assets/img/about.jpg" // Replace with your actual image URL
      mainText={{
        heading: "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      }}
      points={[
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit.",
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ]}
      title1='Ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit.
      Ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
   
   />
    <div className="d-flex flex-wrap gap-3 justify-content-center"> {/* Controls the gap and responsiveness */}  
      <DynamicCard icon={FaUserDoctor } number='24' text="Doctors" />
      <DynamicCard icon={FaHospitalAlt } number='15' text="Departments" />
      <DynamicCard icon={ImLab } number='8' text="Research lab" />
      <DynamicCard icon={LiaAwardSolid} number='150' text=" Awards" />

    </div>
<div className='features p-5'>
  <AboutUs 
       
        imageUrl="/assets/img/features.jpg" // Replace with your actual image URL
        mainText={{
          heading: "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        }}
        points={[
          "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "Duis aute irure dolor in reprehenderit in voluptate velit.",
          "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        ]}
        title1='Ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit.
        Ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

  />
  </div>
  <ServicesSection />
      <ServiceCard />
      <AppointmentForm />
      <DepartmentsSection />
      <TestimonialSection />
      <Doctors/>
      <Pricing />
      <FAQ />
      <ContactSection/>
     <Info/>
     <Footer/>
    </>
  )
}

export default App