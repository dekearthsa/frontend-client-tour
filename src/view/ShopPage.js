import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ComponentCardShop from '../component/ComponentShop/ComponentCardShop';

const ShopPage = () => {
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

    const demoProductData =   [
        {
            images: '["https://storage.googleapis.com/buckettourimage/350972157_153616411033126_3199632291503394336_n.jpg", "https://storage.googleapis.com/buckettourimage/351017818_921086038967933_330552210752581170_n.jpg", "https://storage.googleapis.com/buckettourimage/351305964_953195299133491_4476191252979091198_n.jpg", "https://storage.googleapis.com/buckettourimage/351466829_6666487973382201_5881326755189581098_n.jpg"]',
            title: "test1",
            province: "Chiang_Mai",
            region: "Northern",
            ord: 5,
            rate: 5,
            intro: "1111",
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa"},{"day":2, "content":"bbbbb"},{"day":3, "content":"Cccccc"}]'
        },
        {
            images:'["https://storage.googleapis.com/buckettourimage/350972157_153616411033126_3199632291503394336_n.jpg", "https://storage.googleapis.com/buckettourimage/351017818_921086038967933_330552210752581170_n.jpg", "https://storage.googleapis.com/buckettourimage/351305964_953195299133491_4476191252979091198_n.jpg", "https://storage.googleapis.com/buckettourimage/351466829_6666487973382201_5881326755189581098_n.jpg"]',
            title: "test2",
            province: "Chiang_Mai",
            region: "Northern",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa"},{"day":2, "content":"bbbbb"},{"day":3, "content":"Cccccc"}]'
        },
        {
            images:'["https://storage.googleapis.com/buckettourimage/350972157_153616411033126_3199632291503394336_n.jpg", "https://storage.googleapis.com/buckettourimage/351017818_921086038967933_330552210752581170_n.jpg", "https://storage.googleapis.com/buckettourimage/351305964_953195299133491_4476191252979091198_n.jpg", "https://storage.googleapis.com/buckettourimage/351466829_6666487973382201_5881326755189581098_n.jpg"]',
            title: "test3",
            province: "Lampang",
            region: "Northern",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa"},{"day":2, "content":"bbbbb"},{"day":3, "content":"Cccccc"}]'
        },
        {
            images:'["https://storage.googleapis.com/buckettourimage/350972157_153616411033126_3199632291503394336_n.jpg", "https://storage.googleapis.com/buckettourimage/351017818_921086038967933_330552210752581170_n.jpg", "https://storage.googleapis.com/buckettourimage/351305964_953195299133491_4476191252979091198_n.jpg", "https://storage.googleapis.com/buckettourimage/351466829_6666487973382201_5881326755189581098_n.jpg"]',
            title: "test4",
            province: "Lampang",
            region: "Northern",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa"},{"day":2, "content":"bbbbb"},{"day":3, "content":"Cccccc"}]'
        },
        {
            images:'["https://storage.googleapis.com/buckettourimage/350972157_153616411033126_3199632291503394336_n.jpg", "https://storage.googleapis.com/buckettourimage/351017818_921086038967933_330552210752581170_n.jpg", "https://storage.googleapis.com/buckettourimage/351305964_953195299133491_4476191252979091198_n.jpg", "https://storage.googleapis.com/buckettourimage/351466829_6666487973382201_5881326755189581098_n.jpg"]',
            title: "test5",
            province: "Lamphun",
            region: "Northern",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa"},{"day":2, "content":"bbbbb"},{"day":3, "content":"Cccccc"}]'
        },
        {
            images:'["https://storage.googleapis.com/buckettourimage/350972157_153616411033126_3199632291503394336_n.jpg", "https://storage.googleapis.com/buckettourimage/351017818_921086038967933_330552210752581170_n.jpg", "https://storage.googleapis.com/buckettourimage/351305964_953195299133491_4476191252979091198_n.jpg", "https://storage.googleapis.com/buckettourimage/351466829_6666487973382201_5881326755189581098_n.jpg"]',
            title: "test6",
            province: "Lamphun",
            region: "Northern",
            intro: "22222",
            ord: 4,
            rate: 4,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa"},{"day":2, "content":"bbbbb"},{"day":3, "content":"Cccccc"}]'
        },
        {
            images: '["https://storage.googleapis.com/buckettourimage/350972157_153616411033126_3199632291503394336_n.jpg", "https://storage.googleapis.com/buckettourimage/351017818_921086038967933_330552210752581170_n.jpg", "https://storage.googleapis.com/buckettourimage/351305964_953195299133491_4476191252979091198_n.jpg", "https://storage.googleapis.com/buckettourimage/351466829_6666487973382201_5881326755189581098_n.jpg"]',
            title: "test11",
            province: "Bangkok",
            region: "Central",
            ord: 5,
            rate: 5,
            intro: "1111",
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa"},{"day":2, "content":"bbbbb"},{"day":3, "content":"Cccccc"}]'
        },
        {
            images:'["https://storage.googleapis.com/buckettourimage/350972157_153616411033126_3199632291503394336_n.jpg", "https://storage.googleapis.com/buckettourimage/351017818_921086038967933_330552210752581170_n.jpg", "https://storage.googleapis.com/buckettourimage/351305964_953195299133491_4476191252979091198_n.jpg", "https://storage.googleapis.com/buckettourimage/351466829_6666487973382201_5881326755189581098_n.jpg"]',
            title: "test21",
            province: "Bangkok",
            region: "Central",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa"},{"day":2, "content":"bbbbb"},{"day":3, "content":"Cccccc"}]'
        },
        {
            images:'["https://storage.googleapis.com/buckettourimage/350972157_153616411033126_3199632291503394336_n.jpg", "https://storage.googleapis.com/buckettourimage/351017818_921086038967933_330552210752581170_n.jpg", "https://storage.googleapis.com/buckettourimage/351305964_953195299133491_4476191252979091198_n.jpg", "https://storage.googleapis.com/buckettourimage/351466829_6666487973382201_5881326755189581098_n.jpg"]',
            title: "test31",
            province: "Bangkok",
            region: "Central",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa"},{"day":2, "content":"bbbbb"},{"day":3, "content":"Cccccc"}]'
        },
        {
            images:'["https://storage.googleapis.com/buckettourimage/350972157_153616411033126_3199632291503394336_n.jpg", "https://storage.googleapis.com/buckettourimage/351017818_921086038967933_330552210752581170_n.jpg", "https://storage.googleapis.com/buckettourimage/351305964_953195299133491_4476191252979091198_n.jpg", "https://storage.googleapis.com/buckettourimage/351466829_6666487973382201_5881326755189581098_n.jpg"]',
            title: "test41",
            province: "Ang_Thong",
            region: "Central",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa"},{"day":2, "content":"bbbbb"},{"day":3, "content":"Cccccc"}]'
        },
        {
            images:'["https://storage.googleapis.com/buckettourimage/350972157_153616411033126_3199632291503394336_n.jpg", "https://storage.googleapis.com/buckettourimage/351017818_921086038967933_330552210752581170_n.jpg", "https://storage.googleapis.com/buckettourimage/351305964_953195299133491_4476191252979091198_n.jpg", "https://storage.googleapis.com/buckettourimage/351466829_6666487973382201_5881326755189581098_n.jpg"]',
            title: "test51",
            province: "Ayutthaya",
            region: "Central",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa"},{"day":2, "content":"bbbbb"},{"day":3, "content":"Cccccc"}]'
        },
        {
            images:'["https://storage.googleapis.com/buckettourimage/350972157_153616411033126_3199632291503394336_n.jpg", "https://storage.googleapis.com/buckettourimage/351017818_921086038967933_330552210752581170_n.jpg", "https://storage.googleapis.com/buckettourimage/351305964_953195299133491_4476191252979091198_n.jpg", "https://storage.googleapis.com/buckettourimage/351466829_6666487973382201_5881326755189581098_n.jpg"]',
            title: "test61",
            province: "Ayutthaya",
            region: "Central",
            intro: "22222",
            ord: 4,
            rate: 4,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa"},{"day":2, "content":"bbbbb"},{"day":3, "content":"Cccccc"}]'
        },
    ]

    const navigate = useNavigate();
    const [listSelectionRegion, setSelectionRegion] = useState([]);
    const [isListRegion, setListReigon] = useState([]);
    const [saveListProvince, setSaveListProvince] = useState([]);
    const [listProvince, setListProvince] = useState([]);
    const [isSelectRegion, setSelectRegion] = useState("Northern");
    const [isProvince, setProvince] = useState("All");
    const [isProduct, setProduct] = useState([]);
    const [isShowProduct, setShowProduct] = useState([]);
    const [isLoadingProduct, setLoadingProduct] = useState([]);


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

    const haddleFetchProduct = async () => {
        setLoadingProduct(true);
        setProduct(demoProductData);
        haddleFilterProduct(isSelectRegion, isProvince, demoProductData, false);
        setLoadingProduct(false);
    }

    


    const haddleFilterProduct = async (region, province, productData, switchRegion) => {
        // console.log(region, province, switchRegion)
        setLoadingProduct(true);
        let arrayShowProduct = []

            if(province === "All"){
                for(let i = 0; i < productData.length; i++){
                    if (region === productData[i].region){
                        arrayShowProduct.push(productData[i]);
                    }
                }
                setShowProduct(arrayShowProduct);
                setLoadingProduct(false);
            }else{
                for(let i = 0; i < productData.length; i++){
                    if (region === productData[i].region && province === productData[i].province){
                        arrayShowProduct.push(productData[i]);
                    }
                }
                setShowProduct(arrayShowProduct);
                setLoadingProduct(false);
            }
            

    }

    // const filterProvince = async (province) => {
    //     await setProvince(province);
    // }

    const handleFetchListRegion = async () => {
        const listRegion = await funcMod3("region", demoDataListRegion);
        setListReigon(listRegion);
    };

    const haddleFetchListProvince = async (regionIn) => {
        let ProvinceList = [];
        setSaveListProvince(demoDataListRegion);
        setSelectRegion(regionIn);
        for (let i = 0; i < demoDataListRegion.length; i++) {
            if (regionIn === demoDataListRegion[i].reigon) {
                ProvinceList = demoDataListRegion[i].data;
            }
        }
        const list3ModProvince = await funcMod3("province", ProvinceList);
        setListProvince(list3ModProvince);
    };

    const funcInit = async () => {
        await handleFetchListRegion();
        await haddleFetchListProvince("Northern");
        await haddleFetchProduct();
    }

    useEffect( () => {
        funcInit();
    }, []);

    // useEffect(() => {
    // }, [isProvince])

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
                    <div className="ml-10 mt-[50px] bg-gray-100 p-5 rounded-lg h-[105vh]">
                        <div className="title-r text-[20px] font-bold text-gray-600">Region</div>
                        <div className='list-of-region'>
                            {isListRegion.map((array, idx) => (
                                <div className="flex justify-start mt-4" key={idx}>
                                    {array.map((el, idx2) => (
                                        <button
                                            key={idx2}
                                            className={
                                                el === isSelectRegion
                                                    ? "bg-gray-500 text-white font-bold pl-[10px] pr-[10px] rounded-lg mr-2"
                                                    : "bg-gray-300 text-gray-600 pl-[10px] pr-[10px] rounded-lg mr-2"
                                            }
                                            onClick={() => {
                                                setProvince("All");
                                                // console.log(isProvince);
                                                haddleFetchListProvince(el);
                                                haddleFilterProduct(el, isProvince, isProduct, true)
                                            }}
                                        >
                                            {el}
                                        </button>
                                    ))
                                    }
                                </div>
                            ))}
                        </div>
                        <div className="title-r text-[20px] mt-6 font-bold text-gray-600">Province</div>
                        <div>
                            {listProvince.map((array, idx) => (
                                <div className="flex justify-start mt-4" key={idx}>
                                    {array.map((el, idx2) => (
                                        <button
                                            key={idx2}
                                            className={
                                                el === isProvince
                                                    ? "bg-gray-500 text-white font-bold pl-[10px] pr-[10px] rounded-lg mr-2"
                                                    : "bg-gray-300 text-gray-600 pl-[10px] pr-[10px] rounded-lg mr-2"
                                            }
                                            onClick={() => {
                                                // filterProvince(el)
                                                setProvince(el);
                                                haddleFilterProduct(isSelectRegion, el, isProduct, false)
                                            }}
                                        >
                                            {el}
                                        </button>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-[50px] mr-10 ">
                        <div className='title font-bold text-[20px] bg-gray-200 pl-5 text-gray-600 rounded-lg'>{isSelectRegion}</div>
                        <div className='grid grid-cols-3 gap-4 mt-5 mb-5  h-[100vh] overflow-scroll rounded-lg'>
                            {
                                isShowProduct.map((el, idx) => {
                                    return (
                                        <div  key={idx}>
                                            {/* {el.title} */}
                                            <ComponentCardShop 
                                                region={el.region}
                                                title={el.title}
                                                intro={el.intro}
                                                pricePerPerson={el.pricePerPerson}
                                                province= {el.province}
                                                content= {el.content}
                                                images={el.images}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopPage;
