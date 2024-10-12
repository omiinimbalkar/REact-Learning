import todo from "./to-do-list.png"
function Navbar()
{
    return  <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={todo} height={42} width={42} />
        </a>
      </div>
    </nav>
}
export default Navbar;