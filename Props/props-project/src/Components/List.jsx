import Item from "./Item";
const List = ({itemss}) => {
    // let ListItem = ['Apples,Bananas', 'Sweet potatoes,Cucumbers', 'Brownrice,Oats', 'Milk,Juice', 'Olive oil,Coconut oil']
    return (
        <ul className="list-group">
            {/* map */}
                {itemss.map(item => 
                <Item key= {item} ListItem ={item}></Item>
                )}
                {/* its parents of props with name listitem */}
            </ul>
     
    );
}
export default List;
   