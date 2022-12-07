import { Link } from "react-router-dom";

const Header = () => {
  return (
    <main className="Header">
      <span>Router Tutorial</span>

      <div>
        <Link className="menu-item" to="/">Home</Link>
        <Link className="menu-item" to="Products">Products</Link>
      </div>
    </main>
  )
}

export default Header;