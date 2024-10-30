//  1 const Conatiner =() => { 
import cute from './Container.module.css'
    const Conatiner =(props) => {  //2
    return (
        <>
        {/* <div>
            Conatiner
        </div> */}
        <div className={cute.Conatiner}>{props.children}
            {/* eg we add before like comment constat */}
        </div>
        </>
    )
}
export default Conatiner;