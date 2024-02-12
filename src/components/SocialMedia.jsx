const SocialMedia = () => {
	const InstagramIcon = () => {
		const icon = `<svg width="24" height="24" viewBox="-2.4 -2.4 28.80 28.80" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#0f172a" stroke="#0f172a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>
										.cls-1 {
											fill: none;
											stroke: #0f172a;
											stroke-miterlimit: 10;
											stroke-width: 1.91px;
										}
										.cls-2 {
											fill: #0f172a;
										}
									</style></defs><rect class="cls-1" x="1.5" y="1.5" width="21" height="21" rx="3.82"></rect><circle class="cls-1" cx="12" cy="12" r="4.77"></circle><circle class="cls-2" cx="18.2" cy="5.8" r="1.43"></circle></g></svg>`;

		return (
			<div>
				<div dangerouslySetInnerHTML={{ __html: icon }} />
			</div>
		);
	};

	return (
		<section className="px-7 mt-16 lg:mt-28 bg-gradient-to-br from-slate-200 to-slate-100 py-14">
			<div className="md:container">
				<h2 className="font-dm-sans text-slate-900 text-2xl relative sm:text-3xl text-center">Ikuti sosial media kami</h2>
				<p className="text-center text-slate-700 mt-2 text-lg">Dapatkan informasi terbaru dari beberapa sosial media.</p>
				<ul className="mt-8 md:mt-10 grid gap-10 sm:grid-cols-2 xl:grid-cols-[450px_450px] xl:justify-center">
					<li>
						<a href="https://github.com/moweb18" className="flex gap-4">
							<div className="shadow h-12 w-14 bg-slate-50 rounded-lg border-t flex justify-center items-center flex-shrink-0">
								<svg fill="#0f172a" width="24px" height="24px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
									<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
									<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
									<g id="SVGRepo_iconCarrier">
										<path
											d="M1873.256 674.212c0-122.468-35.728-230.622-106.325-321.88 15.712-57.683 32.5-171.972-20.77-313.703-5.596-15.066-17.864-26.796-33.146-32.07-19.155-6.564-122.144-30.347-328.552 110.953-84.157-22.169-172.94-33.576-264.844-34.114-91.582.538-180.366 11.945-264.306 34.114C648.689-23.68 545.7-.005 526.437 6.56c-15.282 5.165-27.55 17.003-33.146 32.177-53.162 141.623-36.374 255.912-20.555 313.594-70.704 91.582-106.54 199.629-106.54 321.88 0 422.826 221.905 557.131 432.188 605.666-46.49 50.903-95.24 125.158-105.68 219.537-71.78 26.044-257.633 78.13-325.109-44.015-3.013-5.596-73.394-137.641-215.017-148.08-25.075 1.184-84.587 4.305-101.052 54.346-18.51 55.961 39.495 97.716 67.906 117.41.538.323 55.745 31.962 93.841 132.045.969 4.628 23.783 114.72 134.951 181.55 87.492 52.731 202.319 63.493 341.252 32.284 0 23.46-.323 48.212-.43 63.386l-.324 31.101H796.34l.215-29.81c1.937-161.532 2.045-164.653-30.778-181.656-12.484-6.457-27.012-7.964-40.356-3.659-136.243 41.002-246.98 40.033-320.052-2.798-70.488-41.54-85.985-108.908-88.89-119.67-3.875-10.653-8.072-20.662-12.269-30.24 126.987 145.713 372.138 77.161 463.289 33.792 18.833-8.825 30.778-27.765 30.778-48.535 0-149.372 148.295-244.182 149.802-245.15 19.371-12.16 28.949-35.19 23.998-57.36-4.95-22.276-23.352-39.065-46.06-41.755-223.626-26.796-452.204-109.338-452.204-518.388 0-106.325 33.577-198.983 99.76-275.175 12.915-15.067 16.681-36.052 9.579-54.562-9.793-25.397-36.482-112.782-.323-234.819 35.729 4.09 110.845 24.321 231.16 110.307 13.344 9.578 30.455 12.376 46.383 7.856 80.497-23.568 170.356-36.267 259.248-36.805 89.321.538 179.073 13.237 259.786 36.805 15.927 4.52 32.93 1.722 46.382-7.856 121.176-86.631 196.4-106.433 230.73-110.63 36.482 122.145 9.793 209.745 0 235.142-7.21 18.51-3.444 39.603 9.578 54.562 66.076 75.977 99.545 168.527 99.545 275.175 0 409.157-229.115 491.161-453.173 517.527-20.985 2.475-38.634 16.896-44.984 37.02-6.456 20.017-.538 42.078 15.067 56.284 6.35 5.703 14.958 12.483 25.074 20.231 51.333 39.28 137.211 105.034 137.211 259.571 0 85.448-1.399 354.273-1.399 354.273l107.617.539s1.399-269.257 1.399-354.812c0-141.838-56.499-229.976-110.845-285.937 210.39-48.427 431.65-182.517 431.65-604.696"
											fillRule="evenodd"
										></path>
									</g>
								</svg>
							</div>
							<div className="sm:max-w-sm">
								<span className="text-slate-900 font-bold">Github</span>
								<p className="text-slate-500 font-medium text-sm sm:text-base">Ikuti halaman organisasi github MoWeb untuk melihat proyek terbaru kami</p>
							</div>
						</a>
					</li>
					<li>
						<a href="https://www.facebook.com/people/Modif-Website/100090057253588/" className="flex gap-4">
							<div className="shadow h-12 w-14 bg-slate-50 rounded-lg border-t flex justify-center items-center flex-shrink-0">
								<svg fill="#0f172a" viewBox="0 0 1920 1920" width="24" height="24" xmlns="http://www.w3.org/2000/svg" stroke="#0f172a">
									<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
									<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
									<g id="SVGRepo_iconCarrier">
										<path
											d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z"
											fillRule="evenodd"
										></path>
									</g>
								</svg>
							</div>
							<div className="sm:max-w-sm">
								<span className="text-slate-900 font-bold">Facebook</span>
								<p className="text-slate-500 font-medium text-sm sm:text-base">Sukai halaman facebook MoWeb untuk mendapatkan info terbaru</p>
							</div>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/modifweb/" className="flex gap-4">
							<div className="shadow h-12 w-14 bg-slate-50 rounded-lg border-t flex justify-center items-center flex-shrink-0">
								<InstagramIcon />
							</div>
							<div className="sm:max-w-sm">
								<span className="text-slate-900 font-bold">Instagram</span>
								<p className="text-slate-500 font-medium text-sm sm:text-base">Ikuti Instagram MoWeb untuk mendapatkan info terbaru</p>
							</div>
						</a>
					</li>
					<li>
						<a href="https://t.me/modifweb" className="flex gap-4">
							<div className="shadow h-12 w-14 bg-slate-50 rounded-lg border-t flex justify-center items-center flex-shrink-0">
								<svg fill="#0f172a" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
									<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
									<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
									<g id="SVGRepo_iconCarrier">
										<path d="M228.646,34.7676a11.96514,11.96514,0,0,0-12.21778-2.0752L31.87109,105.19729a11.99915,11.99915,0,0,0,2.03467,22.93457L84,138.15139v61.833a11.8137,11.8137,0,0,0,7.40771,11.08593,12.17148,12.17148,0,0,0,4.66846.94434,11.83219,11.83219,0,0,0,8.40918-3.5459l28.59619-28.59619L175.2749,217.003a11.89844,11.89844,0,0,0,7.88819,3.00195,12.112,12.112,0,0,0,3.72265-.59082,11.89762,11.89762,0,0,0,8.01319-8.73925L232.5127,46.542A11.97177,11.97177,0,0,0,228.646,34.7676ZM32.2749,116.71877a3.86572,3.86572,0,0,1,2.522-4.07617L203.97217,46.18044,87.07227,130.60769,35.47461,120.28811A3.86618,3.86618,0,0,1,32.2749,116.71877Zm66.55322,86.09375A3.99976,3.99976,0,0,1,92,199.9844V143.72048l35.064,30.85669ZM224.71484,44.7549,187.10107,208.88772a4.0003,4.0003,0,0,1-6.5415,2.10937l-86.1543-75.8164,129.66309-93.645A3.80732,3.80732,0,0,1,224.71484,44.7549Z"></path>
									</g>
								</svg>
							</div>
							<div className="sm:max-w-sm">
								<span className="text-slate-900 font-bold">Telegram</span>
								<p className="text-slate-500 font-medium text-sm sm:text-base">Ikuti channel Telegram MoWeb untuk mendapatkan info terbaru</p>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default SocialMedia;
