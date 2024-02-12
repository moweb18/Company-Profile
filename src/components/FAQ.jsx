import { useEffect, useState } from 'react';
import { URL_API } from '../URL';

const Faq = () => {
	const [faqs, setFaqs] = useState([]);

	useEffect(() => {
		const fetchFaqs = async () => {
			const getFaqs = await fetch(`${URL_API}?action=faqs`);
			const response = await getFaqs.json();
			setFaqs(response['faqs']);
		};

		fetchFaqs();
	}, []);

	return (
		<section className="px-7 mt-16 lg:mt-28 scroll-mt-36" id="faq">
			<div className="md:container">
				<h2 className="font-dm-sans text-slate-900 text-2xl relative sm:text-3xl text-center">FAQ</h2>
				<p className="text-center text-slate-700 mt-2 text-lg">Berikut adalah beberapa pertanyaan yang paling sering ditanyakan.</p>
				<ul className="mt-8 grid gap-10 md:grid-cols-2 justify-items-center md:mt-10" id="faqs">
					{faqs.map((faq, index) =>
						faq['in_front'] === 'yes' ? (
							<li key={index}>
								<div className="flex gap-4">
									<span className="hidden mt-1 bg-primary rounded-full w-6 h-6 sm:flex items-center justify-center flex-shrink-0 text-white">?</span>
									<div>
										<p className="font-semibold text-slate-900 text-lg">{faq['question']}</p>
										<p className="text-slate-600 mt-2">{faq['answer']}</p>
									</div>
								</div>
							</li>
						) : (
							''
						)
					)}
				</ul>
				<a href="/faq" className="block mt-8 text-primary text-center font-semibold underline hover:opacity-70">
					Lihat selengkapnya
				</a>
			</div>
		</section>
	);
};

export default Faq;
