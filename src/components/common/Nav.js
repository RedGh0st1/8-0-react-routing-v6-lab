import { Link } from "react-router-dom"
import "./Nav.css"
function Nav() {
  return (
    <header>
      <nav>
        <article>
          <h1>
            <Link to="/Home/Home">
              Northwest <span>Animal Hospital</span>
            </Link>
          </h1>
        </article>
        <aside>
          <ul>
            <li>
              <Link to="/staff/StaffList">All Staff</Link>
            </li>
            <li>
              <Link to="/pets/PetList">All Pets</Link>
            </li>
          </ul>
        </aside>
      </nav>
    </header>
  )
}

export default Nav
