import ComponentTitleHome from "../component/ComponentHome/ComponentTitleHome"
import ComponentPopularFeature from "../component/ComponentHome/ComponentPopularFeature"
import ComponentNavbarTour from "../component/ComponentHome/ComponentNavbarTour"
import ComponentTopRate from "../component/ComponentHome/ComponentTopRate"
import ComponentHomeNavbar from '../component/ComponentHome/ComponentHomeNavbar'
import ComponentBottonBar from '../component/ComponentHome/ComponentBottonBar';

const HomePage = () => {

    return(
        <>  
            <div className="text-white absolute  pt-5 mt-5 font-bold w-[100%] z-10">
                <ComponentHomeNavbar/>
            </div>  
            <ComponentTitleHome/>
            <ComponentPopularFeature/>
            <ComponentNavbarTour/>
            <div className="bg-gray-100">
                <ComponentTopRate/>
            </div>
            <ComponentBottonBar/>
        </>
    )
}

export default HomePage