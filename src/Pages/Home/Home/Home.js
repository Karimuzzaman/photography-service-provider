import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Equipments from '../Equipments/Equipments';
import Servicehome from '../Servicehome/Servicehome';


const Home = () => {
    return (
        <div>
            <Servicehome></Servicehome>
            <Banner></Banner>
            <About></About>
            <Equipments></Equipments>

        </div>
    );
};

export default Home;