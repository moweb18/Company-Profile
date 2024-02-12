import { Header, Footer } from './components';

// eslint-disable-next-line react/prop-types
const App = ({ children }) => {
	return (
		<>
			<Header />
			<main className="mt-[91px]">{children}</main>
			<Footer />
		</>
	);
};

export default App;
