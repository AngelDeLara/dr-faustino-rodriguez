import React from "react";
import profilePic from "/assets/headerBackground.png";
import headerAccent from "/assets/headerAccent.png";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
	const navigate = useNavigate();

	const scrollToContact = () => {
		const contactElement = document.getElementById("contact");
		if (contactElement) {
			contactElement.scrollIntoView({ behavior: "smooth" });
		} else {
			navigate("/");
		}
	};

	return (
		<header className="bg-background shadow-md text-left w-full">
			<div
				className="bg-cover bg-center h-160 flex items-center text-left px-16 z-10"
				style={{
					backgroundImage: `url(${profilePic})`,
					backgroundAttachment: "fixed",
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			>
				{/* <div
					className="bg-cover bg-center z-20 absolute top-0 right-0 w-full h-full"
					style={{
						backgroundImage: `url(${headerAccent})`,
						backgroundAttachment: "fixed",
						backgroundPosition: "center",
						backgroundSize: "cover",
					}}
				></div> */}
				<div className="container z-30 text-left lg:pl-48">
					<h1 className="text-4xl font-bold text-background mb-4">
						Luce radiante y <br /> recupera tu autoestima
					</h1>
					<a
						onClick={scrollToContact}
						className="text-lg bg-primary text-background inline-block px-4 py-2 rounded cursor-pointer hover:text-background"
					>
						Agenda tu cita
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
