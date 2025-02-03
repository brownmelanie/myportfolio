import img from "./assets/melanie brown.png"
import igLogo from "./assets/InstagramLogo.svg"
function App() {

  return (
    <div className="flex flex-col w-screen h-screen justify-between p-8 lg:px-20 xl:px-28">
      <div className="flex flex-col items-center justify-center h-[90vh]">
        <img src={img} alt="Logo"/>
        <p className="pt-10 text-lg font-regular xl:text-xl xl:pt-20">WORK IN PROGRESS</p>
      </div>
      <a href="https://www.instagram.com/melniebrown" target="_blank" rel="noopener noreferrer">
        <div className="flex items-center gap-3">
          <img className="w-[30px]" src={igLogo} alt="Instagram Logo"/>
          <p className="font-semibold text-xl hover:text-[#FF4900] transition-all duration-500">follow :)</p>
        </div>
      </a>
    </div>
  )
}

export default App
