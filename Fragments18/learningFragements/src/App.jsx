import React from 'react'
import './App.css'

function App() {
  let ListItem = ['Apples,Bananas', 'Sweet potatoes,Cucumbers', 'Brownrice,Oats', 'Milk,Juice', 'Olive oil,Coconut oil']
  // return (
    // <>
    // <h1>Healthy Food</h1>
    // {/* after creating array delete other list items and live one item list only */}
    // <ul className="list-group">
    //   {ListItem.map(item => <li key={item} className="list-group-item">{item}</li>)}
    // {/* maps is easy to one line code and run it  */}
    // {/* loop is not written in jsx */}
    // {/* <li class="list-group-item"></li>
    // <li class="list-group-item"></li>
    // <li class="list-group-item"></li>
    // <li class="list-group-item"></li> */}
    // </ul>
    // </>

    // second 20.conditional Rendering 
    if (ListItem.length === 0){
      return <h3>I am still Empty smotach </h3>
    }
    // this if condition run till if the aaray is full then inside if condition not print if array is empty the it print inside if condition
    return(
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {ListItem.map(item => <li key={item} className="list-group-item">{item}</li>)}
      </ul>

    </>
  );
}

export default App
