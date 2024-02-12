import { URL_API } from '../URL';
import { useState, useEffect } from 'react';

const OtherProjects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const dataProjects = async () => {
			const fetchDataProjects = await fetch(`${URL_API}?action=new_4projects_not_featured`);
			const responsesData = await fetchDataProjects.json();
			const resultsData = responsesData['new_4projects'];
			setProjects(resultsData);
		};

		dataProjects();
	}, []);

	return (
		<section className="px-7 mt-16 lg:mt-28">
			<div className="md:container">
				<h2 className="font-dm-sans text-slate-900 text-2xl relative sm:text-3xl text-center">Proyek Penting Lainnya</h2>
				<a href="/projects" className="block mt-1 text-primary text-center font-semibold underline hover:opacity-70">
					Lihat arsip
				</a>
				<div className={`mt-10 grid gap-6 justify-items-center justify-center ${projects.length !== 0 && 'md:grid-cols-[360px_360px]'}`} id="new_4projects">
					{projects.length === 0 ? (
						<p className="text-center text-gray-500">Proyek lainnya belum ada</p>
					) : (
						projects.map((project, index) => {
							const createdWith = project['created_with'].split(',');
							const { name: project_name, description: project_description, github_url, demo_url } = project;

							return (
								<div className="bg-[#112240] shadow-xl p-6 rounded-md sm:max-w-sm w-full" key={index}>
									<div className="flex items-center justify-between">
										<svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clipPath="url(#clip0_75_337)">
												<path
													d="M10.6667 13.3333V50.6667H53.3333V18.6667H30.896L25.5627 13.3333H10.6667ZM33.104 13.3333H56C56.7073 13.3333 57.3855 13.6143 57.8856 14.1144C58.3857 14.6145 58.6667 15.2928 58.6667 16V53.3333C58.6667 54.0406 58.3857 54.7189 57.8856 55.219C57.3855 55.7191 56.7073 56 56 56H8.00001C7.29277 56 6.61449 55.7191 6.11439 55.219C5.61429 54.7189 5.33334 54.0406 5.33334 53.3333V10.6667C5.33334 9.95942 5.61429 9.28115 6.11439 8.78105C6.61449 8.28095 7.29277 8 8.00001 8H27.7707L33.104 13.3333Z"
													fill="#78BFFF"
												></path>
											</g>
											<defs>
												<clipPath id="clip0_75_337">
													<rect width="64" height="64" fill="white"></rect>
												</clipPath>
											</defs>
										</svg>
										<div className="flex gap-3">
											{github_url !== null ? (
												<a href={github_url} title="Github">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<g clipPath="url(#clip0_74_307)">
															<path
																d="M5.88301 18.653C5.58301 18.453 5.32501 18.198 5.02301 17.837C4.86625 17.6452 4.71092 17.4522 4.55701 17.258C4.09401 16.683 3.80201 16.418 3.50001 16.309C3.25031 16.2194 3.04645 16.0342 2.93327 15.7943C2.82009 15.5543 2.80687 15.2792 2.89651 15.0295C2.98615 14.7798 3.17132 14.576 3.41127 14.4628C3.65122 14.3496 3.92631 14.3364 4.17601 14.426C4.92801 14.696 5.43701 15.161 6.12301 16.014C6.02901 15.897 6.46301 16.441 6.55601 16.553C6.74601 16.78 6.88601 16.918 6.99601 16.991C7.20001 17.128 7.58301 17.187 8.14601 17.131C8.16901 16.749 8.24001 16.378 8.34801 16.036C5.38001 15.31 3.70001 13.396 3.70001 9.64002C3.70001 8.40002 4.07001 7.28402 4.75801 6.34802C4.54001 5.45402 4.57301 4.37302 5.06001 3.15602C5.11528 3.01836 5.20048 2.89471 5.30945 2.79405C5.41841 2.69339 5.54841 2.61823 5.69001 2.57402C5.77101 2.55002 5.81701 2.53902 5.89801 2.52702C6.70101 2.40402 7.83501 2.69702 9.31301 3.62302C10.1938 3.41711 11.0955 3.31375 12 3.31502C12.912 3.31502 13.818 3.41902 14.684 3.62302C16.161 2.69002 17.297 2.39702 18.106 2.52702C18.191 2.54002 18.263 2.55702 18.324 2.57702C18.4628 2.6228 18.5899 2.69846 18.6964 2.79867C18.8028 2.89887 18.886 3.0212 18.94 3.15702C19.427 4.37302 19.46 5.45402 19.242 6.34702C19.933 7.28302 20.3 8.39202 20.3 9.64002C20.3 13.397 18.626 15.305 15.658 16.032C15.783 16.447 15.848 16.911 15.848 17.412C15.8481 18.3174 15.8441 19.2227 15.836 20.128C16.0606 20.177 16.2614 20.3019 16.4047 20.4816C16.548 20.6613 16.6251 20.8849 16.6228 21.1147C16.6206 21.3446 16.5393 21.5667 16.3925 21.7436C16.2457 21.9205 16.0425 22.0414 15.817 22.086C14.678 22.314 13.834 21.554 13.834 20.561L13.836 20.115L13.841 19.41C13.846 18.702 13.848 18.072 13.848 17.412C13.848 16.715 13.665 16.26 13.423 16.052C12.762 15.482 13.097 14.397 13.963 14.3C16.93 13.967 18.3 12.818 18.3 9.64002C18.3 8.68502 17.988 7.89602 17.387 7.23602C17.2604 7.09727 17.1754 6.92565 17.1418 6.74083C17.1082 6.55602 17.1273 6.36547 17.197 6.19102C17.363 5.77702 17.434 5.23402 17.293 4.57702L17.283 4.58002C16.792 4.71902 16.173 5.02002 15.425 5.52902C15.3044 5.61088 15.1673 5.66537 15.0234 5.68869C14.8796 5.71201 14.7323 5.70359 14.592 5.66402C13.7479 5.43031 12.8759 5.31289 12 5.31502C11.11 5.31502 10.228 5.43402 9.40801 5.66502C9.26823 5.70428 9.12158 5.71263 8.97824 5.68949C8.83491 5.66635 8.69834 5.61227 8.57801 5.53102C7.82601 5.02402 7.20401 4.72402 6.71001 4.58402C6.56601 5.23702 6.63701 5.77802 6.80201 6.19102C6.87182 6.36538 6.89111 6.55587 6.85769 6.74068C6.82426 6.9255 6.73947 7.09716 6.61301 7.23602C6.01601 7.89002 5.70001 8.69402 5.70001 9.64002C5.70001 12.812 7.07101 13.968 10.022 14.3C10.887 14.397 11.223 15.477 10.566 16.048C10.374 16.216 10.137 16.78 10.137 17.412V20.562C10.137 21.548 9.30201 22.287 8.17701 22.09C7.94878 22.0499 7.74154 21.9319 7.59073 21.7559C7.43991 21.58 7.35488 21.3572 7.35015 21.1255C7.34543 20.8938 7.42131 20.6677 7.56483 20.4857C7.70835 20.3038 7.9106 20.1774 8.13701 20.128V19.138C7.22701 19.199 6.47501 19.05 5.88301 18.653Z"
																className="fill-slate-300"
															></path>
														</g>
														<defs>
															<clipPath id="clip0_74_307">
																<rect width="24" height="24" fill="white"></rect>
															</clipPath>
														</defs>
													</svg>
												</a>
											) : (
												''
											)}
											{demo_url !== null ? (
												<a href={demo_url} title="Demo">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<g clipPath="url(#clip0_74_310)">
															<path
																d="M10 6V8H5V19H16V14H18V20C18 20.2652 17.8946 20.5196 17.7071 20.7071C17.5196 20.8946 17.2652 21 17 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V7C3 6.73478 3.10536 6.48043 3.29289 6.29289C3.48043 6.10536 3.73478 6 4 6H10ZM21 3V11H19V6.413L11.207 14.207L9.793 12.793L17.585 5H13V3H21Z"
																className="fill-slate-300"
															></path>
														</g>
														<defs>
															<clipPath id="clip0_74_310">
																<rect width="24" height="24" fill="white"></rect>
															</clipPath>
														</defs>
													</svg>
												</a>
											) : (
												''
											)}
										</div>
									</div>
									<p className="text-slate-300 font-bold font-dm-sans mt-5 text-xl leading-9">{project_name}</p>
									<p className="text-slate-300 mt-2 line-clamp-3">{project_description}</p>
									<ul className="flex flex-wrap gap-2 text-sm text-slate-400 mt-5">
										{createdWith.map((created, index) => {
											return <li key={index}>{created}</li>;
										})}
									</ul>
								</div>
							);
						})
					)}
				</div>
			</div>
		</section>
	);
};

export default OtherProjects;
