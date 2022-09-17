import Contact from '../components/Contact';
import HomePage from '../components/Home';
import { Layout } from '../components/layouts';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';
import { NavBar } from '../components/UI';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

export default function Home() {
	return (
		<Layout title='portfolio-mahfod'>
			<NavBar />
			<HomePage />
			<AboutMe />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
			<ToastContainer />
		</Layout>
	);
}
