import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-6 text-white bg-[#121212]">
      <div className="text-xl font-bold tracking-wider ">SUR<br></br>ESH</div>
      <div className="space-x-6 text-sm">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/About" className="hover:text-gray-400">About</Link>
        <Link to="/Projects" className="hover:text-gray-400">Projects</Link>
        <Link to="/Contact" className="hover:text-gray-400">Contact</Link>
      </div>
    </nav>
  );
}