import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blogs from '../Blogs/Blogs';
import Contactus from '../Contactus/Contactus';
import DentalCare from '../DentalCare/DentalCare';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <DentalCare></DentalCare>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contactus></Contactus>
            <Footer></Footer>
        </div>
    );
};

export default Home;