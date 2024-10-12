function Third(){
  let time = new Date();
    return <div className="name">
      <p> This is Current Time: {time.toLocaleDateString()} and Date: {time.toLocaleTimeString()}</p>
    </div>
}
export default Third;