import { Grid, Image, Text, Button, Container, Link } from '@nextui-org/react';

const HomePage = () => {
	return (
		<Grid.Container
			id='home'
			gap={2}
			justify='center'
			css={{ placeItems: 'center', minHeight: '100vh' }}>
			<Grid xs={6}>
				<Container>
					<Text
						h1
						size={60}
						css={{
							textGradient: '45deg, $purple600 -20%, $pink600 100%',
							'@xsMax': {
								width: '200px',
							},
						}}
						weight='bold'>
						Make The Web
					</Text>

					<Text
						h1
						size='$6xl'
						hideIn='xs'
						css={{
							textGradient: '45deg, $yellow600 -20%, $red600 100%',
						}}
						weight='bold'>
						Prettier
					</Text>
					<Button
						as={Link}
						hideIn={'xs'}
						href='#about'
						color='gradient'
						auto
						ghost>
						<Text>Read More</Text>
					</Button>
				</Container>
			</Grid>

			<Grid xs={3} sm={4} md={6} xl={0} justify='center'>
				<Image
					src='/assets/images/hero-banner.svg'
					width={600}
					height={200}
					alt='hero-banner'
				/>
			</Grid>
		</Grid.Container>
	);
};
export default HomePage;
