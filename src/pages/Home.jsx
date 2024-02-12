import { Jumbotron, Features, TrustClients, AboutUs, OurServices, FeaturedProjects, OtherProjects, Clients, CallToAction, Faq, SocialMedia } from '../components';

const Home = () => {
	return (
		<>
			<Jumbotron textButton={'Tentang Kami'} />
			<Features />
			<TrustClients />
			<AboutUs />
			<OurServices />
			<FeaturedProjects />
			<OtherProjects />
			<Clients />
			<CallToAction />
			<Faq />
			<SocialMedia />
		</>
	);
};

export default Home;
