import { useNavigate } from 'react-router-dom';

const ComponentHomeNavbar = () => {

    const navigate = useNavigate();
    
    // const haddleContractPage = () => {
    //     navigate("/contract")
    // }

    const haddleAboutPage = () => {
        navigate("/about")
    }

    const haddleShopPage = () => {
        navigate("/shop")
    }

    const haddleHomePage = () => {
        navigate("/")
    }

    return(   
    <>
    <div className="w-[100%] z-10 flex justify-between pt-10 text-white font-bold absolute">
        <div>
            <div className="ml-[200px]">
                <button onClick={haddleHomePage}>
                    LOGO
                </button>
            </div>
        </div>
        <div className="mr-[200px] w-[30%] flex justify-around">
            {/* <div>
                <button>Destination</button>
            </div> */}
            <div>
                <button onClick={haddleShopPage}>Tour</button>
            </div>
            <div>
                
                <button onClick={haddleAboutPage}>About</button>
            </div>
            <div> 
                <a href='#c-bottom-bar'>
                    <button >Contract</button>  
                </a>
                
            </div>
        </div>
    </div>

    </>
        )
}

export default ComponentHomeNavbar