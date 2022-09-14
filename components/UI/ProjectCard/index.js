import { Card, Col, Row, Button, Text, Spacer } from '@nextui-org/react';

const ProjectCard = ({ img, title, feature, link, github }) => {
	return (
		<Card
			css={{ w: '90%', margin: '0 auto', placeItems: 'center', h: '500px' }}>
			<Card.Body css={{ p: 0 }}>
				<Card.Image
					src={img.src}
					width='100%'
					height='100%'
					objectFit='cover'
					alt='Card example background'
				/>
			</Card.Body>
			<Card.Footer
				isBlurred
				css={{
					position: 'absolute',
					bgBlur: '#ffffff66',
					borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
					bottom: 0,
					zIndex: 1,
				}}>
				<Row>
					<Col>
						<Text weight='bold' color='#000' size={12}>
							{title}
						</Text>
						<Text weight='bold' color='#000' size={12}>
							{feature}
						</Text>
					</Col>
					<Col>
						<Row justify='flex-end'>
							<Button flat auto rounded color='secondary'>
								<Text
									css={{ color: 'inherit' }}
									size={12}
									weight='bold'
									transform='uppercase'>
									<a href={github} target='_blank' rel='noreferrer'>
										Source Code
									</a>
								</Text>
							</Button>
							<Spacer />
							<Button flat auto rounded color='secondary'>
								<Text
									css={{ color: 'inherit' }}
									size={12}
									weight='bold'
									transform='uppercase'>
									<a href={link} target='_blank' rel='noreferrer'>
										Live Site
									</a>
								</Text>
							</Button>
						</Row>
					</Col>
				</Row>
			</Card.Footer>
		</Card>
	);
};

export default ProjectCard;
