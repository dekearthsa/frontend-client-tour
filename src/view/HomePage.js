import ComponentTitleHome from "../component/ComponentHome/ComponentTitleHome"
// import ComponentRecommand from "../component/ComponentHome/ComponentRecommand"
import ComponentPopularFeature from "../component/ComponentHome/ComponentPopularFeature"
import ComponentNavbarTour from "../component/ComponentHome/ComponentNavbarTour"
import ComponentChooseBrand from "../component/ComponentHome/ComponentChooseBrand"
import ComponentTopRate from "../component/ComponentHome/ComponentTopRate"
// import ComponentTest from "../component/ComponentTest/ComponentTest"
// import MultiImageStream from "../component/ComponentTest/MultiImageStream"
// import ComponentTestUploadContent from "../component/ComponentTest/ComponentTestUploadContent"

const HomePage = () => {

    return(
        <>  
            <ComponentTitleHome/>
            <ComponentPopularFeature/>
            <ComponentNavbarTour/>
            <div className="bg-gray-100">
                <ComponentChooseBrand />
            </div>
            <ComponentTopRate/>
            {/* <ComponentTest/> */}
            {/* <MultiImageStream/> */}
            {/* <ComponentTestUploadContent/> */}
        </>
    )
}

export default HomePage