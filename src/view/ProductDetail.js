
import { useLocation } from 'react-router-dom';
import NavBar from '../component/Navbar/NavBar';
import ComponentBottonBar from '../component/ComponentHome/ComponentBottonBar';
// import ComponentTitleHome from '../component/ComponentHome/ComponentTitleHome';

const ProductDetail = (props) => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    // const region = searchParams.get('region');
    const title = searchParams.get('title');
    const image = searchParams.get("img");
    const intro = searchParams.get("intro");
    const price = searchParams.get("price");
    const content = searchParams.get("content");

    // console.log("price",price)
    // console.log("content", content)

    const setPriceJSON = JSON.parse(price);
    const setContentJSON = JSON.parse(content);
    const imgSetSplit =  image.split(",");

    // console.log(setPriceJSON);
    console.log(setContentJSON);

    return(
        <div className='' style={{

        }}>
            <div>
                <div className="translate-y-[-15px]">
                    <NavBar/>
                </div>
                <div className='h-[70px] bg-red-400'></div>
            </div>
            <div className='grid grid-cols-3'>
                {
                    imgSetSplit.map((el, idx) => (
                        <div key={idx}>
                            <img className='set-card-image ' src={`https://test-fetct-img-cloud-store-zt27agut7a-as.a.run.app/api/get/img/stream/${el}`}/>
                        </div>
                    ))
                }
            </div>
            <div className='' style={{
                backgroundImage: `url(https://wallpapercosmos.com/w/full/5/5/1/294267-3840x2160-desktop-4k-bangkok-wallpaper.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '110vh', // Adjust height as needed
            }} >
            <div className='w-[70%] h-[890px] overflow-y-auto m-auto translate-y-[60px] bg-zinc-100 border-[1px] rounded-lg mb-[30px] set-shadow'>
                <div className='ml-10'>
                    <div className=''>
                        <div className='text-[20px] mt-10 font-bold text-[#5F5F5F]'>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00DEE5" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd" />
                                </svg>
                                <div className='ml-4'>{title}</div>
                            </div>
                        </div>
                    </div>
                        
                    <div>
                        <div className='text-[20px] text-[#5F5F5F] mt-10 font-bold flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#00DEE5" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00DEE5" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                            </svg>
                            <div className='text-[#5F5F5F] ml-4'>
                                Introduction
                            </div>
                        </div>
                        <div className='text-[18px] mt-3 text-[#5F5F5F]'>{intro}</div>
                    </div>
                    <div className='mt-10'>
                        <div className='flex'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00DEE5" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd" />
                                    <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257ZM12.738 17.625l6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375Z" />
                                </svg>
                            </div>
                            <div className='text-[20px] text-[#5F5F5F] font-bold ml-4'>Prices</div>
                        </div>
                    
                        <div>
                            {
                                setPriceJSON.map((el, idx) => (
                                    <div key={idx} className='border-b-[1px] border-zinc-300 w-[250px]'>
                                        <div className='grid grid-cols-4 mt-3'>
                                            <div>
                                                <span className='mr-2'>Persons</span> 
                                                <span className='mr-10'>{el.people}</span>
                                                <span className='mr-2'>Price</span>
                                                <span>฿{el.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='mt-10'>
                        <div className='flex'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00DEE5" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd" />
                                    <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257ZM12.738 17.625l6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375Z" />
                                </svg>
                            </div>
                            <div className='text-[20px] font-bold text-[#5F5F5F] ml-4'>Activity</div>
                        </div>
                        
                        <div className='pb-10 text-[#5F5F5F]'>
                            {
                                setContentJSON.map((el, idx) => (
                                    <div className='mt-3' key={idx}>
                                        <div className='font-bold'>DAY {el.day}</div>
                                        <div className=''>{el.content}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
 
            <div>
                <ComponentBottonBar/>
            </div>
            
        </div>
    )
}

export default ProductDetail