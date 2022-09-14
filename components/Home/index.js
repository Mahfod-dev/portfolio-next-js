import { Grid, Image, Text, Button, Container, Link } from '@nextui-org/react';
import { useMediaQuery } from '../../utils/useMediaQuery';
import { writeText } from '../../utils/character';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { MovingComponent } from 'react-moving-text';

const HomePage = () => {
	const text = 'Maaaa';
	// const [placeHolder, setPlaceholder] = useState('');
	// const index = useRef(1);

	// useEffect(() => {
	// 	const text = 'MaketheWeb';
	// 	function tick() {
	// 		setPlaceholder((prev) => prev + text[index.current]);
	// 		console.log(text[index.current]);

	// 		index.current++;
	// 	}
	// 	if (index.current < text.length - 1) {
	// 		console.log(index.current, text.length);
	// 		let addChar = setInterval(tick, 500);
	// 		return () => clearInterval(addChar);
	// 	}
	// }, [placeHolder]);

	const nexStr = text.split(' ').map((letter, index) => (
		<MovingComponent
			key={index}
			type='effect3D'
			duration='1000ms'
			delay='index * 100ms'
			direction='alternate'
			timing='ease'
			iteration='1'
			fillMode='none'>
			{letter}
		</MovingComponent>
	));

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
