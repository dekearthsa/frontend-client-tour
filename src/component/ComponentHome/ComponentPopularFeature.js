const ComponentPopularFeature = () => {
    return (
        <>
        <div className="w-[90%] m-auto mt-10">
            <div>
                <div className="text-gray-400 text-[18px]">Feature</div>
            </div>
            <div className="text-[32px] font-bold">
                <div>Popular Destinations</div>
            </div>
            <div className="lg:grid lg:grid-cols-4 lg:space-x-5 mt-10 mb-10">
                <div className="h-[300px] w-[280px] border-[1px] text-center rounded-xl">
                    <div>
                        <img className="rounded-t-xl h-[250px] object-cover" src="https://www.amazingasiatours.com/wp-content/uploads/2023/07/Thailand-floating-market-Damnoen-Saduak-1-scaled-600x348.jpg"/>
                    </div>
                    <div className="mt-3 font-bold">
                        Bangkok
                    </div>
                </div>
                <div  className="h-[300px] w-[280px] border-[1px] text-center rounded-xl">
                    <div>
                        <img className="rounded-t-xl h-[250px] object-cover" src="https://www.amazingasiatours.com/wp-content/uploads/2023/07/Thailand-Chiang-Mai-market-600x400.jpg"/>
                    </div>
                    <div className="mt-3 font-bold">
                        Chiang Mai
                    </div>
                </div>
                <div  className="h-[300px] w-[280px] border-[1px] text-center rounded-xl">
                    <div>
                        <img className="rounded-t-xl h-[250px] object-cover" src="https://www.amazingasiatours.com/wp-content/uploads/2023/07/Thailand-Khao-Sok-per-longtailboot-600x400.jpg"/>
                    </div>
                    <div className="mt-3 font-bold">
                        Khao Sok National Park
                    </div>
                </div>
                <div  className="h-[300px] w-[280px] border-[1px] text-center rounded-xl">
                    <div>
                        <img className="rounded-t-xl h-[250px] object-cover" src="https://www.amazingasiatours.com/wp-content/uploads/2023/07/Thailand-Phuket-sign-600x400.jpg"/>
                    </div>
                    <div className="mt-3 font-bold">
                        Phuket
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default ComponentPopularFeature