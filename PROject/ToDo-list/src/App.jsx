import './App.css'
import Navbar from "./Components/Navbar"
import Appname from "./Components/Appname"
import Column1 from "./Components/Column1"
import CItem1 from "./Components/CItem1"
import CItem2 from "./Components/CItem2"

function App() {

  return <center className='todo-container'> 
  {/* instead of using classNamewe use className */}
    <Navbar/>
    <Appname/>
    <div className="align">
    <Column1/>
    {/* second column / rowa */}
    <CItem1/>
    {/* third column row */}
    <CItem2/>
    </div>
  </center>

}

export default App
