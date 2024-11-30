import React from "react";
import {
	faTwitter,
	faDribbble,
	faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const socialLinks = [
	{ icon: faTwitter, href: "#" },
	{ icon: faDribbble, href: "#" },
	{ icon: faBehance, href: "#" },
];

const infoList = [
	{ label: "Born in", value: "DRC" },
	{ label: "Experience", value: "4+ Years" },
	{ label: "Studi", value: "Bac + 4" },
];

const ProfileKeyInfo = () => (
	<div>
		{infoList.map((info, i) => (
			<p className="text-2xl mb-0" key={i}>
				<span className="opacity-50 mr-2 font-light">{info.label}</span>
				<strong>{info.value}</strong>
			</p>
		))}
	</div>
);

const SocialLinks = ({ links }:any) => (
	<ul className="inline-flex mt-6">
		{links.map((link:any, i:number) => (
			<li className="mr-5" key={i}>
				<a
					href={link.href}
					className="text-2xl opacity-70 hover:opacity-100 transition duration-300"
				>
					<FontAwesomeIcon icon={link.icon} />
				</a>
			</li>
		))}
	</ul>
);

SocialLinks.propTypes = {
	links: PropTypes.array.isRequired,
};

export const HeroHeader = () => {
	return (
		<header className="ezy__header8 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-[#373572] dark:text-white">
			<div className="container px-4 relative">
				<div className="grid grid-cols-12">
					<div className="col-span-12 lg:col-span-5 xl:col-span-4 lg:order-2 mb-6 lg:mb-0 text-center lg:text-start">
						<img
							src="logo-dan.png"
							alt=""
							className="max-w-full h-auto border-[20px] border-white shadow-xl dark:border-gray-700 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[30%] rounded-bl-[30%] mx-auto"
						/>
					</div>
					<div className="col-span-12 lg:col-span-7 lg:pl-6 xl:pl-12">
						<p className="text-xl leading-normal mb-2 opacity-50">
							Full Stack web Developper 
						</p>
						<h2 className="text-3xl leading-none md:text-7xl font-bold mb-6">
							Daniel Assani
						</h2>
						<p className="text-xl leading-normal opacity-75 mb-2">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam sit perferendis ullam totam cum, maiores dolores. Quibusdam laborum sapiente voluptas quam error possimus perferendis, aut ad officia, exercitationem, sint facilis!
						</p>

						<div className="mt-12 lg:ml-12 p-4 md:px-12 lg:py-6 border-l">
							<ProfileKeyInfo />
							<SocialLinks links={socialLinks} />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
