import { Text, Grid, Spacer } from '@nextui-org/react';
import ProjectCard from '../UI/ProjectCard';
import comflyStore from '../../public/assets/images/cardProjects/comflyStore.png';
import gitStore from '../../public/assets/images/cardProjects/github.png';
import gitSearch from '../../public/assets/images/cardProjects/githubSearch.png';
import proshop from '../../public/assets/images/cardProjects/proshop.png';

const Projects = () => {
	return (
		<section id='projects'>
			<Spacer />
			<Spacer />
			<Text
				h4
				css={{
					textAlign: 'center',
					textDecoration: 'underline',
					textDecorationColor: 'red',
					textDecorationWidth: '100px',
				}}>
				The Latest Projects
			</Text>
			<Spacer />
			<Grid.Container justify='center'>
				<Grid xs={12} justify='center'>
					<ProjectCard
						img={comflyStore}
						title='React Stripe Styled  Axios'
						feature='Context'
						link='https://comfly-store.netlify.app/'
						github='https://github.com/Mahfod-dev/comfly-shop'
					/>
				</Grid>
				<Spacer />
				<Grid xs={12} justify='center'>
					<ProjectCard
						img={gitStore}
						title='React Tailwind Axios'
						feature='Context'
						link='https://githubfinder-ten.vercel.app/'
						github='https://github.com/Mahfod-dev/githubfinder'
					/>
				</Grid>
				<Spacer />
				<Grid xs={12} justify='center'>
					<ProjectCard
						img={gitSearch}
						title='React Chart Axios Oauth'
						feature='Context'
						link='https://search-github-usersbyname.netlify.app/'
						github='https://github.com/Mahfod-dev/GitHub-Users'
					/>
				</Grid>
				<Spacer />
				<Grid xs={12} justify='center'>
					<ProjectCard
						img={proshop}
						title='React Node Express MongoDB'
						feature='Redux'
						link='https://shoptopro-app.herokuapp.com/'
						github='https://github.com/Mahfod-dev/PROSHOP'
					/>
				</Grid>
			</Grid.Container>
		</section>
	);
};
export default Projects;
