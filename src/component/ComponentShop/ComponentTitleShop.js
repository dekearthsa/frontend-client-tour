import {useState} from 'react';

const ComponentTitleShop = () => {

    const [menuSelector, setMenuSelector] = useState('North');

    const cssNorth = "h-[200px] border-[1px] border-zinc-50 rounded-t-lg bg-[#EDEDED]"
    const cssNorthSection = "h-[200px] border-[1px] border-zinc-50 rounded-t-lg bg-[#8E8E8E] text-white"
    const cssWest = "border-l-[1px] border-zinc-50 bg-[#EDEDED]"
    const cssWestSection = "border-l-[1px] border-zinc-50 bg-[#8E8E8E] text-white"
    const cssCentral = "border-l-[1px] border-r-[1px] border-zinc-50 bg-[#EDEDED]"
    const cssCentralSelection = "border-l-[1px] border-r-[1px] border-zinc-50 bg-[#8E8E8E] text-white"
    const cssNorthEast = "border-r-[1px] border-zinc-50 bg-[#EDEDED]"
    const cssNorthEastSelection = "border-r-[1px] border-zinc-50 bg-[#8E8E8E] text-white"
    const cssSouth = "rounded-bl-lg border-l-[1px] border-t-[1px] border-b-[1px] border-zinc-50 bg-[#EDEDED]"
    const cssSouthSelection = "rounded-bl-lg border-l-[1px] border-t-[1px] border-b-[1px] border-zinc-50 bg-[#8E8E8E] text-white"
    const cssEast = "rounded-br-lg border-[1px] border-zinc-50 bg-[#EDEDED]";
    const cssEastSelection = "rounded-br-lg border-[1px] border-zinc-50 bg-[#8E8E8E] text-white"

    const haddleSelectMenu = (evt) => {
        setMenuSelector(evt)
    }

    return (
        <>
            <div className="title">
                <h3>REGION</h3>
            </div>
            <div className="region-container mt-10 m-auto">
                <div className="w-[60%]  text-center m-auto">
                    <div className={menuSelector === 'North'? cssNorthSection:cssNorth} onClick={() => haddleSelectMenu("North")}>
                        <div className="mt-[85px]">North</div>
                    </div>
                    <div className="grid grid-cols-3 h-[200px] ">
                        <div className={menuSelector === 'West'? cssWestSection : cssWest} onClick={() => haddleSelectMenu("West")}>
                            <div className="mt-[85px]">
                                West
                            </div>
                        </div>
                        <div className={menuSelector === 'Central'? cssCentralSelection : cssCentral} onClick={() => haddleSelectMenu("Central")}>
                            <div className="mt-[85px]">
                                Central region
                            </div>
                        </div>
                        <div className={menuSelector === 'NorthEast'? cssNorthEastSelection : cssNorthEast} onClick={() => haddleSelectMenu("NorthEast")}>
                            <div className="mt-[85px]">
                                Northeast
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 h-[200px] ">
                        <div className={menuSelector === 'South'? cssSouthSelection : cssSouth} onClick={() => haddleSelectMenu("South")}>
                            <div className="mt-[85px]">South</div>
                        </div>
                        <div className={menuSelector === 'East'? cssEastSelection : cssEast} onClick={() => haddleSelectMenu("East")}>
                            <div className="mt-[85px]">Eastern Region</div>
                        </div>
                    </div>
                </div>
                <div className="text-center m-auto mt-10 border-b-[1px] border-zinc-300 w-[70%]"></div>
                <div className="w-[70%] m-auto">
                    <div className='text-[18px] font-bold mt-10'>{ menuSelector }</div>
                    <div className='mt-10'></div>
                </div>
            </div>
        </>
    )
}
export default ComponentTitleShop