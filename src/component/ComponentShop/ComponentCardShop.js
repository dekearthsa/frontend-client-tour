import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ComponentCardShop = (props) => {
    const {
        region,
        title,
        intro,
        price,
        img,
        content
    } = props

    // console.log("content obj => ", content)
    const setStringContent = JSON.stringify(content)

    const [isPrice, setIsPrice] = useState();

    useEffect(() => {
        const convertStringPrice = JSON.parse(price)
        setIsPrice(...convertStringPrice)
    },[])
    
    return (
        <>
                <div className="w-[350px]  border-[1px] border-zinc-300 mb-10 rounded-md ">
                    <div className="">
                        <img  className="set-card-image" src={`https://test-fetct-img-cloud-store-zt27agut7a-as.a.run.app/api/get/img/stream/${img[0]}`}/>
                    </div>
                    <div className="">
                        <div className="ml-3 mt-3 mb-3 font-bold">{title}</div>
                        <div className="set-scroll whitespace-pre-line ml-10" >
                            <p>{intro}</p>
                        </div>
                    </div>
                    <div className="mt-3 flex justify-end mr-5 translate-y-[-10px]">
                        <Link 
                            to={{
                                pathname:`/product/${title}`,
                                search: `?region=${encodeURIComponent(region)}&title=${encodeURIComponent(title)}&intro=${encodeURIComponent(intro)}&price=${encodeURIComponent(price)}&img=${encodeURIComponent([img])}&content=${encodeURIComponent(setStringContent)}`
                            }}
                            >
                            <button className="bg-red-400 text-white pl-2 pr-2 rounded-md" >Read more</button>
                        </Link>
                    </div>
                </div>
        </>
    )
}

export default ComponentCardShop