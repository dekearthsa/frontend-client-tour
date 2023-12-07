import ComponentTitleHome from "../component/ComponentHome/ComponentTitleHome"
import ComponentRecommand from "../component/ComponentHome/ComponentRecommand"
import ComponentPopularFeature from "../component/ComponentHome/ComponentPopularFeature"
import ComponentNavbarTour from "../component/ComponentHome/ComponentNavbarTour"
import ComponentChooseBrand from "../component/ComponentHome/ComponentChooseBrand"

const HomePage = () => {

    return(
        <>  
            <ComponentTitleHome/>
            <ComponentRecommand/>
            <ComponentPopularFeature/>
            <ComponentNavbarTour/>
            <div className="bg-gray-100">
                <ComponentChooseBrand />
            </div>
            
        </>
    )
}

export default HomePage