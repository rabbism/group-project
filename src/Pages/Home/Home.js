import React from 'react';
import Banner from '../../component/Banner/Banner';
import Footer from '../../component/Footer/Footer';
import Login from '../../component/Login/Login';
import NavBar from '../../component/NavBar/NavBar';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            
            {/* <Banner></Banner> */}
            <Login></Login>
            <Footer></Footer>
        </div>
    );
};

export default Home;