import imgHeader from "../../img/CA_ChiangMai_TH_Header.webp"
import ComponentHomeNavbar from "./ComponentHomeNavbar"
import ComponentFindBar from "./ComponentFindBar"

const ComponentTitleHome = () => {
    return (
        <>
            <div className="h-[100vh]" style={{backgroundImage: `url(${imgHeader})`}}>
                <ComponentHomeNavbar/>
                <div className="flex justify-end">
                    <ComponentFindBar/>
                </div>
            </div>
        </>
    )
}
export default ComponentTitleHome