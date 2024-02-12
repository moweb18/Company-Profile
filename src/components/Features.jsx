import love from '../assets/love.svg';
import plane from '../assets/plane.svg';
import design from '../assets/design.svg';
import phone from '../assets/phone.svg';

const Features = () => {
	const features = [
		{
			title: 'Harga Sangat Terjangkau',
			description: 'Silakan bandingkan harga yang kami tawarkan dengan tempat jasa pembuatan website lainnya. Murah tidak ada kaitannya dengan kualitas yang baik.',
			icon: love,
			background: 'bg-pink-500',
		},
		{
			title: 'Pembuatan Cepat',
			description: 'Website yang telah Anda pesan, kami akan membuatnya secepat mungkin yang kurang dari deadline yang telah di tentukan.',
			icon: plane,
			background: 'bg-sky-500',
		},
		{
			title: 'Tampilan Yang Menarik',
			description: 'Kami akan selalu membuat website dengan tampilan yang menarik, agar website Anda terlihat seperti profesional.',
			icon: design,
			background: 'bg-amber-400',
		},
		{
			title: 'Responsive & Mobile Friendly',
			description: 'Website yang kami kerjakan pastinya responsive dan juga mobile friendly dimana akan membuat user yang melihat website kita itu senang, ditambah peningkatan SEO.',
			icon: phone,
			background: 'bg-violet-500',
		},
	];

	return (
		<section className="px-7 mt-16">
			<div className="md:container">
				<h2 className="font-dm-sans text-2xl text-center text-slate-900 max-w-xl mx-auto sm:leading-snug sm:text-3xl">MoWeb merupakan pilihan terbaik dalam membuat website impianmu.</h2>
				<ul className="mt-12 grid gap-14 md:grid-cols-2">
					{features.map((feature, index) => {
						return (
							<li className="max-w-lg xl:mx-auto" key={index}>
								<div className="flex flex-col gap-3">
									<div
										className={`${feature.background} rounded-[50%/14%] w-[55px] h-[60px] flex justify-center items-center relative after:absolute after:top-[10%] after:right-[-5.5%] after:bottom-[10%] after:left-[-5%] after:rounded-[7%/50%]`}
										id={`index-${index}`}
									>
										<img src={feature.icon} alt="icon" className="relative z-10" width="24" height="24" />
									</div>
									<p className="font-dm-sans text-slate-900 text-lg">{feature.title}</p>
									<p className="text-slate-800">{feature.description}</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default Features;
