import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ComponentFindBar = () => {

    const demoDataListRegion = [
        {
            "reigon": "Northern",
            "data": [
                "All",
                "Chiang_Mai",
                "Chiang_Rai",
                "Lampang",
                "Lamphun",
                "Mae_Hong_Son",
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
                "Amnat_Charoen",
                "Bueng_Kan",
                "Buriram",
                "Chaiyaphum",
                "Kalasin",
                "Khon_Kaen",
                "Loei",
                "Maha_Sarakham",
                "Mukdahan",
                "Nakhon_Phanom",
                "Nakhon_Ratchasima",
                "Nong_Bua_Lamphu",
                "Nong_Khai",
                "Roi_Et",
                "Sakon_Nakhon",
                "Si_Sa_Ket",
                "Surin",
                "Ubon_Ratchathani",
                "Udon_Thani",
                "Yasothon"
            ],
        },
        {
            "reigon": "Central",
            "data": [
                "All",
                "Ang_Thong",
                "Ayutthaya",
                "Bangkok",
                "Chai_Nat",
                "Lopburi",
                "Nakhon_Nayok",
                "Nakhon_Pathom",
                "Nonthaburi",
                "Pathum_Thani",
                "Phetchabun",
                "Phra_Nakhon_Si_Ayutthaya",
                "Phichit",
                "Phitsanulok",
                "Saraburi",
                "Sing_Buri",
                "Suphan_Buri",
                "Uthai_Thani"
            ],
        },
        {
            "reigon": "Eastern",
            "data": [
                "All",
                "Chachoengsao",
                "Chanthaburi",
                "Chonburi",
                "Prachin_Buri",
                "Rayong",
                "Sa_Kaeo",
                "Trat"
            ],
        },
        {
            "reigon": "Western",
            "data": [
                "All",
                "Kanchanaburi",
                "Phetchaburi",
                "Prachuap_Khiri_Khan",
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
                "Nakhon_Si_Thammarat",
                "Narathiwat",
                "Pattani",
                "Phang_Nga",
                "Phatthalung",
                "Phuket",
                "Ranong",
                "Satun",
                "Songkhla",
                "Surat_Thani",
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
        funcInit();
    },[]);
 
    return(
        <>
            <div className="mr-[20%] mt-[8%]">
                <div>
                    <div className="font-bold text-white text-[35px] text-end">
                        <div>Explore</div>
                        <div>Amazing Thailand</div>
                    </div>
                    <div className="flex mt-10 justify-end">
                        {/* <input className="h-[50px] w-[300px] rounded-l-3xl" /> */}
                        <select   onChange={(e) => setProvince(e.target.value)} name="region" id="region" className="h-[50px] w-[300px] rounded-l-3xl">
                            <option value="none"></option>
                            {
                                isRegion.map((el, idx) => {
                                    return (
                                        <option value={el}>{el}</option>
                                    )
                                })
                            }
                            {/* <option value="Chiang-mai">Chiang mai</option>
                            <option value="Bangkok">Bangkok</option>
                            <option value="Phuket">Phuket</option>
                            <option value="Khon-Kaen">Khon Kaen</option> */}
                        </select>
                        <button onClick={handleButtonClick} className="w-[100px]  h-[50px] rounded-r-3xl bg-orange-400 text-white font-bold">Find</button>
                    </div>
                    <div className="mt-10 text-white font-bold">
                        Discover Thailand's hotspots and hidden gems with local experts
                    </div>
                </div>
            </div>

        </>
    )
}

export default ComponentFindBar