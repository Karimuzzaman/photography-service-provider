import React from 'react';
import About from '../About/About';
import Equipments from '../Equipments/Equipments';
import Servicehome from '../Servicehome/Servicehome';

const Home = () => {
    return (
        <div>
            <Servicehome></Servicehome>
            <About></About>
            <Equipments></Equipments>

        </div>
    );
};

export default Home;