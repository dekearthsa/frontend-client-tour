import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import ComponentStarToprate from "./ComponentStarToprate"
import axios from "axios"
// import ComponentLoading from '../ComponentAnimationLoading/ComponentLoading'
import  ComponentCardLoading  from '../ComponentAnimationLoading/ComponentCardLoading';
import DOMPurify from 'dompurify';


const ComponentPopularFeature =   () => {
    // const [dataPop,  setDataPop] = useState([]);
    const [isPopData, setIsPopData] = useState([]);
    const [loading, setLoading] = useState(true);

    const haddleDOMPurifyIntro = (innerHTMLData) => {
        const sanitizedInput = DOMPurify.sanitize(innerHTMLData)
        return <p className="text-gray-500 mt-2 w-[250px] h-[65px] break-words overflow-auto" dangerouslySetInnerHTML={{__html:sanitizedInput}}></p>
    }

    const haddleGetDataPopular = async () => {
        let arrayPopular = []
        const fetchProduct = await axios.get("https://backend-node-product-505177410747.asia-southeast1.run.app/api/get/product")
        for(let i = 0; i < fetchProduct.data.length; i++){
            if(fetchProduct.data[i].ord === 5){
                if(arrayPopular.length > 4){
                    break
                }
                arrayPopular.push(fetchProduct.data[i])
                
            }
        }
        setLoading(false)
        setIsPopData(arrayPopular);
    };

    useEffect(() => {
        haddleGetDataPopular();
    }, []);

    return (
        <div className="max-[100%]  mx-auto mt-12 mb-[60px]">
            <div className="text-center">
                <div className="text-gray-500 text-lg">Feature</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Popular Destinations</h2>
            </div>
            <div className="lg:flex lg:justify-center  mt-10">
                {
                    loading === true? <ComponentCardLoading/> : ""
                }
                {isPopData.map((el, idx) => (
                    <div key={idx} className="group w-[85%] m-auto lg:w-[450px]  lg:ml-5 lg:mr-5">
                        <Link
                            to={{
                                pathname: `product/:${el.title}`,
                                search: `?region=${encodeURIComponent(el.region)}
                                    &province=${encodeURIComponent(el.province)}
                                    &title=${encodeURIComponent(el.title)}
                                    &intro=${encodeURIComponent(el.intro)}
                                    &price=${encodeURIComponent(el.pricePerPerson)}
                                    &img=${encodeURIComponent(el.images)}
                                    &content=${encodeURIComponent(el.content)}
                                    &rate=${encodeURIComponent(el.rate)}
                                    &ord=${encodeURIComponent(el.ord)}
                                    &static_id=${encodeURIComponent(el.static_id)}
                                    `
                            }}
                        >
                            <div className="relative overflow-hidden bg-white rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                                <img
                                    className="h-64 w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    src={JSON.parse(el.images)[0]}
                                    alt={el.title}
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800 truncate">{el.title}</h3>
                                    {haddleDOMPurifyIntro(el.intro)}
                                    <div className="flex items-center justify-between mt-4">
                                        <span className="text-lg font-bold text-indigo-600">From ฿{JSON.parse(el.pricePerPerson)[0].price}</span>
                                        <span className="bg-indigo-500 text-white px-3 py-1 rounded-full">{el.rate} ★</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ComponentPopularFeature