/* eslint-disable react/prop-types */
const JumbotronProjects = ({ textButton }) => {
	return (
		<section className="bg-jumbotron px-7 py-20 bg-no-repeat relative bg-cover after:absolute after:inset-0 after:bg-linear-jumbotron flex justify-center items-center">
			<div className="relative z-10 text-white md:container">
				<h1 className="font-bold font-dm-sans text-3xl text-center leading-normal sm:text-4xl sm:leading-snug sm:max-w-lg sm:mx-auto md:text-5xl md:max-w-2xl md:leading-tight">
					Kumpulan proyek <span className="underline text-orange">GRATIS</span> yang telah kami kerjakan
				</h1>
				<p className="text-center mt-7 leading-relaxed sm:max-w-2xl sm:mx-auto md:text-lg md:max-w-3xl">
					Proyek yang kami kerjakan ini, dapat kalian gunakan secara gratis, baik untuk personal maupun untuk komersial tanpa perlu mencantumkan copyright. Akan tetapi kami akan sangat mengapresiasi jika Anda mencantumkan copyright nya.
					Kami juga akan memberikan referensi yang mungkin dapat bermanfaat.
				</p>
				<div className="flex justify-center mt-7">
					<a href="#list-projects" className="bg-linear-jumbotron font-bold px-8 py-3 rounded-full shadow-lg hover:opacity-90 hover:shadow-none ease-in duration-100 md:text-lg">
						{textButton}
					</a>
				</div>
			</div>
		</section>
	);
};

export default JumbotronProjects;
