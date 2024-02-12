/* eslint-disable react/prop-types */
const Jumbotron = ({ textButton }) => {
	return (
		<section className="bg-jumbotron px-7 py-20 bg-no-repeat relative bg-cover after:absolute after:inset-0 after:bg-linear-jumbotron flex justify-center items-center">
			<div className="relative z-10 text-white md:container">
				<h1 className="font-bold font-dm-sans text-3xl text-center leading-normal sm:text-4xl sm:leading-snug sm:max-w-lg sm:mx-auto md:text-5xl md:max-w-2xl md:leading-tight">
					Jasa Pembuatan Website Secara <span className="underline text-orange">Profesional</span> dengan Harga yang <span className="underline text-orange">Terjangkau!</span>
				</h1>
				<p className="text-center mt-7 leading-relaxed sm:max-w-2xl sm:mx-auto md:text-lg md:max-w-3xl">
					Serahkan urusan pembuatan website Anda kepada kami, kami akan membuat website Anda terlihat seperti <span className="font-bold">professional</span>. Serta kami juga dapat memperbaiki <span className="font-bold">Error/Bug</span>{' '}
					pada website Anda, dan membuat desain website dengan tampilan yang
					<span className="font-bold">cantik</span> dan
					<span className="font-bold">menarik</span>.
				</p>

				<div className="flex justify-center mt-7">
					<a href="#about-us" className="bg-linear-jumbotron font-bold px-8 py-3 rounded-full shadow-lg hover:opacity-90 hover:shadow-none ease-in duration-100 md:text-lg">
						{textButton}
					</a>
				</div>
			</div>
		</section>
	);
};

export default Jumbotron;
