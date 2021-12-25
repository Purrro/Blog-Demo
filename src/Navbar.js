import { Link } from 'react-router-dom';




const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar">
      <Link to="/"><h1>Blog Demo</h1></Link>
      
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
      </div>
      
    </nav>
  );
};

export default Navbar;