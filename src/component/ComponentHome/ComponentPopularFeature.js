import { useState, useEffect } from 'react';
import axios from "axios"

const ComponentPopularFeature =   () => {
    const [dataPop,  setDataPop] = useState([]);
    const haddleGetDataPopular = async  () => {
        try{
            const isData = await axios.get("https://test-node-fetch-popular-zt27agut7a-as.a.run.app/api/popular");
            if(isData.status === 200){
                setDataPop(isData.data);
                
            }else{
                alert(isData.status)
            }
        }catch(err){
            console.log(err)
        }

    }
    
    useEffect(() => {
        haddleGetDataPopular()
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
                dataPop.map((el, idx) => (
                    <div key={idx}>
                        <div className="h-[300px] w-[280px] border-[1px] border-zinc-300 text-center rounded-xl ">
                            <div>
                                <img className="rounded-t-xl  set-card-popular-image" src={`https://test-fetct-img-cloud-store-zt27agut7a-as.a.run.app/api/get/img/stream/${el.images[0]}`}/>
                            </div>
                            <div className="mt-3 font-bold">
                                <div>{el.title}</div>
                            </div>
                        </div>
                    </div>
                    ))
            }
            </div>
        </div>

        </>
    )
}

export default ComponentPopularFeature