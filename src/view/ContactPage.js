import { useState, useEffect } from 'react';
import ComponentHomeNavbar from '../component/ComponentHome/ComponentHomeNavbar';
import ComponentBottonBar from '../component/ComponentHome/ComponentBottonBar';
import ComponentLoading from '../component/ComponentAnimationLoading/ComponentLoading';
import axios from 'axios'
const ContactPage = () => {

    const [isLoading, setLoading] = useState(true);
    const [isServices, setServices] = useState([]);
    const [isStaff, setStaff] = useState([]);
    const [staffHover, setStaffHover] = useState("");
    const [isStorgeContent, setStorageContent] = useState({
        imgUrl: "",
        content: "",
    });
    const [isStorageVision, setStorageVision] = useState({
        imgUrl: "",
        content: "",
    });

    const haddleFetchAboutPage = async () => {
        const fetchServices = await axios.get("https://backend-node-about-505177410747.asia-southeast1.run.app/api/get/services")
        const fetchStaff = await axios.get("https://backend-node-about-505177410747.asia-southeast1.run.app/api/get/staff")
        const fetchAbout = await axios.get("https://backend-node-about-505177410747.asia-southeast1.run.app/api/get/about")

        // console.log("fetchStaff => ",fetchStaff.data)

        setServices(fetchServices.data);

        fetchAbout.data.map(async (el, idx) => {
            if (el.contentType === "history") {
                const setStruct = {
                    imgUrl: el.imgUrl,
                    title: el.title,
                    content: el.content
                }

                await setStorageContent(setStruct)

            } else if (el.contentType === "vision") {
                const setStruct = {
                    imgUrl: el.imgUrl,
                    title: el.title,
                    content: el.content
                }

                await setStorageVision(setStruct)

            }
        })
        // setContent(demoContent);
        setStaff(fetchStaff.data);
        setLoading(false)
    }

    useEffect(() => {
        haddleFetchAboutPage();
    }, [])

    return (
        <>
            <div className="text-white  bg-black h-[100px] pt-10 font-bold w-[100%] z-10 ">
                <ComponentHomeNavbar />
            </div>
            <div className='bg-gradient-to-b from-slate-300 via-slate-100 to-slate-50 shadow-inner'>
                <div className='set-c-about md:w-[80%] pt-10 border-b-[1px] border-gray-500 md:h-[450px] m-auto'>
                    <div className='title-c-about suse-font-bold md:text-[30px] text-gray-600'>Our history</div>
                    <div className='set-grid-about-r'>
                        <div className='mt-[40px] text-[18px] center-about-p '>
                            <div className='mt-[40px] md:ml-10 text-[16px] sm:text-[18px] text-center md:text-left'>
                                <div className='font-semibold'>
                                    {isStorgeContent.title}
                                </div>
                                <div className='mt-2'>
                                    {isStorgeContent.content}
                                </div>
                            </div>
                        </div>
                        <div
                            className='text-center set-img-text-01 duration-500 md:hover:text-[270px] mt-[50px] md:hover:translate-y-[-70px]'
                        >
                            <div>HY</div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[80%] mt-10 border-b-[1px] border-gray-500 m-auto md:m-auto'>
                    <div className='text-[24px] sm:text-[28px] md:text-[30px] sm:text-right text-gray-600 font-bold text-center md:text-right'>Our vision</div>
                    {
                        isLoading ? <ComponentLoading /> : <div className='flex flex-col md:flex-row items-center md:items-start mb-[60px]'>
                            <div className='w-full md:mt-1 mt-10 md:w-auto'>
                                <div>
                                    <img className='rounded-lg shadow-xl m-auto md:w-auto w-[300px] h-[300px]' src={isStorageVision.imgUrl} alt="Vision" />
                                </div>
                            </div>
                            <div className='mt-[40px] md:ml-10 text-[16px] sm:text-[18px] text-center md:text-left'>
                                {isStorageVision.content}
                            </div>
                        </div>
                    }
                </div>
                <div className='set-c-about md:w-[80%] mt-10 border-b-[1px] border-gray-500 md:h-[350px] m-auto'>
                    <div className='title-c-about suse-font-bold text-[30px]  text-gray-600'>Our services</div>
                    {
                        isLoading ? <ComponentLoading /> : <div className='md:flex md:flex-wrap md:justify-around'>
                            {
                                isServices.map((el, idx) => {
                                    return (
                                        <div className='mt-10 w-[120px] m-auto sm:w-[140px] md:w-[160px]' key={idx}>
                                            <div className='text-center m-auto'>
                                                <img
                                                    className='w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 m-auto rounded-full mb-5 object-cover shadow-xl border-[2px] border-gray-700 duration-500 hover:translate-y-[-10px]'
                                                    src={el.iconUrl}
                                                    alt={el.title}
                                                />
                                            </div>
                                            <div className='text-center m-auto'>
                                                <p className='font-bold'>
                                                    {el.title}
                                                </p>
                                            </div>

                                        </div>

                                    );
                                })
                            }

                        </div>
                    }
                </div>
                <div className='set-c-about md:w-[80%] pb-10  mt-10  m-auto'>
                    <div className='title-c-about suse-font-bold text-[30px] sm:text-right  text-gray-600'>Our staff</div>
                    {
                        isLoading ? <ComponentLoading /> : <div className=''>
                            <div className='flex flex-wrap justify-center md:shadow-xl md:rounded-2xl pb-10 pt-5'>
                                {isStaff.map((el, idx) => {
                                    if (el.rank === 1) {
                                        return (
                                            <div key={idx} className='relative'>
                                                {/* Hover div */}
                                                {staffHover === el.staff_name ? (
                                                    <div className='absolute duration-500 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl text-center bg-black text-white h-[40px] w-[180px] sm:w-[230px] translate-y-[-30px] translate-x-0 sm:translate-x-[160px]'>
                                                        <div className='translate-y-[7px] font-bold'>{el.contact}</div>
                                                    </div>
                                                ) : null}

                                                {/* Image and details */}
                                                <div
                                                    onMouseEnter={() => setStaffHover(el.staff_name)}
                                                    onMouseLeave={() => setStaffHover('')}
                                                >
                                                    <div className=''>
                                                    
                                                        <img
                                                            className='w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] m-auto rounded-full mb-5 object-cover shadow-xl'
                                                            src={el.imgUrl}
                                                            alt={el.staff_name}
                                                        />
                                                    </div>

                                                    <div className='detail text-center'>
                                                        <div className='text-sm sm:text-base font-semibold'>{el.position}</div>
                                                        <div className='text-sm sm:text-base'>{el.staff_name}</div>
                                                    </div>
                                                </div>

                                            </div>
                                        );
                                    }
                                })}
                            </div>
                            {/* Second rank staff */}
                            <div className='block sm:flex sm:flex-wrap sm:justify-around mt-10 md:shadow-xl rounded-2xl pb-10 pt-5'>
                                {isStaff.map((el, idx) => {
                                    if (el.rank === 2) {
                                        return (
                                            <div key={idx} className='relative'>
                                                {/* Hover div */}
                                                {staffHover === el.staff_name ? (
                                                    <div className='absolute rounded-tl-2xl rounded-tr-2xl rounded-br-2xl text-center bg-black text-white h-[40px] w-[180px] sm:w-[230px] translate-y-[-30px] translate-x-0 sm:translate-x-[130px]'>
                                                        <div className='translate-y-[7px] font-bold'>{el.contact}</div>
                                                    </div>
                                                ) : null}

                                                {/* Image and details */}
                                                <div
                                                    onMouseEnter={() => setStaffHover(el.staff_name)}
                                                    onMouseLeave={() => setStaffHover('')}
                                                >

                                                    <img
                                                        className='w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] m-auto rounded-full mb-5 object-cover shadow-xl'
                                                        src={el.imgUrl}
                                                        alt={el.staff_name}
                                                    />
                                                    <div className='detail text-center'>
                                                        <div className='text-sm sm:text-base font-semibold'>{el.position}</div>
                                                        <div className='text-sm sm:text-base'>{el.staff_name}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                            {/* Third rank staff */}
                            <div className='block sm:flex sm:flex-wrap sm:justify-around mt-10 shadow-xl rounded-2xl pb-10 pt-5'>
                                {isStaff.map((el, idx) => {
                                    if (el.rank === 3) {
                                        return (
                                            <div key={idx} className='relative'>
                                                {/* Hover div */}
                                                {staffHover === el.staff_name ? (
                                                    <div className='absolute rounded-tl-2xl rounded-tr-2xl rounded-br-2xl text-center bg-black text-white h-[40px] w-[180px] sm:w-[230px] translate-y-[-30px] translate-x-0 sm:translate-x-[130px]'>
                                                        <div className='translate-y-[7px] font-bold'>{el.contact}</div>
                                                    </div>
                                                ) : null}
                                                {/* Image and details */}
                                                <div
                                                    onMouseEnter={() => setStaffHover(el.staff_name)}
                                                    onMouseLeave={() => setStaffHover('')}
                                                >
    
                                                    <img
                                                        className='w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] m-auto rounded-full mb-5 object-cover shadow-xl'
                                                        src={el.imgUrl}
                                                        alt={el.staff_name}
                                                    />
                                                    <div className='detail text-center'>
                                                        <div className='text-sm sm:text-base font-semibold'>{el.position}</div>
                                                        <div className='text-sm sm:text-base'>{el.staff_name}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                })}

                            </div>

                        </div>
                    }
                </div>
            </div>
            <div className=''>
                <ComponentBottonBar />
            </div>
        </>
    )
}

export default ContactPage