import { Link, useLocation } from 'react-router-dom';
import sendWhatsApp from './SendWhatsApp';
import logo from '/logo.png';
import { useState } from 'react';

const Header = () => {
	const [activeMenu, setActiveMenu] = useState(false);

	const location = useLocation();
	const currentPath = location.pathname;

	function checkActiveMenu() {
		if (!activeMenu) {
			setActiveMenu(true);
		} else {
			setActiveMenu(false);
		}
	}

	function checkNonactiveMenu() {
			setActiveMenu(false);
	}

	return (
		<header className="px-7 py-5 fixed left-0 right-0 top-0 z-50 bg-white border-b border-slate-300">
			<nav className="md:container">
				<ul className="flex justify-between items-center relative">
					<li>
						<Link to={'/'} className="flex items-center gap-2">
							<img src={logo} alt="logo" width="50" height="50" />
							<span className="hidden font-semibold text-primary text-xl sm:inline">Modif Website</span>
						</Link>
					</li>
					<li
						className={`flex flex-col gap-[6px] cursor-pointer [&>*]:w-4 [&>*]:h-[2px] [&>*]:bg-sky-500 [&>*]:ease-in-out [&>*]:duration-500 overflow-hidden ${activeMenu ? 'active' : ''} md:hidden`}
						id="hamburger-menu"
						onClick={checkActiveMenu}
					>
						<div></div>
						<div></div>
						<div></div>
					</li>
					<li className={`header-mobile header-desktop ${activeMenu ? 'active' : ''}`} id="submenu">
						<ul className="flex flex-col gap-6 [&>li>a]:font-medium [&>li>a]:block hover:[&>li:not(:last-child)>a]:text-primary [&>li>a]:py-2 md:flex-row md:[&>li:not(:last-child)>a]:p-2 md:gap-4">
							<li>
								<Link to={'/'} className={currentPath === '/' ? 'text-primary' : ''} onClick={checkNonactiveMenu}>
									Beranda
								</Link>
							</li>
							<li>
								<Link to={'/projects'} className={currentPath === '/projects' ? 'text-primary' : ''} onClick={checkNonactiveMenu}>
									Proyek
								</Link>
							</li>
							<li>
								<Link to={'/faq'} className={currentPath === '/faq' ? 'text-primary' : ''} onClick={checkNonactiveMenu}>
									FAQs
								</Link>
							</li>
							<li>
								<a href={sendWhatsApp} className="bg-[#FF823C] w-max text-white px-7 rounded-full font-bold hover:bg-amber-500 duration-100 ease-in mt-2 md:mt-0">
									Pesan Sekarang
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
