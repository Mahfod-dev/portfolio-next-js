import { Grid, Text, Spacer } from '@nextui-org/react';
import Image from 'next/image';
import aboutHero from '../../public/assets/images/aboutHero.svg';

const About = () => {
	return (
		<section id='about'>
			<Spacer />

			<Text
				h4
				css={{
					textAlign: 'center',
					textDecoration: 'underline',
					textDecorationColor: 'red',
				}}>
				About Me
			</Text>

			<Grid.Container gap={2}>
				<Grid xs={12} sm={6} md={6}>
					<Image src={aboutHero} alt='about-image' width={600} height={400} />
				</Grid>
				<Grid xs={12} sm={6} md={6} justify='center' alignItems='center'>
					<Text
						css={{
							textAlign: 'center',
							padding: '$1',
						}}>
						I am a full stack developer, graduated with a master&apos;s degree
						in computer science in 2005, I recently studied in a remote bootcamp
						at the university of san Fransico to have the best development
						trends. I like the self-taught aspect to learn any things. I am now
						spending my time building projects with React JS, Node, Firebase,
						GraphQl and others and learning new technologies.
					</Text>
				</Grid>
			</Grid.Container>
		</section>
	);
};
export default About;
