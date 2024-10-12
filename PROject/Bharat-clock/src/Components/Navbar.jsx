import Clock from "./Clock.png"
function Navbar(){
    return <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src={Clock} alt="chukle" width={50} height={50} />
       
      </a>
    </div>
  </nav>
}
export default Navbar;