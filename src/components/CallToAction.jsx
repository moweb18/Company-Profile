import waveTop from '../assets/wave-top.png';
import waveBottom from '../assets/wave-bottom.png';
import sendWhatsApp from './SendWhatsApp';

const CallToAction = () => {
	return (
		<section className="mt-16 lg:mt-2 bg-[#0E044B] overflow-hidden relative">
			<img src={waveTop} alt="wave" className="w-full absolute top-0 left-0 h-96 lg:h-64" />
			<div className="px-7 py-20 relative z-10">
				<div className="md:container">
					<h2 className="font-bold text-white text-3xl relative sm:text-4xl leading-normal sm:leading-relaxed text-center sm:max-w-[640px] sm:mx-auto">Anda tertarik untuk membuat sebuah website yang Profesional?</h2>
					<a
						href={sendWhatsApp}
						className="text-2xl text-amber-300 font-semibold border-2 border-amber-300 py-3 px-14 rounded-md flex mt-12 justify-center w-max mx-auto hover:text-amber-200 duration-100 ease-in gap-2 [&>span]:hover:animate-waving-hand"
					>
						Hire Us <span className="origin-[70%_70%] text-3xl -translate-y-1">👋</span>
					</a>
				</div>
			</div>
			<img src={waveBottom} alt="wave" className="w-full absolute bottom-0 left-0 lg:h-40" />
		</section>
	);
};

export default CallToAction;
