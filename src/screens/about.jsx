import Navbar from "../components/navbar"
import Footer from "../components/footer"
import imgRefe from "../assets/portfolio1.png"

const About = () => {
    return (
        <>
            <Navbar/>
            <div className="relative h-[300vh] w-screen bg-[#111111] text-white font-primary sm:h-[330vh] md:h-[400vh] lg:h-[200vh] xl:h-[200vh]">
                <div className="sticky top-0 min-h-screen flex flex-col justify-between pt-35 pb-10 z-10 lg:flex-row lg:items-end lg:pb-10">
                    <div className="px-5 sm:px-10 lg:pl-10 lg:pr-0 lg:w-1/2">
                        <p className=" text-[#FF4900] font-light tracking-tighter pl-1 sm:text-xl md:text-2xl lg:text-xl xl:text-2xl">I'm Melanie Brown</p>
                        <h1 className="tracking-[-0.1em] font-semibold text-5xl sm:text-6xl md:text-7xl xl:text-8xl">Web designer <span className="text-[#FF4900]">&</span> developer</h1>
                    </div>
                    <div className="tracking-tighter font-light px-5 sm:text-xl sm:px-10 lg:w-1/2 lg:px-14 lg:text-lg xl:text-xl">
                        <p>Merging design & code to craft engaging, high-performing websites—whether built from scratch or powered by CMS solutions.</p>
                    </div>
                </div>

                <div className="sticky top-0 min-h-screen bg-white text-black z-20 lg:flex xl:px-10">
                    <div className="flex flex-col justify-between min-h-screen pt-36 pb-20 px-5 sm:px-10 lg:w-1/2 lg:pt-32 lg:h-screen lg:pb-14 xl:pt-36">
                        <p className="font-light tracking-tighter sm:text-xl">With a passion for seamless digital experiences, I blend clean code with intuitive design. From dynamic front-end development in React, Tailwind & Framer Motion to custom solutions in Shopify, WordPress & Wix, I create tailored web experiences that are both visually striking and highly functional.</p>
                        <div className="flex justify-between">
                            <button className="border py-1 px-8 font-light text-sm sm:text-lg lg:hover:bg-black lg:hover:text-white lg:hover:border-black lg:transition-all lg:cursor-pointer">PORTFOLIO</button>
                            <button className="border py-1 px-6 font-light text-sm sm:text-lg lg:hover:bg-black lg:hover:text-white lg:hover:border-black lg:transition-all lg:cursor-pointer">DOWLOAD CV</button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between pt-38 px-5 sm:px-10 lg:w-1/2 lg:pt-30 lg:h-screen lg:pb-14">
                        <p className="text-[#FF4900] font-semibold text-3xl tracking-[-0.1em] sm:text-5xl sm:pb-10 lg:pb-5">how i get things done?</p>
                        <ul className="px-5 text-black font-light tracking-tighter pt-5 sm:pb-5">
                            <li className="border-b-1">001. UI DESIGN</li>
                            <li className="border-b-1 pt-2">002. WIREFRAMING</li>
                            <li className="border-b-1 pt-2">003. DEVELOPMENT</li>
                        </ul>
                        <img className="pt-10 pb-40 lg:pb-0 lg:pt-5" src={imgRefe}/>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default About