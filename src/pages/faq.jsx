import { useState, useEffect } from 'react';
import { URL_API } from '../URL';

const Faq = () => {
	const [faqs, setFaqs] = useState([]);
	const [statusQuestion, setStatusQuestion] = useState(false);

	const sendQuestion = (event) => {
		event.preventDefault();

		const form = event.target;
		const payload = new FormData(form);

		fetch(`${URL_API}?action=insert_faqs`, {
			method: 'POST',
			body: payload,
		})
			.then((res) => res.json())
			.then((data) => {
				if (data['status'] === 'success') {
					setStatusQuestion(true);
					form.reset();
				}

				setTimeout(() => {
					setStatusQuestion(false);
				}, 5000);
			})
			.catch((err) => {
				console.log(err);
				setStatusQuestion(false);
			});
	};

	useEffect(() => {
		const fetchFaqs = async () => {
			const getFaqs = await fetch(`${URL_API}?action=faqs`);
			const response = await getFaqs.json();
			setFaqs(response['faqs']);
		};

		fetchFaqs();
	}, []);

	return (
		<>
			<section className="px-7 mt-36 pb-16">
				<div className="md:container">
					<h1 className="font-bold text-4xl text-slate-900">Frequently Asked Questions</h1>
					<p className="mt-5 text-lg text-slate-700">Berikut adalah list beberapa pertanyaan yang sangat sering ditanyakan.</p>
					<ul className="mt-6 border border-slate-300 rounded-md border-b-0" id="faqs">
						{faqs.map((faq, index) =>
							faq['status'] === 'active' ? (
								<li key={index}>
									<div className="relative">
										<input type="checkbox" className="absolute top-0 left-0 w-full h-12 cursor-pointer opacity-0 peer" />
										<p className="text-slate-900 font-semibold px-4 py-3 first-letter:uppercase w-[95%]">{faq['question']}</p>
										<svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90 peer-checked:rotate-0 duration-500 absolute right-4 top-4">
											<path d="M4 6L8 10L12 6" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
										</svg>
										<div className="max-h-0 overflow-hidden border-t border-slate-300 peer-checked:max-h-40 duration-500">
											<p className={`text-slate-800 p-4 first-letter:uppercase border-b`}>{faq['answer']}</p>
										</div>
									</div>
								</li>
							) : (
								''
							)
						)}
					</ul>
					<h2 className="text-slate-900 text-2xl font-semibold mt-14">Ada pertanyaan ?</h2>
					<p className="text-slate-800 mt-1">Silahkan isi form berikut untuk pertanyaan Anda yang tidak ditemukan pada FAQ diatas.</p>
					<form method="post" className="mt-5 bg-gradient-to-br from-slate-200 to-slate-100 p-6 rounded-md sm:w-max w-full space-y-5" onSubmit={(event) => sendQuestion(event)}>
						<div className="flex flex-col gap-3">
							<label htmlFor="name" className="text-slate-900 font-medium">
								Masukkan Nama
							</label>
							<input type="text" placeholder="Nama" autoComplete="username" required className="border-primary border p-2 rounded outline-none focus:ring-2 w-full sm:w-96 text-sm first-letter:uppercase" id="name" name="name" />
						</div>
						<div className="flex flex-col gap-3">
							<label htmlFor="question" className="text-slate-900 font-medium">
								Masukkan pertanyaan
							</label>
							<textarea
								cols="30"
								rows="8"
								placeholder="Pertanyaan Anda"
								required
								className="border-primary border p-2 rounded outline-none focus:ring-2 w-full sm:w-96 text-sm first-letter:uppercase"
								id="question"
								name="question"
							></textarea>
						</div>
						<button type="submit" className="bg-emerald-500 text-white p-2 rounded-md w-36 hover:bg-emerald-400 duration-150 ease-in tracking-wider outline-none">
							Kirim
						</button>
					</form>
				</div>
			</section>

			<div className={`flex items-center gap-2 fixed ${statusQuestion ? 'right-0' : '-right-full'} bg-emerald-500 text-white top-4 z-50 p-4 rounded-tl rounded-bl duration-500 ease-in-out w-64 sm:w-auto`} id="message-insert-faq">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6">
					<path fill="none" d="M0 0h24v24H0z"></path>
					<path
						d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"
						fill="rgba(255,255,255,1)"
					></path>
				</svg>
				<p className="text-sm sm:text-base">Pertanyaan Anda berhasil dikirim. Kami akan meninjaunya.</p>
			</div>
		</>
	);
};

export default Faq;
