import aboutUs from '../assets/about-us.png';

const AboutUs = () => {
	return (
		<section className="px-7 mt-16 scroll-mt-36" id="about-us">
			<div className="md:container lg:flex lg:justify-center lg:gap-14">
				<div className="max-w-2xl">
					<h2 className="font-dm-sans text-slate-900 text-2xl text-center sm:text-3xl lg:text-left">Tentang Kami</h2>
					<p className="text-slate-800 mt-3">
						Modif Website atau bisa disingkat MoWeb adalah bisnis yang bergerak dibidang jasa yaitu pembuatan sebuah website. Dimana Anda bisa meminta tampilan website yang Anda inginkan atau dari desain yang sudah Anda buat sebelumnya.
						Disini kami membuka berapa jasa, yaitu:
					</p>
					<ol className="px-6 list-decimal">
						<li>Pembuatan website</li>
						<li>Pembuatan desain website</li>
						<li>Perbaikan error/bug pada website</li>
						<li>Konsultasi mengenai website</li>
					</ol>
					<p>
						Untuk saat ini kami terletak di DKI Jakarta dan kami juga mempunyai sebuah tagline tersendiri yaitu &quot;<span className="text-primary font-bold">Amanah</span>, <span className="text-primary font-bold">Kreatif</span> dan{' '}
						<span className="text-primary font-bold">Profesional</span>&quot;.
					</p>
				</div>
				<div className="hidden lg:block relative after:bg-primary/50 after:absolute after:inset-0 after:rounded-md before:absolute before:inset-0 before:rounded-md before:translate-x-5 before:translate-y-4 before:-z-10 before:border-2 before:border-primary h-max">
					<img src={aboutUs} alt="about-us" className="rounded-md" />
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
