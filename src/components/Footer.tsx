import { Link } from "react-router-dom";
import logo from "/assets/logo-gray.png";

function Footer() {
  return (
		<nav className="bg-primary w-full shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-28">
					<div className="flex-shrink-0 flex items-center">
						<Link to="/">
						<img src={logo} alt="Dr. Faustino Rodriguez Logo" className="h-16 w-auto" />
						</Link>
          </div>
					<div className="flex items-center text-background">
						  <p>&copy; 2024 Copyright <a href="" className="text-background underline">House Club Creativo</a></p>
					</div>
				</div>
			</div>
		</nav>
  );
}

export default Footer;
