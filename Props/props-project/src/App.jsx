import List from './Components/List';
import ErrorMsg from './Components/errormsg';
import './App.css';

function App() {
  // let ListItem = []
  let ListItem = ['Apples,Bananas', 'Sweet potatoes,Cucumbers', 'Brownrice,Oats', 'Milk,Juice', 'Olive oil,Coconut oil','dry Fruits']
  return (
    <>
    <h1 className='om'>Good Food</h1>

    <ErrorMsg itemss={ListItem}></ErrorMsg>
    <List itemss ={ListItem}></List>
    </>
  )
}

export default App
