import { imageList } from '../../../utils/listImage';
import Image from 'next/image';
import { Card, Grid, Text } from '@nextui-org/react';

const CardImage = () => {
	return (
		<>
			{imageList.map((list, idx) => {
				const { img, title } = list;

				return (
					<Card
						key={idx}
						isPressable
						isHoverable
						variant='shadow'
						css={{
							textGradient: '45deg, $blue600 -20%, $pink600 50%',
							mw: '200px',
							height: '220px',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							textAlign: 'center',
							'&:hover': {
								background: '#FFF380',

								rotate: 'revert',
								color: '$white',
							},
						}}>
						<Card.Body
							css={{
								justifyContent: 'center',
							}}>
							<Grid>
								<div style={{ textAlign: 'center' }}>
									<Image src={img} alt='hello' width={100} height={100} />
									<Text
										css={{
											textGradient: '45deg, $blue600 -20%, $pink600 50%',
										}}
										weight='bold'>
										{title}
									</Text>
								</div>
							</Grid>
						</Card.Body>
					</Card>
				);
			})}
		</>
	);
};
export default CardImage;
