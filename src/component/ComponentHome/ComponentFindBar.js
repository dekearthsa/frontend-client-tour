import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ComponentFindBar = () => {

    const demoDataListRegion = [
        {
            "reigon": "Northern",
            "data": [
                "All",
                "Chiang Mai",
                "Chiang Rai",
                "Lampang",
                "Lamphun",
                "Mae Hong Son",
                "Nan",
                "Phayao",
                "Phrae",
                "Uttaradit"
            ],
        },
        {
            "reigon": "Northeastern",
            "data": [
                "All",
                "Amnat Charoen",
                "Bueng Kan",
                "Buriram",
                "Chaiyaphum",
                "Kalasin",
                "Khon Kaen",
                "Loei",
                "Maha Sarakham",
                "Mukdahan",
                "Nakhon Phanom",
                "Nakhon Ratchasima",
                "Nong Bua Lamphu",
                "Nong Khai",
                "Roi Et",
                "Sakon Nakhon",
                "Si Sa Ket",
                "Surin",
                "Ubon Ratchathani",
                "Udon Thani",
                "Yasothon"
            ],
        },
        {
            "reigon": "Central",
            "data": [
                "All",
                "Ang Thong",
                "Ayutthaya",
                "Bangkok",
                "Chai Nat",
                "Lopburi",
                "Nakhon Nayok",
                "Nakhon Pathom",
                "Nonthaburi",
                "Pathum Thani",
                "Phetchabun",
                "Phra Nakhon Si Ayutthaya",
                "Phichit",
                "Phitsanulok",
                "Saraburi",
                "Sing Buri",
                "Suphan Buri",
                "Uthai Thani"
            ],
        },
        {
            "reigon": "Eastern",
            "data": [
                "All",
                "Chachoengsao",
                "Chanthaburi",
                "Chonburi",
                "Prachin Buri",
                "Rayong",
                "Sa Kaeo",
                "Trat"
            ],
        },
        {
            "reigon": "Western",
            "data": [
                "All",
                "Kanchanaburi",
                "Phetchaburi",
                "Prachuap Khiri Khan",
                "Ratchaburi",
                "Tak"
            ],
        },
        {
            "reigon": "Southern",
            "data": [
                "All",
                "Chumphon",
                "Krabi",
                "Nakhon Si Thammarat",
                "Narathiwat",
                "Pattani",
                "Phang Nga",
                "Phatthalung",
                "Phuket",
                "Ranong",
                "Satun",
                "Songkhla",
                "Surat Thani",
                "Trang",
                "Yala"
            ]
        },
    ];

    const [isRegion, setRegion] = useState([]);
    const [isProvince, setProvince] = useState("");
    const navigate = useNavigate();


    // const haddleBtnSubmit = () => {
    //     console.log(region);
    // }

    const handleButtonClick = () => {
        // const listRegion = await axios.get("")
        
        if (isProvince !== "none"){
            const listRegion = demoDataListRegion;
            let isRegion;
            for(let i = 0; i < listRegion.length; i++){
                for(let j = 0; j < listRegion[i].data.length; j++){
                    if(listRegion[i].data[j] === isProvince){
                        isRegion = listRegion[i].reigon
                    }
                }
            }
            // console.log(isProvince, isRegion)
            navigate('/shop', {
                state: {
                    locationStateProvince: isProvince,
                    locationStateRegion: isRegion
                }
            });
        }
        
    };

    const funcFetchListRegion = async () => {
        // axios here fetch data 
        // setRegion(demoDataListRegion);
        let listProvince = [];
        for(let i = 0; i < demoDataListRegion.length; i++ ){
            for(let j = 0; j < demoDataListRegion[i].data.length; j++){
                if(demoDataListRegion[i].data[j] !== "All" ){
                    listProvince.push(demoDataListRegion[i].data[j])
                }
            }
        }
        setRegion(listProvince);
    }

    const funcInit = async () => {
        await funcFetchListRegion();
    }

    useEffect(() => {
        const fadeElements = document.querySelectorAll('.fade-ins');
        fadeElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.remove('opacity-0', 'translate-y-10');
                el.classList.add('opacity-100', 'translate-y-0');
            }, index * 200); // Faster cascading effect for a luxurious feel
        });
        funcInit();
    },[]);
    return (
        <div className="p-4 md:mr-[20%] mt-[8%]">
            <div className="text-center lg:translate-y-[-50px] md:text-right">
                <h1 className="font-bold text-white text-[24px] lg:text-4xl leading-tight  opacity-0 translate-y-10 fade-ins duration-1000 ease-out transform transition-all">
                    Explore Thailand With Us!
                </h1>
                <div className="flex justify-center md:justify-end mt-6 fade-ins opacity-0 translate-y-10 duration-1000 ease-out transform transition-all">
                    <select 
                        onChange={(e) => setProvince(e.target.value)} 
                        name="region" 
                        id="region" 
                        className="h-12 w-[220px] md:w-[300px] rounded-l-full px-4 text-gray-700"
                    >
                        <option value="none">Select Province</option>
                        {isRegion.map((el, idx) => (
                            <option key={idx} value={el}>{el}</option>
                        ))}
                    </select>
                    <button 
                        onClick={handleButtonClick} 
                        className="h-12 w-[100px] rounded-r-full bg-orange-500 hover:bg-orange-600 text-white font-bold transition-colors duration-300"
                    >
                        Find
                    </button>
                </div>
                <p className="mt-6 text-white font-bold fade-ins opacity-0 translate-y-10 duration-1000 ease-out transform transition-all">
                    Discover Thailand's hotspots and hidden gems with local experts.
                </p>
            </div>
        </div>
    );
}

export default ComponentFindBar