import {useState, useEffect} from 'react';

const ContactPage = () => {

    const demoPic = [
        "https://www.digi.com/images/blog/edge_compute_aws_greengrass-io",
        "https://www.digi.com/images/blog/edge_compute_aws_greengrass-io",
        "https://www.digi.com/images/blog/edge_compute_aws_greengrass-io",
        "https://www.digi.com/images/blog/edge_compute_aws_greengrass-io",
        "https://www.digi.com/images/blog/edge_compute_aws_greengrass-io",
    ]

    const [countImg, setCountImg] = useState();

    const funcCalRage = () => {
        setCountImg(demoPic.length - 2)
    }

    useEffect(() => {
        funcCalRage();
    },[])

    return (
        <>
            <div className="set-con-page w-[100%]">
                <div class="grid grid-cols-2 gap-1 w-[650px]">
                    <div class="col-span-2">
                        <img src="https://www.digi.com/images/blog/edge_compute_aws_greengrass-io" alt="Gallery 1" className="object-cover  w-[100%] h-auto" />
                    </div>
                    <div class="col-span-1">
                        <img src="https://www.digi.com/images/blog/edge_compute_aws_greengrass-io" alt="Gallery 2" className="object-cover w-[100%] h-auto" />
                    </div>
                    <div className="col-span-1 ">
                        <div className='set-counting absolute w-[100%] text-gray-700 font-bold text-[30px] z-10 m-auto'>
                            +{countImg}
                        </div>
                        <img src="https://www.digi.com/images/blog/edge_compute_aws_greengrass-io" alt="Gallery 3" className="object-cover w-[100%] h-auto opacity-70" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage