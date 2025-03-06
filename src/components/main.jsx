const Main = () => {
    return (
        <div className="sticky top-0 h-screen bg-[#C72626] flex flex-col items-center justify-center text-white shadow-xl z-10">
            <img
                src="/bg.gif"
                alt="Background animation"
                className="absolute top-0 left-0 w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 w-full h-full flex items-center justify-center text-white lg:items-end lg:pl-5 lg:pb-10">
                <div className="text-center lg:text-left">
                    <h1 className="text-[14vw] leading-[12vw] font-primary font-semibold tracking-tighter lg:text-8xl lg:leading-18 xl:text-9xl xl:leading-26">Web design <span className="text-[#FF4900]">&</span>  development<span className="text-[#FF4900]">.</span></h1>
                </div>
            </div>
        </div>
    )
}

export default Main;