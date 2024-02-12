import { Link } from 'react-router-dom';
import sendWhatsApp from './SendWhatsApp';
import logo from '/logo.png';

const Footer = () => {
	return (
		<footer className={`px-7 bg-white pt-16 pb-8 border-t border-slate-200`}>
			<div className="md:container grid gap-6 sm:gap-10 lg:grid-cols-2">
				<div className="lg:max-w-xl">
					<span className="flex items-center gap-3">
						<img src={logo} alt="logo" width="64" height="64" />
						<span className="font-semibold text-primary text-xl sm:text-2xl">Modif Website</span>
					</span>
					<p className="mt-4 text-slate-800">Kami siap melayani dalam pembuatan website impian Anda dengan pelayanan yang baik dan pastinya membuat Anda puas dengan kinerja kami.</p>
				</div>
				<ul className="grid gap-6 sm:flex sm:flex-wrap sm:gap-10 lg:gap-x-20">
					<li>
						<ul>
							<li>
								<h4 className="uppercase font-bold text-slate-900 font-dm-sans text-lg">Menu</h4>
							</li>
							<li>
								<Link to={'/'} className="text-sm block py-1 text-slate-800 hover:text-primary ease-in duration-100 sm:text-base">
									Beranda
								</Link>
							</li>
							<li>
								<Link to={'/projects'} className="text-sm block py-1 text-slate-800 hover:text-primary ease-in duration-100 sm:text-base">
									Proyek
								</Link>
							</li>
							<li>
								<Link to={'/faq'} className="text-sm block py-1 text-slate-800 hover:text-primary ease-in duration-100 sm:text-base">
									FAQs
								</Link>
							</li>
						</ul>
					</li>
					<li>
						<ul>
							<li>
								<h4 className="uppercase font-bold text-slate-900 font-dm-sans text-lg">Hubungi Kami</h4>
							</li>
							<li>
								<a href={sendWhatsApp} className="text-sm block py-1 text-slate-800 hover:text-primary ease-in duration-100 sm:text-base">
									WhatsApp: 0858-9150-9891
								</a>
							</li>
							<li>
								<a href="mailto:modifweb18@gmail.com" className="text-sm block py-1 text-slate-800 hover:text-primary ease-in duration-100 sm:text-base">
									Email: modifweb18@gmail.com
								</a>
							</li>
						</ul>
					</li>
					<li>
						<ul>
							<li>
								<h4 className="uppercase font-bold text-slate-900 font-dm-sans text-lg">Media Sosial</h4>
							</li>
							<li>
								<a href="https://github.com/moweb18" className="text-sm block py-1 text-slate-800 hover:text-primary ease-in duration-100 sm:text-base">
									Github
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/modifweb/" className="text-sm block py-1 text-slate-800 hover:text-primary ease-in duration-100 sm:text-base">
									Instagram
								</a>
							</li>
							<li>
								<a href="https://www.facebook.com/people/Modif-Website/100090057253588/" className="text-sm block py-1 text-slate-800 hover:text-primary ease-in duration-100 sm:text-base">
									Facebook
								</a>
							</li>
							<li>
								<a href="https://t.me/modifweb" className="text-sm block py-1 text-slate-800 hover:text-primary ease-in duration-100 sm:text-base">
									Telegram
								</a>
							</li>
						</ul>
					</li>
					<li>
						<ul>
							<li>
								<h4 className="uppercase font-bold text-slate-900 font-dm-sans text-lg">Grup</h4>
							</li>
							<li>
								<a href="https://chat.whatsapp.com/CtXtWR4Z6NVKlUEmd6yHKu" className="text-sm block py-1 text-slate-800 hover:text-primary ease-in duration-100 sm:text-base">
									WhatsApp
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
