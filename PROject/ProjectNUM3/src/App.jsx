import './App.css'
import Navbar from "./Components/Navbar"
import Appname from "./Components/Appname"
import Column1 from "./Components/Column1"
// import CItem from './Components/CItem'
import TodoItems from "./Components/TodoItems"


function App() {
  const todoItems = [
    {
      name:'Daily excerise',
      dueDate: '04/08/24' 
    },
    {
      name:'Daily 7 ltr water ',
      dueDate: '04/08/24' 
    }, 
    {
      name:'dail study changellege',
      dueDate:'11/11/24'
    },
  ]
  return <center className='todo-container'> 
  {/* instead of using classNamewe use className */}
    <Navbar/>
    <Appname/>
    <Column1/>
    {/* <CItem></CItem> */}
    <TodoItems todoitems={todoItems}></TodoItems>
    {/* focus on which ki coded write but the problem is ki in TodoItems as props pass name outside use iinside clurly we write the name of const */}
    
  </center>

}

export default App
