const ErrorMsg = ({itemss}) =>{
    // let ListItem = ['Apples,Bananas', 'Sweet potatoes,Cucumbers', 'Brownrice,Oats', 'Milk,Juice', 'Olive oil,Coconut oil'] before the changing parent one and only 

     
    return( itemss.length === 0 && <h3>i am still hungry !</h3>);
}
export default ErrorMsg;
// {/* <ul className="list-group"> 
//       {ListItem.map(item => 
//       <li key={item} className="list-group-item">
//       {item}</li>)}
//       </ul> */}