import React from 'react';
import CoverFlowCarousel from '../component/CoponentAbout/CoverFlowCarousel';
import ComponentHomeNavbar from '../component/ComponentHome/ComponentHomeNavbar';

const AboutPage = () => {
    const items = [
        {
            image: 'https://via.placeholder.com/150',
            title: 'Email',
            description: 'Contact us via email at reservation.psdntianna@gmail.com',
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'Phone',
            description: 'Reach us by phone at (+66) 898512076, 834784611',
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'Location',
            description: 'Visit us at 285, Nong Phueng Subdistrict, Saraphi District, Chiang Mai 50140',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            {/* Navbar Section */}
            <div className=" top-0 z-50 bg-black bg-opacity-70 shadow-lg">
                <ComponentHomeNavbar />
            </div>

            {/* Hero Section */}
            <div
                className="relative bg-cover bg-center"
                style={{
                    backgroundImage: `url(https://wallpapercosmos.com/w/full/5/5/1/294267-3840x2160-desktop-4k-bangkok-wallpaper.jpg)`,
                    height: '50vh',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white text-center px-4 tracking-wide">
                        Contact Us
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className=" bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white h-[80vh] shadow-2xl rounded-xl p-8 md:p-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center tracking-wide">
                        Get in Touch
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-12 text-center">
                        We would love to hear from you! Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.
                    </p>

                    {/* CoverFlowCarousel Component */}
                    <div className=''></div>
                    <div className="pt-[130px] mt-24 md:mt-32">
                        <CoverFlowCarousel items={items} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
