import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ShopPage = () => {
    const demoDataListRegion = [
        {
            "reigon": "Northern",
            "data": [
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

    const navigate = useNavigate();
    const [listSelectionRegion, setSelectionRegion] = useState([]);
    const [isListRegion, setListReigon] = useState([]);
    const [listProvince, setListProvince] = useState([]);
    const [isSelectRegion, setSelectRegion] = useState("Northern");
    const [isProvince, setProvince] = useState("Chiang_Mai");

    const handleAboutPage = () => {
        navigate("/about");
    };

    const handleShopPage = () => {
        navigate("/shop");
    };

    const handleHomePage = () => {
        navigate("/");
    };

    const funcMod3 = async (funcType, arrayRegion) => {
        let setArray = [];
        const mod3Array = [];
        if (funcType === "region") {
            for (let i = 0; i < arrayRegion.length; i++) {
                setArray.push(arrayRegion[i].reigon);
                if ((i + 1) % 2 === 0 || i === arrayRegion.length - 1) {
                    mod3Array.push(setArray);
                    setArray = [];
                }
            }
        } else {
            for (let i = 0; i < arrayRegion.length; i++) {
                setArray.push(arrayRegion[i]);
                if ((i + 1) % 2 === 0 || i === arrayRegion.length - 1) {
                    mod3Array.push(setArray);
                    setArray = [];
                }
            }
        }
        return mod3Array;
    };

    // const haddleAddingList = async () => {
    //     let listRegion = [];
    // }

    const filterProvince = async (province) => {
        setProvince(province)
    }

    const handleFetchListRegion = async () => {
        const listRegion = await funcMod3("region", demoDataListRegion);
        setListReigon(listRegion);
    };

    const haddleFetchListProvince = async (regionIn) => {
        let ProvinceList = [];
        setSelectRegion(regionIn)
        for (let i = 0; i < demoDataListRegion.length; i++) {
            if (regionIn === demoDataListRegion[i].reigon) {
                ProvinceList = demoDataListRegion[i].data;
            }
        }
        const list3ModProvince = await funcMod3("province", ProvinceList);
        setProvince(list3ModProvince[0][0])
        setListProvince(list3ModProvince);
    };

    useEffect(() => {
        handleFetchListRegion();
        haddleFetchListProvince("Northern");
    }, []);

    return (
        <>
            <div className="relative h-[100vh]">
                <div className="flex justify-between pt-5 pb-5 relative z-[999px] bg-red-400 text-white font-bold">
                    <div className="ml-[200px]">
                        <button onClick={handleHomePage}>
                            LOGO
                        </button>
                    </div>
                    <div className="mr-[200px] w-[30%] flex justify-around">
                        <button onClick={handleShopPage}>Tour</button>
                        <button onClick={handleAboutPage}>About</button>
                        <a href='#c-bottom-bar'>
                            <button>Contact</button>
                        </a>
                    </div>
                </div>
                <div className="set-grid-shop relative z-10 region-container ">
                    <div className="ml-10 mt-[80px] bg-gray-100 p-5 rounded-lg h-[70vh]">
                        <div className="title-r text-[20px] font-bold">Region</div>
                        <div className='list-of-region'>
                            {isListRegion.map((array, idx) => (
                                <div className="flex justify-start mt-4" key={idx}>
                                    {array.map((el, idx2) => (
                                        <button
                                            key={idx2}
                                            className={
                                                el === isSelectRegion
                                                    ? "bg-gray-500 text-white font-bold pl-[10px] pr-[10px] rounded-lg mr-2"
                                                    : "bg-gray-300 pl-[10px] pr-[10px] rounded-lg mr-2"
                                            }
                                            onClick={() => {
                                                haddleFetchListProvince(el);
                                            }}
                                        >
                                            {el}
                                        </button>
                                    ))
                                    }
                                </div>
                            ))}
                        </div>
                        <div className="title-r text-[20px] mt-6 font-bold">Province</div>
                        <div>
                            {listProvince.map((array, idx) => (
                                <div className="flex justify-start mt-4" key={idx}>
                                    {array.map((el, idx2) => (
                                        <button
                                            key={idx2}
                                            className={
                                                el === isProvince
                                                    ? "bg-gray-500 text-white font-bold pl-[10px] pr-[10px] rounded-lg mr-2"
                                                    : "bg-gray-300 pl-[10px] pr-[10px] rounded-lg mr-2"
                                            }
                                            onClick={() => {
                                                filterProvince(el)
                                            }}
                                        >
                                            {el}
                                        </button>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-[80px]  mr-10">
                        <div className='title font-bold text-[20px]'>{isSelectRegion}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopPage;
