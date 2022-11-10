import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Equipments from '../Equipments/Equipments';
import Servicehome from '../Servicehome/Servicehome';
import { Helmet } from "react-helmet";


// creating home components.
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home-Photography-Service</title>
            </Helmet>
            <Servicehome></Servicehome>
            <Banner></Banner>
            <About></About>
            <Equipments></Equipments>

        </div>
    );
};

export default Home;