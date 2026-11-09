function Header() {
  return (
    <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
            <h1 className="text-white text-xl font-bold">My React App</h1>
            <ul className="flex space-x-4">
                <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
                <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Header;