import List from './Components/List';
import ErrorMsg from './Components/errormsg';
import './App.css';
import Conatiner from './Components/Container';

function App() {
  // let ListItem = []
  let ListItem = ['Apples,Bananas', 'Sweet potatoes,Cucumbers', 'Brownrice,Oats', 'Milk,Juice', 'Olive oil,Coconut oil','dry Fruits']
  return (
    <>
   <Conatiner>    
    <h1 className='om'>Good Food</h1>

    <ErrorMsg itemss={ListItem}></ErrorMsg>
    <List itemss ={ListItem}></List>
    </Conatiner>

    <Conatiner>
      <p>Good food is essential for a healthy body and mind. Nutritious meals rich in fruits, vegetables, whole grains, and proteins provide the body with vital vitamins and minerals, fueling daily activities and supporting the immune system. Eating well-balanced meals can boost energy, improve mood, and enhance focus. Additionally, choosing fresh and wholesome ingredients over processed foods helps reduce the risk of chronic diseases, such as diabetes and heart disease. Good food not only nourishes but also brings people together, creating opportunities to connect and share moments, making it a true foundation for a happy and healthy life.</p>
      {/* no anything pass and conatiner is declare so output so empty conatiner */}
    </Conatiner>
    </>
  )
}

export default App
