import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ComponentStarToprate from "./ComponentStarToprate"
import axios from "axios"



const ComponentPopularFeature =   () => {
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
        // console.log(lengthData)
        try{
            for (let i = 0; i < 4; i++) {
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
            if(demoPop[i].ord === 5){
                setArrayPop.push(demoPop[i])
            }   
        }
        const dataPopRnd = await funcRandomPopular(setArrayPop);
        setIsPopData(dataPopRnd)
    }

    useEffect(() => {
        haddleGetDataPopular();
    }, []);
    

    return (
        <>
        <div className="w-[90%] m-auto mt-10">
            <div>
                <div className="text-gray-400 text-[18px]">Feature</div>
            </div>
            <div className="text-[32px] font-bold flex justify-between">
                <div>Popular Destinations</div>
                <button className="flex">
                    <div className="text-[14px] mr-3">Setting sequence</div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className="lg:grid lg:grid-cols-4 lg:space-x-5 mt-10 mb-10">
            {
                // dataPop.map((el, idx) => (
                //     <div key={idx}>
                //         <Link
                //             to={{
                //                 pathname: `product/:${el.title}`,
                //                 search: `?region=${encodeURIComponent(el.region)}&title=${encodeURIComponent(el.title)}&intro=${encodeURIComponent(el.intro)}&price=${encodeURIComponent(el.price)}&img=${encodeURIComponent(el.images)}&content=${encodeURIComponent(JSON.stringify(el.content))}`
                //             }}
                //         >
                //             <div className="h-[300px] w-[280px] border-[1px] border-zinc-300 text-center rounded-xl ">
                //                 <div>
                //                     <img className="rounded-t-xl  set-card-popular-image" src={`https://test-fetct-img-cloud-store-zt27agut7a-as.a.run.app/api/get/img/stream/${el.images[0]}`}/>
                //                 </div>
                //                 <div className="mt-3 font-bold">
                //                     <div>{el.title}</div>
                //                 </div>
                //             </div>
                //         </Link>
                //     </div>
                // ))
                isPopData.map((el, idx) => (
                    <div key={idx}>
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
                            <div className="h-[300px] w-[280px] border-[1px] border-zinc-300 text-center rounded-xl ">
                                <div>
                                    <img className="rounded-t-xl  set-card-popular-image" src={JSON.parse(el.images)[0] }/>
                                </div>
                                <div className="mt-3 font-bold">
                                    <div>{el.title}</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))

            }
            {/* <div>
                {JSON.parse(demoPop[0].images)[0]}
            </div> */}
            </div>
        </div>

        </>
    )
}

export default ComponentPopularFeature