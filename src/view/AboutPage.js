import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../component/Navbar/NavBar';

const AboutPage = () => {
    return (
        <div className=''>
             <div className="translate-y-[-15px]">
                <NavBar/>
            </div>
            <div className='h-[70px] bg-red-400'></div>
            <div className='' style={{
                backgroundImage: `url(https://wallpapercosmos.com/w/full/5/5/1/294267-3840x2160-desktop-4k-bangkok-wallpaper.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '110vh', // Adjust height as needed
            }} >

            <div className="w-[75%] h-[70vh] m-auto bg-zinc-200 translate-y-[65px] rounded-lg">
                <div>
                    <div>Email</div>
                    <div>reservation.psdntianna@gmail.com</div>
                </div>
                <div>
                    <div>WhatApp</div>
                    <div>+66898512076</div>
                    <div>+66834784611</div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default AboutPage;