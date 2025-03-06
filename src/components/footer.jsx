import logo from "../assets/navbar-logo.svg";
import logoCompleto from "../assets/melanieFullLogo.svg"

const Footer = () => {
    return (
        <footer className="font-primary tracking-tighter pt-5 bg-[#111111] w-screen">
            <div className="flex justify-center">
                <div className=" w-[90vw]"/>
            </div>
            <div className="flex justify-between items-center pb-28 px-5 sm:px-10 lg:px-14 xl:px-20">
                <p className="text-white font-light text-lg md:text-xl">web design & development</p>
                <a href="/" aria-label="Ir al inicio">
                    <img src={logo} alt="Melanie Brown's Logo" className="w-8 md:w-10"/>
                </a>
            </div>
            <div className="flex justify-between items-end text-white font-light px-5 pb-14 text-sm sm:px-10 md:text-base lg:px-14 xl:px-20">
                <ul>
                    <li>
                        <a href="https://wa.me/5493487532846" target="_blank" rel="noopener noreferrer" className="lg:hover:text-[#FF4900] transition-all">whatsapp</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/brown-melanie" target="_blank" rel="noopener noreferrer" className="lg:hover:text-[#FF4900] transition-all">linkedin</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/5493487532846" target="_blank" rel="noopener noreferrer" className="lg:hover:text-[#FF4900] transition-all">instagram</a>
                    </li>
                </ul>
                <p>© 2025</p>
            </div>
            <div>
                <a href="/" aria-label="Ir al inicio">
                    <img src={logoCompleto} alt="Melanie Brown's Full Logo" className="min-w-screen max-w-screen xl:pt-5"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;