import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

// import ComponentStarToprate from "./ComponentStarToprate";

const ComponentTopRate = () => {
    const [dataPop,  setDataPop] = useState([]);
    const [isPopData, setIsPopData] = useState([]);
    const demoPop = [
        {
            images: '["https://storage.googleapis.com/buckettourimage/350972157_153616411033126_3199632291503394336_n.jpg", "https://storage.googleapis.com/buckettourimage/351017818_921086038967933_330552210752581170_n.jpg", "https://storage.googleapis.com/buckettourimage/351305964_953195299133491_4476191252979091198_n.jpg", "https://storage.googleapis.com/buckettourimage/351466829_6666487973382201_5881326755189581098_n.jpg"]',
            title: "test1",
            region: "north",
            ord: 5,
            rate: 5,
            intro: "1111",
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa"},{"day":2, "content":"bbbbb"},{"day":3, "content":"Cccccc"}]'
        },
        {
            images:'["https://storage.googleapis.com/buckettourimage/350972157_153616411033126_3199632291503394336_n.jpg", "https://storage.googleapis.com/buckettourimage/351017818_921086038967933_330552210752581170_n.jpg", "https://storage.googleapis.com/buckettourimage/351305964_953195299133491_4476191252979091198_n.jpg", "https://storage.googleapis.com/buckettourimage/351466829_6666487973382201_5881326755189581098_n.jpg"]',
            title: "test2",
            region: "north",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa"},{"day":2, "content":"bbbbb"},{"day":3, "content":"Cccccc"}]'
        },
        {
            images:'["https://storage.googleapis.com/buckettourimage/350972157_153616411033126_3199632291503394336_n.jpg", "https://storage.googleapis.com/buckettourimage/351017818_921086038967933_330552210752581170_n.jpg", "https://storage.googleapis.com/buckettourimage/351305964_953195299133491_4476191252979091198_n.jpg", "https://storage.googleapis.com/buckettourimage/351466829_6666487973382201_5881326755189581098_n.jpg"]',
            title: "test3",
            region: "north",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa"},{"day":2, "content":"bbbbb"},{"day":3, "content":"Cccccc"}]'
        },
        {
            images:'["https://storage.googleapis.com/buckettourimage/350972157_153616411033126_3199632291503394336_n.jpg", "https://storage.googleapis.com/buckettourimage/351017818_921086038967933_330552210752581170_n.jpg", "https://storage.googleapis.com/buckettourimage/351305964_953195299133491_4476191252979091198_n.jpg", "https://storage.googleapis.com/buckettourimage/351466829_6666487973382201_5881326755189581098_n.jpg"]',
            title: "test4",
            region: "north",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa"},{"day":2, "content":"bbbbb"},{"day":3, "content":"Cccccc"}]'
        },
        {
            images:'["https://storage.googleapis.com/buckettourimage/350972157_153616411033126_3199632291503394336_n.jpg", "https://storage.googleapis.com/buckettourimage/351017818_921086038967933_330552210752581170_n.jpg", "https://storage.googleapis.com/buckettourimage/351305964_953195299133491_4476191252979091198_n.jpg", "https://storage.googleapis.com/buckettourimage/351466829_6666487973382201_5881326755189581098_n.jpg"]',
            title: "test5",
            region: "north",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa"},{"day":2, "content":"bbbbb"},{"day":3, "content":"Cccccc"}]'
        },
        {
            images:'["https://storage.googleapis.com/buckettourimage/350972157_153616411033126_3199632291503394336_n.jpg", "https://storage.googleapis.com/buckettourimage/351017818_921086038967933_330552210752581170_n.jpg", "https://storage.googleapis.com/buckettourimage/351305964_953195299133491_4476191252979091198_n.jpg", "https://storage.googleapis.com/buckettourimage/351466829_6666487973382201_5881326755189581098_n.jpg"]',
            title: "test6",
            region: "north",
            intro: "22222",
            ord: 4,
            rate: 4,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa"},{"day":2, "content":"bbbbb"},{"day":3, "content":"Cccccc"}]'
        },
    ]

    const funcRandomPopular = async (data) => {
        let setData = data;
        let lengthData = data.length;
        const dupIdx = [];
        const setDataPop = [];
        try{
            for (let i = 0; i < 3; i++) {
                while (true){
                    const rndIdx = Math.floor(Math.random() * lengthData);
                    if(!dupIdx.includes(rndIdx)){
                        dupIdx.push(rndIdx)
                        setDataPop.push(setData[rndIdx])
                        break
                    }
                }
            }
            return setDataPop
        }catch(err){
            return setDataPop
        }
    }

    const haddleGetDataPopular = async () => {
        const setArrayPop = []
        //try{
        //  const isData = await axios.get("https://test-node-fetch-popular-zt27agut7a-as.a.run.app/api/popular");
        //  if(isData.status === 200){
        //      setDataPop(isData.data);
        //      for(let i = 0; i < dataPop.length; i++) {
        //          if(dataPop[i].ord === 5){
        //          setArrayPop.push(dataPop[i])
        //      }   
        //   }
        // const dataPopRnd = await funcRandomPopular(setArrayPop);
        // setIsPopData(dataPopRnd)
        //  }else{
        //      alert(isData.status)
        //  }
        //}catch(err){
        //  console.log(err)
        //}
        // 


        for(let i = 0; i < demoPop.length; i++) {
            if(demoPop[i].rate === 5){
                setArrayPop.push(demoPop[i])
            }   
        }
        const dataPopRnd = await funcRandomPopular(setArrayPop);
        // console.log(dataPopRnd)
        setIsPopData(dataPopRnd)
        console.log(isPopData)
    }


    useEffect(() => {
        haddleGetDataPopular();
    }, []);

    useEffect(() => {
    }, [isPopData]);

    return (
        <>
            <div className="p-10 w-[90%] m-auto ">
                <div className="text-gray-500 text-[18px]">Special Offers</div>
                <div className="text-[32px] font-bold">Top Rated Tours</div>
                <div className="lg:flex lg:justify-around mt-10">
                    {
                        isPopData.map((el, idx) => (
                        <Link
                            to={{
                                pathname: `product/:${el.title}`,
                                search: `?region=${encodeURIComponent(el.region)}
                                &title=${encodeURIComponent(el.title)}
                                &intro=${encodeURIComponent(el.intro)}
                                &price=${encodeURIComponent(el.pricePerPerson)}
                                &img=${encodeURIComponent(el.images)}
                                &content=${encodeURIComponent(el.content)}
                                &rate=${encodeURIComponent(el.rate)}`
                            }}
                        >
                            <div className="c-card border-[1px] w-[400px] h-[500px] rounded-2xl">
                                <div className="c-image">
                                    <img className="lg:w-[400px] h-[250px] object-cover rounded-t-2xl" src={JSON.parse(el.images)[0]} />
                                </div>
                                <div className="c-detail ml-5">
                                    <div className="text-gray-500 text-[18px] mt-5">Multi-day tour</div>
                                    <div className="c-rate flex justify-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D1D503" class="w-6 h-6">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D1D503" class="w-6 h-6">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D1D503" class="w-6 h-6">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D1D503" class="w-6 h-6">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D1D503" class="w-6 h-6">
                                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-[18px] font-bold">
                                        {el.title}
                                    </div>
                                    <div className='text-[14px] mt-1'>
                                        {el.intro}
                                    </div>
                                    <div className="mt-[50px] text-gray-500"> The price start from</div>
                                    <div className="text-yellow-500 text-[23px] font-bold">฿ {JSON.parse(el.pricePerPerson)[0]['price']}</div>
                                </div>
                            </div>
                        </Link>
                    ))
                    }
                    
                </div>
                <div className="mb-10"></div>
            </div>
        </>
    )
}

export default ComponentTopRate