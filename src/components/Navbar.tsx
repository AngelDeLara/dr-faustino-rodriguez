import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/logo-blue.png";


function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="bg-background w-full shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-28">
					<div className="flex-shrink-0 flex items-center">
						<img src={logo} alt="Dr. Faustino Rodriguez Logo" className="h-16 w-auto" />
          </div>
					<div className="flex items-center">
						<button
						  onClick={() => setIsMenuOpen(!isMenuOpen)}
						  className="inline-flex items-center justify-center p-2 rounded-md bg-background text-primary hover:bg-background-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
						>
						  <span className="sr-only">Open main menu</span>
						  {/* Hamburger icon */}
						  <svg
						    className="block h-12 w-12"
						    xmlns="http://www.w3.org/2000/svg"
						    fill="none"
						    viewBox="0 0 24 24"
						    stroke="currentColor"
						    aria-hidden="true"
						  >
						    <path
						      strokeLinecap="round"
						      strokeLinejoin="round"
						      strokeWidth={2}
						      d="M4 6h16M4 12h16M4 18h16"
						    />
						  </svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu, show/hide based on menu state */}
			{isMenuOpen && (
				<div className="">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<Link
							to="/"
							className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
						>
							Home
						</Link>
						<Link
							to="/facial-surgery"
							className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
						>
							Facial Surgery
						</Link>
						<Link
							to="/body-surgery"
							className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
						>
							Body Surgery
						</Link>
						<Link
							to="/min-surgery"
							className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
						>
							Minimally Invasive Surgery
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
