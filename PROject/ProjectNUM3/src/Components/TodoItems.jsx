import CItem from "./CItem";

const TodoItems=({todoitems}) => {
  // return <div className="align">
  //   {/* second column / rowa */}
  //   {/* <CItem1/> */}
  //   {/* third column row */}
  //   {/* <CItem2/> */} 
  //   {/* this code show that ki length wadav but using one citem  we write mutliple time like props okh  to clean we use down wala */}
  //   <CItem todoName='Daily excersize' todoDate= '4/08/24'></CItem>
  //   <CItem todoName='Daily Protein' todoDate= '4/08/24'></CItem>
  //   {/* above things is like reuse and make clean code */}
  //   </div>
  return <div className="align items-container">
    {/* {TodoItems.map((item) => (<CItem todoName={item.name}todoDate= {item.dueDate}></CItem>))} */}
    {/* hardcoded so we create a map to run  the easy way app.jsx file code */}
    {todoitems.map((item) => (<CItem todoName={item.name}todoDate= {item.dueDate}></CItem>
    // name should same as pass in as props in the function
    ))}
  </div>
  
}
export default TodoItems;