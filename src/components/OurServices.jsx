import makeWebsite from '../assets/pembuatan-website.svg';
import repairBug from '../assets/perbaikan-bug.svg';
import makeUIUX from '../assets/desain-ui-ux.svg';

const OurServices = () => {
	return (
		<section className="px-7 mt-16 lg:mt-28">
			<div className="md:container">
				<p className="mb-1 uppercase text-primary text-center font-semibold">Apa yang kita tawarkan</p>
				<h2 className="font-dm-sans text-slate-900 text-2xl text-center sm:text-3xl">Keuntungan buat website bersama MoWeb</h2>
				<ul className="mt-8 grid gap-12 sm:grid-cols-2 justify-items-center lg:grid-cols-3">
					<li>
						<p className="mb-5 font-dm-sans text-slate-900 text-xl text-center lg:text-left">Pembuatan Website</p>
						<img src={makeWebsite} alt="image" className="h-52" height="208" />
					</li>
					<li>
						<p className="mb-5 font-dm-sans text-slate-900 text-xl text-center lg:text-left">Perbaikan Bug/Error</p>
						<img src={repairBug} alt="image" className="h-52" height="208" />
					</li>
					<li>
						<p className="mb-5 font-dm-sans text-slate-900 text-xl text-center lg:text-left">Desain UI/UX Website</p>
						<img src={makeUIUX} alt="image" className="h-52" height="208" />
					</li>
				</ul>
			</div>
		</section>
	);
};

export default OurServices;
