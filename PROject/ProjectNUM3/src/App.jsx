import './App.css'
import Navbar from "./Components/Navbar"
import Appname from "./Components/Appname"
import Column1 from "./Components/Column1"
import TodoItems from "./Components/TodoItems"


function App() {
  const CItem = [
    {
      name:'Daily excerise',
      dueDate: '04/08/24' 
    },
    {
      name:'Daily 7 liter water',
      dueDate: '04/08/24' 
    }, 
  ];
  return <center className='todo-container'> 
  {/* instead of using classNamewe use className */}
    <Navbar/>
    <Appname/>
    <Column1/>
    <TodoItems CItem={CItem}></TodoItems>
    
  </center>

}

export default App
