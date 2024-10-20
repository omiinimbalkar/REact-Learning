import React from 'react'
import './App.css'

function App() {
  let ListItem = ['Apples,Bananas', 'Sweet potatoes,Cucumbers', 'Brownrice,Oats', 'Milk,Juice', 'Olive oil,Coconut oil']
  // let ListItem = []


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
  // if (ListItem.length === 0){
  //   return <h3>I am still Empty smotach </h3>
  // }
  // // this if condition run till if the aaray is full then inside if condition not print if array is empty the it print inside if condition
  // return(
  // <>
  //   <h1>Healthy Food</h1>
  //   <ul className="list-group">
  //     {ListItem.map(item => <li key={item} className="list-group-item">{item}</li>)}
  //   </ul>

  // </>
  // );



  // ******??******
  //   why we use ==== in coding lang
  // In coding languages, ==== is not typically used. However, you might be thinking of == and ===, which are common operators in many programming languages, such as JavaScript. Here's a breakdown of their purpose:




  //3..next we use a ternary operater
  //why? => all items show and the last message too...
  // let emptyMessage = ListItem.length === 0 ? <h3>i am still hungry !</h3> : null
  // return (
  //   <>
  //     <h1>Healthy Food</h1>
  //     {/* //ternary operators */}
  //     {/* {ListItem.length === 0 ? <h3>i am still hungry !</h3> : null} --> as using this we can use a simple let keyword to create a variable and insert the name of variable in  {} ok!!*/}
  //     {emptyMessage}

  //     <ul className="list-group"> {ListItem.map(item => <li key={item} className="list-group-item">{item}</li>)}</ul>
  //   </>
  // );



  //4... logical operator left false then go to write otherwise left true it not goes toward the right
  let logical = ListItem.length === 0 && <h3>i am still hungry !</h3>; //first way to write l.o
  return (
    <>

      <h1>Healthy Food</h1>
      {logical}
      <ul className="list-group"> 
      {ListItem.map(item => 
      <li key={item} className="list-group-item">
      {item}</li>)}
      </ul>


    </>
  );

}

export default App
