import { Link } from "react-router-dom";

function Navbar(){
    return(

        <nav className="bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                <h1 className="text-2xl font-bold text-[#1F6F5F]">
                    Portfolio
                </h1>

                <div className="flex gap-6 font-medium">

                    <Link to="/" className="text-gray-700 hover:text-[#2FA084] transition">Home</Link>
                    <Link to="/projects" className="text-gray-700 hover:text-[#2FA084] transition">Projects</Link>
                    <Link to="/login" className="text-gray-700 hover:text-[#2FA084] transition">Login</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-[#2FA084] transition">Contact</Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar