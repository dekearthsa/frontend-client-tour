import imgHeader from "../img/CA_ChiangMai_TH_Header.webp"

const ShopPage =  () => {

    return(
        <>
            <div className="">
                {/* {
                    isloading === true? (<div className="loader fixed text-white"></div>): <></>
                } */}
            </div>
            <div className="relative h-[100vh]">
                <div 
                    style={{backgroundImage: `url(${imgHeader})`}} 
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                >
                </div>
                <div className="set-grid-shop relative z-10 region-container flex justify-around">
                    <div className="ml-10 mt-10 border-red-600 border-[2px]">siddfiksdfijsfij</div>
                    <div className="mt-10 border-red-600 border-[2px] mr-10">sdf</div>
                </div>
            </div>
        </>
    )
}

export default ShopPage