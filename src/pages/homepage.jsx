import NavBar from "../components/NavBar";
import React from "react";
import ImageSlider from "../components/ImageSlider";
import AboutUs from "../components/AboutUs";
import Info from "../components/WhyUs"; 
import ContactUs from "../components/ContactUs";
const HomePage = () => {
    return (
        <>
            <NavBar />
        <ImageSlider/>
        <AboutUs />
        <Info />
       <ContactUs />
        </>
    );
}
export default HomePage;