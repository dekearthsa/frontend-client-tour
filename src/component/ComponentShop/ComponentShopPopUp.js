
import { useState } from 'react';

const ComponentShopPopUp = () => {
    const [images, setImages] = useState([]);
    const [isIntroduction, setIsIntroduction] = useState();
    const [arrayPrice, setArrayPrice] = useState([]);
    const [arrayPerson, setArrayPeron] = useState([]);
    const [isPrice, setIsPrice] = useState("");
    const [isPerson, setIsPerson] = useState("");
    const [isBr, setIsBr] = useState();


    const handleImageChange = (event) => {
        const selectedFiles = event.target.files;
        if (selectedFiles) {
            const fileArray = Array.from(selectedFiles).map(file =>
                URL.createObjectURL(file)
            );
            setImages(prevImages => prevImages.concat(fileArray));
        }
    };

    const haddleAddingPricePerPerson = () => {
        if(isPrice === "" && isPerson === ""){
            alert("Person and Price can't be null.")
        }else{

            arrayPrice.push(isPrice)
            arrayPerson.push(isPerson)
            setArrayPrice([...arrayPrice]);
            setArrayPeron([...arrayPerson]);
        }
    }




    return (
        <div className="ml-10 mr-10 mt-10">
            <div className="flex">
                <div className="">Title</div>
                <div className="ml-5 border-b-[1px] border-zinc-500">
                    <input />
                </div>
            </div>
            <div className="mt-10 flex">
                <div>Select Images</div>
                <div className='ml-5'>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                    />
                </div>
            </div>
            <div className='mt-3'>
                {images.length > 0 && (
                    <div className='grid grid-cols-5'>
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Uploaded Image ${index + 1}`}
                                style={{ maxWidth: '100%', maxHeight: '200px', marginRight: '10px' }}
                            />
                        ))}
                    </div>
                )}
            </div>
            <div className="mt-10">
                <div>Introduction</div>
                <div>
                    <div className='flex mt-2'>
                        <div className='font-bold text-center rounded-sm mr-5 border-[1px] border-zinc-500 w-[20px] h-[20px]'>B</div>
                        <div className='font-bold text-center rounded-sm mr-5 border-[1px] border-zinc-500 w-[20px] h-[20px]'>br</div>
                    </div>
                    <div className='mt-3'>
                        <textarea className='border-[1px] border-zinc-500 w-[90%] h-[250px] rounded-lg'></textarea>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <div>
                    Adding activity 
                </div>
                <div className='mt-3'>
                    <div>
                        <div>Day</div>
                        <div><input type="number" className='border-[1px] border-zinc-500' /></div>
                    </div>
                    <div className='mt-5'>
                        <textarea className='border-[1px] border-zinc-500 w-[90%] h-[150px] rounded-md'></textarea>
                    </div>
                </div>
                <div>
                    <button className='border-[1px] border-zinc-500 w-[160px] rounded-md bg-zinc-500 text-white h-[40px] '>Create activity</button>
                </div>
            </div>
            <div className='mt-10'>
                <div>Prices per person</div>
                <div className=' mt-4'>
                    <div className='flex justify-start'>
                        <div className='flex'>
                            <span>PRICE</span>
                            <span className='ml-4'>
                                {
                                    arrayPrice.map((text,idx) => 
                                        <div key={idx}>{text}</div>
                                    )
                                }
                            </span>
                        </div>
                        <div className='ml-5 flex'>
                            <span>PERSON</span>
                            <span className='ml-4'>
                                {
                                    arrayPerson.map((text, idx) => 
                                        <div key={idx}>{text}</div>
                                    )
                                }
                            </span>

                        </div>
                    </div>
                    
                    <div className='flex justify-start mt-4'>
                        <div>
                            <div>Perice</div>
                            <input type='number' className='border-[1px] border-zinc-500 rounded-sm' value={isPrice} onChange={e => setIsPrice(e.target.value)} />
                        </div>

                        <div className='ml-10'>
                            <div>Person</div>
                            <input type='text' className='border-[1px] border-zinc-500 rounded-sm' value={isPerson} onChange={e => setIsPerson(e.target.value)}/>
                        </div>
                        <div className='mt-6 ml-5 flex'>
                            <button onClick={haddleAddingPricePerPerson}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            <button onClick={haddleAddingPricePerPerson}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-3">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z" clip-rule="evenodd" />
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <div className='pb-10'></div>
        </div>

       
    )
}

export default ComponentShopPopUp