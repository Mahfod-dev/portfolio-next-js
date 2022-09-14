import CardImage from '../UI/Card';
import { Grid, Spacer, Text } from '@nextui-org/react';

const Skills = () => {
	return (
		<section id='skills'>
			<Spacer />
			<Text
				h4
				css={{
					textAlign: 'center',
					textAlign: 'center',
					textDecoration: 'underline',
					textDecorationColor: 'red',
					textDecorationWidth: '100px',
				}}>
				Skills
			</Text>
			<Grid.Container
				id='#skills'
				gap={2}
				justify='center'
				css={{ minHeight: '100vh' }}>
				<CardImage id='skills' />
			</Grid.Container>
		</section>
	);
};
export default Skills;
