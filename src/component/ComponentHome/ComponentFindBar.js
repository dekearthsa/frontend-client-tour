const ComponentFindBar = () => {
    return(
        <>
            <div className="mr-[20%] mt-[15%]">
                <div>
                    <div className="font-bold text-white text-[35px] text-end">
                        <div>Explore</div>
                        <div>Amazing Thailand</div>
                    </div>
                    <div className="flex mt-10 justify-end">
                        <input className="h-[50px] w-[300px] rounded-l-3xl"/>
                        <button className="w-[100px]  h-[50px] rounded-r-3xl bg-orange-400 text-white font-bold">Find</button>
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