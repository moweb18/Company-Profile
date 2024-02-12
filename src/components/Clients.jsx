/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { URL_API, URL_API_Assets } from '../URL';

const Clients = () => {
	const [clients, setClients] = useState([]);
	const [loading, setLoading] = useState(true);
	const [longDescription, setLongDescription] = useState(false);

	async function fetchClients() {
		try {
			const fetching = await fetch(`${URL_API}?action=clients&page=1`);
			const response = await fetching.json();
			setClients(response['testimonials']);
			setLoading(false);
		} catch (error) {
			setLoading(true);
		}
	}

	useEffect(() => {
		fetchClients();
	}, []);

	function moreDescription() {
		if (!longDescription) {
			setLongDescription(true);
		} else {
			setLongDescription(false);
		}
	}

	return (
		<section className="px-7 mt-16 lg:mt-28 bg-[#FAFAFC] py-14" id="container-clients">
			<div className="md:container">
				<h2 className="font-dm-sans text-slate-900 text-2xl relative sm:text-3xl text-center">
					Kata Mereka Tentang <span className="text-primary">MoWeb</span>
				</h2>
				<div className={`mt-10 grid gap-6 sm:justify-items-center sm:justify-center  ${loading || clients.length === 0 ? 'lg:grid-cols-1' : 'lg:grid-cols-[400px_400px]'}`} id="clients">
					{loading ? (
						<div role="status">
							<svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-400 fill-blue-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
									fill="currentColor"
								/>
								<path
									d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
									fill="currentFill"
								/>
							</svg>
							<span className="sr-only">Loading...</span>
						</div>
					) : (
						<>
							{clients.length == 0 ? (
								<p className="text-center text-gray-500">Testimonial belum ada</p>
							) : (
								clients.map((client, index) => {
									const { name, description, profession, username_instagram: username_ig, filename } = client;

									return (
										<div className="rounded-2xl bg-white shadow-xl px-6 py-9 w-full sm:max-w-sm flex flex-col" key={index}>
											<div className="flex-auto">
												<p className={`sm:line-clamp-5 mb-2 text-slate-900 ${longDescription ? 'line-clamp-none' : 'line-clamp-3'}`}>{description}</p>
												<span className="more-description-testimoni text-primary font-medium text-sm cursor-pointer hover:opacity-70 block" onClick={moreDescription}>
													{longDescription ? 'Lihat sedikit' : 'Lihat selengkapnya'}
												</span>
											</div>
											<div className="flex flex-col-reverse mt-8 gap-4 sm:flex-row sm:justify-between">
												<div>
													<p className="text-slate-900 font-bold">{name}</p>
													<p className="text-gray-600 text-sm mt-1">{profession}</p>
													<div className="flex items-center gap-1 mt-4" title="Instagram klien">
														<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path
																d="M9.99999 7.49984C9.33695 7.49984 8.70106 7.76323 8.23222 8.23207C7.76338 8.70091 7.49999 9.3368 7.49999 9.99984C7.49999 10.6629 7.76338 11.2988 8.23222 11.7676C8.70106 12.2364 9.33695 12.4998 9.99999 12.4998C10.663 12.4998 11.2989 12.2364 11.7678 11.7676C12.2366 11.2988 12.5 10.6629 12.5 9.99984C12.5 9.3368 12.2366 8.70091 11.7678 8.23207C11.2989 7.76323 10.663 7.49984 9.99999 7.49984ZM9.99999 5.83317C11.1051 5.83317 12.1649 6.27216 12.9463 7.05356C13.7277 7.83496 14.1667 8.89477 14.1667 9.99984C14.1667 11.1049 13.7277 12.1647 12.9463 12.9461C12.1649 13.7275 11.1051 14.1665 9.99999 14.1665C8.89492 14.1665 7.83511 13.7275 7.05371 12.9461C6.27231 12.1647 5.83332 11.1049 5.83332 9.99984C5.83332 8.89477 6.27231 7.83496 7.05371 7.05356C7.83511 6.27216 8.89492 5.83317 9.99999 5.83317ZM15.4167 5.62484C15.4167 5.9011 15.3069 6.16606 15.1116 6.36141C14.9162 6.55676 14.6513 6.6665 14.375 6.6665C14.0987 6.6665 13.8338 6.55676 13.6384 6.36141C13.4431 6.16606 13.3333 5.9011 13.3333 5.62484C13.3333 5.34857 13.4431 5.08362 13.6384 4.88827C13.8338 4.69292 14.0987 4.58317 14.375 4.58317C14.6513 4.58317 14.9162 4.69292 15.1116 4.88827C15.3069 5.08362 15.4167 5.34857 15.4167 5.62484ZM9.99999 3.33317C7.93832 3.33317 7.60166 3.339 6.64249 3.3815C5.98916 3.41234 5.55082 3.49984 5.14416 3.65817C4.78249 3.79817 4.52166 3.96567 4.24416 4.244C3.98333 4.496 3.78278 4.80366 3.65749 5.144C3.49916 5.55234 3.41166 5.98984 3.38166 6.64234C3.33832 7.56234 3.33332 7.884 3.33332 9.99984C3.33332 12.0615 3.33916 12.3982 3.38166 13.3573C3.41249 14.0098 3.49999 14.449 3.65749 14.8548C3.79916 15.2173 3.96582 15.4782 4.24249 15.7548C4.52332 16.0348 4.78416 16.2023 5.14249 16.3407C5.55416 16.4998 5.99249 16.5882 6.64249 16.6182C7.56249 16.6615 7.88416 16.6665 9.99999 16.6665C12.0617 16.6665 12.3983 16.6607 13.3575 16.6182C14.0092 16.5873 14.4483 16.4998 14.855 16.3423C15.2158 16.2015 15.4783 16.034 15.755 15.7573C16.0358 15.4765 16.2033 15.2157 16.3417 14.8573C16.5 14.4465 16.5883 14.0073 16.6183 13.3573C16.6617 12.4373 16.6667 12.1157 16.6667 9.99984C16.6667 7.93817 16.6608 7.6015 16.6183 6.64234C16.5875 5.99067 16.5 5.55067 16.3417 5.144C16.2161 4.80401 16.0159 4.49647 15.7558 4.244C15.5039 3.98304 15.1962 3.78248 14.8558 3.65734C14.4475 3.499 14.0092 3.4115 13.3575 3.3815C12.4375 3.33817 12.1158 3.33317 9.99999 3.33317ZM9.99999 1.6665C12.2642 1.6665 12.5467 1.67484 13.435 1.7165C14.3225 1.75817 14.9267 1.89734 15.4583 2.104C16.0083 2.31567 16.4717 2.60234 16.935 3.06484C17.3587 3.48142 17.6866 3.98533 17.8958 4.5415C18.1017 5.07234 18.2417 5.67734 18.2833 6.56484C18.3225 7.45317 18.3333 7.73567 18.3333 9.99984C18.3333 12.264 18.325 12.5465 18.2833 13.4348C18.2417 14.3223 18.1017 14.9265 17.8958 15.4582C17.6872 16.0147 17.3593 16.5187 16.935 16.9348C16.5183 17.3584 16.0144 17.6863 15.4583 17.8957C14.9275 18.1015 14.3225 18.2415 13.435 18.2832C12.5467 18.3223 12.2642 18.3332 9.99999 18.3332C7.73582 18.3332 7.45332 18.3248 6.56499 18.2832C5.67749 18.2415 5.07332 18.1015 4.54166 17.8957C3.98526 17.6869 3.48126 17.359 3.06499 16.9348C2.64116 16.5183 2.31327 16.0144 2.10416 15.4582C1.89749 14.9273 1.75832 14.3223 1.71666 13.4348C1.67749 12.5465 1.66666 12.264 1.66666 9.99984C1.66666 7.73567 1.67499 7.45317 1.71666 6.56484C1.75832 5.6765 1.89749 5.07317 2.10416 4.5415C2.31269 3.98499 2.64066 3.48094 3.06499 3.06484C3.48138 2.64086 3.98535 2.31295 4.54166 2.104C5.07332 1.89734 5.67666 1.75817 6.56499 1.7165C7.45332 1.67734 7.73582 1.6665 9.99999 1.6665Z"
																fill="#A8B2D1"
																className="fill-text-gray-600"
															></path>
														</svg>

														{username_ig !== null ? <span className="text-gray-700 text-sm">@{username_ig}</span> : '-'}
													</div>
												</div>
												<div className="w-20 h-20 rounded-2xl shadow-2xl">
													{filename === null ? (
														<div className="w-full h-full rounded-2xl bg-slate-300 text-xl font-dm-sans font-bold flex justify-center items-center">?</div>
													) : (
														<img src={`${URL_API_Assets}/${filename}`} alt="client" width="80" height="80" className="rounded-2xl w-full h-full" />
													)}
												</div>
											</div>
										</div>
									);
								})
							)}
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default Clients;
