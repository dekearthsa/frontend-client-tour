import imgHeader from "../../img/CA_ChiangMai_TH_Header.webp"

const ComponentNavbarTour = () => {
    return (
        <>
            <div style={{backgroundImage: `url(${imgHeader})`}} className=" object-center object-cover text-center h-[370px] bg-gray-300 mt-5">
                <div className="pt-[150px]">
                    <div className=" text-white font-bold flex justify-center mb-2 h-[45px] ">
                        <div className="bg-black w-[650px] text-[30px]">
                            Explore Thailand on Our Award-Winning Tours
                        </div>
                        
                    </div>
                    <div className=" text-white font-bold flex justify-center">
                        <div className="bg-black  w-[350px]">
                            UNBEATABLE TOURS, LOVED BY TRAVELLERS
                        </div>
                    </div>
                    <div>
                        <button className="bg-red-400 text-white font-bold w-[150px] h-[40px] rounded-lg mt-10">SHOW TOUR</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComponentNavbarTour