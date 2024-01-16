import {useState} from 'react';



const ComponentFindBar = () => {

    const [region, setRegion] = useState("");
    
    const haddleBtnSubmit = () => {
        console.log(region);
    }
 
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
                        <select   onChange={(e) => setRegion(e.target.value)} name="region" id="region" className="h-[50px] w-[300px] rounded-l-3xl">
                            <option value="none"></option>
                            <option value="Chiang-mai">Chiang mai</option>
                            <option value="Bangkok">Bangkok</option>
                            <option value="Phuket">Phuket</option>
                            <option value="Khon-Kaen">Khon Kaen</option>
                        </select>
                        <button onClick={haddleBtnSubmit} className="w-[100px]  h-[50px] rounded-r-3xl bg-orange-400 text-white font-bold">Find</button>
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