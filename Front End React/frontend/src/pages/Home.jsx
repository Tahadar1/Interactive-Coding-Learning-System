import React from "react";
import { Fragment } from "react";
import HeroSection from "../Components/Hero-Section/HeroSection";
import Company from "../Components/Company-Section/Company";
import AboutUs from "../Components/About/AboutUs";
import Course from "../Components/Course-Section/Course";
import ChooseUs from "../Components/Choose-Us/ChooseUs";
import Features from "../Components/Feature-Section/Features";
import FreeCourse from "../Components/Free-Course-Section/FreeCourse";
import Testimonial from "../Components/Testimonial/Testimonial";
import Footer from "../Components/Footer/Footer";

const Home = () =>{
    return ( <Fragment>
        {/* <Header /> */}
        <HeroSection />
        <Company />
        <AboutUs />
        <Course />
        <ChooseUs />
        <Features />
        <FreeCourse />
        <Testimonial />
        {/* <Footer /> */}
    </Fragment>
    );
}

export default Home;