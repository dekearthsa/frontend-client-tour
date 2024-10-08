import { useState, useEffect } from 'react';
import ComponentHomeNavbar from '../component/ComponentHome/ComponentHomeNavbar';
import ComponentBottonBar from '../component/ComponentHome/ComponentBottonBar';

const ContactPage = () => {

    const demoPic = [
        "https://www.digi.com/images/blog/edge_compute_aws_greengrass-io",
        "https://www.digi.com/images/blog/edge_compute_aws_greengrass-io",
        "https://www.digi.com/images/blog/edge_compute_aws_greengrass-io",
        "https://www.digi.com/images/blog/edge_compute_aws_greengrass-io",
        "https://www.digi.com/images/blog/edge_compute_aws_greengrass-io",
    ]

    const demoVision = {
        imgUrl: "https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg",
        title: "Demo title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    }

    const demoServices = [
        {
            iconUrl: "https://cdn-icons-png.flaticon.com/512/2043/2043096.png",
            title: "Transportation"
        },
        {
            iconUrl: "https://cdn-icons-png.flaticon.com/512/8324/8324006.png",
            title: "Tour Planing"
        },
        {
            iconUrl: "https://cdn-icons-png.flaticon.com/512/4171/4171085.png",
            title: "Tailor Made Program"
        }
    ]

    const demoStaff = [
        {
            position: "CEO",
            rank: 1,
            imgUrl: "https://static.wikia.nocookie.net/blue-archive/images/c/ca/Rio_Icon.png",
            name: "Tsukatsuki Rio",
            contact: "Example@gmail.com"
        },
        {
            position: "CMO",
            rank: 2,
            imgUrl: "https://static.wikia.nocookie.net/blue-archive/images/7/7b/Yuuka_Icon.png",
            name: "Hayase Yuuka",
            contact: "Example@gmail.com"
        },
        {
            position: "CFO",
            rank: 2,
            imgUrl: "https://static.wikia.nocookie.net/blue-archive/images/3/31/Noa_Icon.png",
            name: "Ushio Noa",
            contact: "Example@gmail.com"
        },
        {
            position: "Driver1",
            rank: 3,
            imgUrl: "https://static.wikia.nocookie.net/blue-archive/images/9/97/Koyuki_Icon.png",
            name: "Kurosaki Koyuki",
            contact: "Example@gmail.com"
        },
        {
            position: "Driver2",
            rank: 3,
            imgUrl: "https://static.wikia.nocookie.net/blue-archive/images/7/7b/Alice_Icon.png",
            name: "Tendou Alice",
            contact: "Example@gmail.com"
        },
        {
            position: "Driver3",
            rank: 3,
            imgUrl: "https://static.wikia.nocookie.net/blue-archive/images/a/aa/Asuna_Schoolgirl_Icon.png",
            name: "Ichinose Asuna",
            contact: "Example@gmail.com"
        }
    ]

    const [countImg, setCountImg] = useState();
    const [isServices, setServices] = useState([]);
    const [isStaff, setStaff] = useState([])
    const [isVision, setVision] = useState({
        iconUrl: "",
        title: "",
        content: ""
    });
    const [staffHover, setStaffHover] = useState("");

    const funcCalRage = () => {
        setCountImg(demoPic.length - 2)
    }

    const haddleFetchAboutPage = async () => {
        setServices(demoServices);
        setVision(demoVision);
        setStaff(demoStaff)
    }

    useEffect(() => {
        haddleFetchAboutPage();
        funcCalRage();

    }, [])

    return (
        <>
            <div className="text-white  bg-black h-[100px] pt-10 font-bold w-[100%] z-10 ">
                <ComponentHomeNavbar />
            </div>
            <div className='bg-gradient-to-b from-slate-300 via-slate-100 to-slate-50 shadow-inner'>
                <div className='set-c-about md:w-[50%] pt-10 border-b-[1px] border-gray-500 md:h-[350px] m-auto'>
                    <div className='title-c-about suse-font-bold md:text-[30px] text-gray-600'>Our history</div>
                    <div className='set-grid-about-r'>
                        <div className='mt-[40px] text-[18px] center-about-p'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        <div
                            className='text-center set-img-text-01 duration-500 md:hover:text-[270px] md:hover:translate-y-[-70px]'
                        >
                            <div>HY</div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[50%] mt-10 border-b-[1px] border-gray-500 m-auto'>
                    <div className='text-[24px] sm:text-[28px] md:text-[30px] sm:text-right text-gray-600 font-bold'>Our vision</div>
                    <div className='flex flex-col md:flex-row items-center md:items-start mb-[60px]'>
                        <div className='w-full md:mt-1 mt-10 md:w-auto'>
                            <img className='rounded-lg shadow-xl w-full md:w-auto' src={isVision.imgUrl} alt="Vision" />
                        </div>
                        
                        <div className='mt-[40px] md:ml-10 text-[16px] sm:text-[18px] text-center md:text-left'>
                        <div className='font-semibold'>
                            {isVision.title}
                        </div>
                        <div className='mt-2'>
                            {isVision.content}
                        </div>
                        </div>
                    </div>
                </div>
                <div className='set-c-about md:w-[50%] mt-10 border-b-[1px] border-gray-500 md:h-[350px] m-auto'>
                    <div className='title-c-about suse-font-bold text-[30px]  text-gray-600'>Our services</div>
                    <div className='flex flex-wrap justify-around'>
                        {
                            isServices.map((el, idx) => {
                                return (
                                <div className='mt-10 w-[120px] sm:w-[140px] md:w-[160px]' key={idx}>
                                    <div className='text-center m-auto'>
                                    <img 
                                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 m-auto rounded-full mb-5 object-cover shadow-xl border-[2px] border-gray-700 duration-500 hover:translate-y-[-10px]' 
                                        src={el.iconUrl} 
                                        alt={el.title} 
                                    />
                                    </div>
                                    <div className='text-center m-auto'>
                                    <p className='text-[14px] sm:text-[16px] md:text-[18px] text-center font-bold'>
                                        {el.title}
                                    </p>
                                    </div>
                                </div>
                                );
                            })
                        }
                    </div>
                    {/* <div className='mt-[40px] text-[18px] center-about-p'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        <div
                            className='text-center set-img-text-03 duration-500 md:hover:text-[270px] md:hover:translate-y-[-70px]'
                        >03</div>
                    </div> */}
                </div>
                <div className='set-c-about md:w-[50%] pb-10  mt-10  m-auto'>
                    <div className='title-c-about suse-font-bold text-[30px] sm:text-right  text-gray-600'>Our staff</div>
                    <div className=''>
                    <div className='flex flex-wrap justify-center shadow-xl rounded-2xl pb-10 pt-5'>
                    {isStaff.map((el, idx) => {
                        if (el.rank === 1) {
                        return (
                            <div key={idx} className='relative'>
                            {/* Hover div */}
                            {staffHover === el.name ? (
                                <div className='absolute duration-500 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl text-center bg-black text-white h-[40px] w-[180px] sm:w-[230px] translate-y-[-30px] translate-x-0 sm:translate-x-[160px]'>
                                <div className='translate-y-[7px] font-bold'>{el.contact}</div>
                                </div>
                            ) : null}

                            {/* Image and details */}
                            <div
                                onMouseEnter={() => setStaffHover(el.name)}
                                onMouseLeave={() => setStaffHover('')}
                            >
                                <img
                                className='w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] m-auto rounded-full mb-5 object-cover shadow-xl'
                                src={el.imgUrl}
                                alt={el.name}
                                />
                                <div className='detail text-center'>
                                <div className='text-sm sm:text-base font-semibold'>{el.position}</div>
                                <div className='text-sm sm:text-base'>{el.name}</div>
                                </div>
                            </div>
                            </div>
                        );
                        }
                    })}
                    </div>

                    {/* Second rank staff */}
                    <div className='block sm:flex sm:flex-wrap sm:justify-around mt-10 shadow-xl rounded-2xl pb-10 pt-5'>
                    {isStaff.map((el, idx) => {
                        if (el.rank === 2) {
                        return (
                            <div key={idx} className='relative'>
                            {/* Hover div */}
                            {staffHover === el.name ? (
                                <div className='absolute rounded-tl-2xl rounded-tr-2xl rounded-br-2xl text-center bg-black text-white h-[40px] w-[180px] sm:w-[230px] translate-y-[-30px] translate-x-0 sm:translate-x-[130px]'>
                                <div className='translate-y-[7px] font-bold'>{el.contact}</div>
                                </div>
                            ) : null}

                            {/* Image and details */}
                            <div
                                onMouseEnter={() => setStaffHover(el.name)}
                                onMouseLeave={() => setStaffHover('')}
                            >
                                <img
                                className='w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] m-auto rounded-full mb-5 object-cover shadow-xl'
                                src={el.imgUrl}
                                alt={el.name}
                                />
                                <div className='detail text-center'>
                                <div className='text-sm sm:text-base font-semibold'>{el.position}</div>
                                <div className='text-sm sm:text-base'>{el.name}</div>
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
                            {staffHover === el.name ? (
                                <div className='absolute rounded-tl-2xl rounded-tr-2xl rounded-br-2xl text-center bg-black text-white h-[40px] w-[180px] sm:w-[230px] translate-y-[-30px] translate-x-0 sm:translate-x-[130px]'>
                                <div className='translate-y-[7px] font-bold'>{el.contact}</div>
                                </div>
                            ) : null}

                            {/* Image and details */}
                            <div
                                onMouseEnter={() => setStaffHover(el.name)}
                                onMouseLeave={() => setStaffHover('')}
                            >
                                <img
                                className='w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] m-auto rounded-full mb-5 object-cover shadow-xl'
                                src={el.imgUrl}
                                alt={el.name}
                                />
                                <div className='detail text-center'>
                                <div className='text-sm sm:text-base font-semibold'>{el.position}</div>
                                <div className='text-sm sm:text-base'>{el.name}</div>
                                </div>
                            </div>
                            </div>
                        );
                        }
                    })}
                    </div>


                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <ComponentBottonBar />
            </div>
        </>
    )
}

export default ContactPage