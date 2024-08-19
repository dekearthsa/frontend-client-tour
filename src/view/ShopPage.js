import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
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
    const location = useLocation();
    const navigate = useNavigate();
    const { locationStateProvince, locationStateRegion } = location.state || {};

    const [isListRegion, setListReigon] = useState([]);
    const [listProvince, setListProvince] = useState([]);
    const [isSelectRegion, setSelectRegion] = useState("Northern");
    const [isProvince, setProvince] = useState("All");
    const [isProduct, setProduct] = useState([]);
    const [isShowProduct, setShowProduct] = useState([]);
    const [isLoadingProduct, setLoadingProduct] = useState([]);

    const handleNavigation = (path) => navigate(path);

    const funcMod3 = async (funcType, arrayRegion) => {
        let setArray = [];
        const mod3Array = [];
        arrayRegion.forEach((region, i) => {
            setArray.push(funcType === "region" ? region.reigon : region);
            if ((i + 1) % 2 === 0 || i === arrayRegion.length - 1) {
                mod3Array.push(setArray);
                setArray = [];
            }
        });
        return mod3Array;
    };

    const haddleFetchProduct = async (isLocationStateProvince) => {
        setLoadingProduct(true);
        setProduct(demoProductData);
        haddleFilterProduct(isSelectRegion, isLocationStateProvince || isProvince, demoProductData);
        setLoadingProduct(false);
    };

    const haddleFilterProduct = async (region, province, productData) => {
        setLoadingProduct(true);
        const filteredProducts = productData.filter((product) =>
            province === "All" ? product.region === region : product.region === region && product.province === province
        );
        setShowProduct(filteredProducts);
        setLoadingProduct(false);
    };

    const handleFetchListRegion = async () => {
        const listRegion = await funcMod3("region", demoDataListRegion);
        setListReigon(listRegion);
    };

    const haddleFetchListProvince = async (regionIn) => {
        setSelectRegion(regionIn);
        const ProvinceList = demoDataListRegion.find((region) => region.reigon === regionIn)?.data || [];
        const list3ModProvince = await funcMod3("province", ProvinceList);
        setListProvince(list3ModProvince);
    };

    const funcInit = async () => {
        await handleFetchListRegion();
        if (locationStateProvince) {
            setProvince(locationStateProvince);
            await haddleFetchListProvince(locationStateRegion);
            await haddleFetchProduct(locationStateProvince);
        } else {
            await haddleFetchListProvince("Northern");
            await haddleFetchProduct();
        }
    };

    useEffect(() => {
        funcInit();
    }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">
            <header className="flex justify-between p-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl">
                <button onClick={() => handleNavigation("/")} className="text-2xl font-bold">
                    LOGO
                </button>
                <nav className="flex space-x-8 text-lg">
                    <button onClick={() => handleNavigation("/shop")} className="hover:text-gray-400">
                        Tour
                    </button>
                    <button onClick={() => handleNavigation("/about")} className="hover:text-gray-400">
                        About
                    </button>
                    <a href="#c-bottom-bar">
                        <button className="hover:text-gray-400">Contact</button>
                    </a>
                </nav>
            </header>
            <main className="flex flex-col md:flex-row mt-10 px-6 md:px-20 space-y-10 md:space-y-0">
                <aside className="md:w-1/4 bg-white p-6 shadow-lg rounded-lg border border-gray-300">
                    <h3 className="text-xl font-semibold text-gray-900">Region</h3>
                    <div className="mt-4 space-y-3">
                        {isListRegion.map((array, idx) => (
                            <div className="flex space-x-2" key={idx}>
                                {array.map((el, idx2) => (
                                    <button
                                        key={idx2}
                                        className={`w-full text-center py-2 rounded-lg font-semibold transition-all ${
                                            el === isSelectRegion
                                                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                                                : 'bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200'
                                        }`}
                                        onClick={() => {
                                            setProvince("All");
                                            haddleFetchListProvince(el);
                                            haddleFilterProduct(el, isProvince, isProduct);
                                        }}
                                    >
                                        {el}
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mt-6">Province</h3>
                    <div className="mt-4 space-y-3">
                        {listProvince.map((array, idx) => (
                            <div className="flex space-x-2" key={idx}>
                                {array.map((el, idx2) => (
                                    <button
                                        key={idx2}
                                        className={`w-full text-center py-2 rounded-lg font-semibold transition-all ${
                                            el === isProvince
                                                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                                                : 'bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200'
                                        }`}
                                        onClick={() => {
                                            setProvince(el);
                                            haddleFilterProduct(isSelectRegion, el, isProduct);
                                        }}
                                    >
                                        {el}
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>
                </aside>
                <section className="lg:ml-10 md:w-3/4">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">{isSelectRegion}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {isShowProduct.map((product, idx) => (
                            <ComponentCardShop key={idx} {...product} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ShopPage;
