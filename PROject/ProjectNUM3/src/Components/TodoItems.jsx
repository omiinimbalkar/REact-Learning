import CItem from "./CItem";

const TodoItems=({TodoItems}) => {
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
  return <div className="align">
    <CItem todoName='Daily excersize' todoDate= '4/08/24'></CItem>
    <CItem todoName='Daily Protein' todoDate= '4/08/24'></CItem>
  </div>
  
}
export default TodoItems;