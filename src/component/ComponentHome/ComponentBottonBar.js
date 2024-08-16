// import whatapp from "../../../public/whatsapp.png"

const ComponentBottonBar = () => {
    return (
        <div id="c-bottom-bar" className=" bg-red-400 w-[100%] h-[150px] flex justify-between">
            <div>
                <div className="font-bold text-white ml-10 mt-3">CONTACT</div>
                <div className="flex mt-5">   
                    <div className="ml-10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF" class="w-6 h-6">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                    </div>
                    <div className="font-bold text-white ml-3">
                        reservation.psdntianna@gmail.com
                    </div>
                </div>
                <div className="flex mt-3">
                    <div className="ml-10">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                        </svg> */}
                        <img width={25} height={25} src={require("../../img/whatsapp (1).png")}/>
                    </div>
                    <div className="flex ml-3 font-bold text-white">
                        <div className="mr-2">+66898512076 ,</div>
                        <div>+66834784611</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="mr-10 mt-10">
                    <a href="https://www.facebook.com/psdcnxtravel" target="_blank">
                        <img width={30} height={30} src={require("../../img/facebook (1).png")}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ComponentBottonBar