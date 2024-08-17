import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ComponentCardShop = (props) => {
    const {
        region,
        title,
        intro,
        pricePerPerson,
        province,
        content,
        images
    } = props

    

    return (
        <>
            <div className='set-card w-[350px] h-[450px] rounded-lg'>
                <div className='text-center pt-2 font-bold'>{title}</div>
                <div className='mt-3'>
                    <img className='w-[350px] h-[180px] object-cover' src={JSON.parse(images)[0]}/>
                </div>
                <div className='mt-2 ml-3'>
                    {intro}
                </div>
                <div className='ml-5 translate-y-[80px]'>
                    <div className='text-gray-500' >Price start from</div>
                    <div className=''>
                        <div  className="text-yellow-500 text-[23px] font-bold">Person: {JSON.parse(pricePerPerson)[0].person}</div>
                        <div  className="text-yellow-500 text-[23px] font-bold">Price: {JSON.parse(pricePerPerson)[0].price}</div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ComponentCardShop