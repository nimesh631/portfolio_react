import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Navbar from "./Components/Navbar/Navbar"
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects"
import Footer from "./Components/Footer/Footer"
function App() {


  return (

<div className="bg-[#171d32] h-auto w-full overflow-hidden">
 <Navbar/>
 <Home/>
 <About/>
 <Skills/>
 <Projects/>
 <Footer/>
</div>

  )
}

export default App
