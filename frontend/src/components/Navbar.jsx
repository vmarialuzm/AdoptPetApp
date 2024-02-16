import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
        <h1>Adopt Pet App</h1>
        <Link to='/user-create'>create user</Link>
    </div>
  )
}
