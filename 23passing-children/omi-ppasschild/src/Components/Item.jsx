// const Item = (props) => { structarig
import styles from './item.module.css'
const Item = ({ListItem}) => { //Distructuring
    console.log(styles); // to check which case the classNamecame herr
    return <li className= {`${styles['Kg-ok']} list-group-item `}><span className={`${styles['Kg-Span']}`}>{ListItem}</span></li>
                // this was the child of List class
                // or
                // Inside clurly prases we can write props on top and in mid we write props.ListItem
                
                // return <li className="list-group-item Kg-ok"><span className="Kg-Span">{ListItem}</span></li>
        
};
export default Item;