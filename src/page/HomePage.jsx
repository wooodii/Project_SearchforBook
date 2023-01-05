import './HomePage.scss';
import React from "react";
import PageData from '../components/HomeItem/PageData';
import Index from '../components/HomeItem/Index';

const HomePage = () => {

    return ( 
        <>
        <div className="main-container" id="main-container">
        <ul>
        {PageData.map((projectitem, index) => (
            <Index key={index} project={projectitem} itemIndex={index}/> 
            ))}
        </ul>
        </div>
        </>
    );
}

export default HomePage;