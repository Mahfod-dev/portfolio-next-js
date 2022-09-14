import { Container, Grid, Spacer, Text, Row } from '@nextui-org/react';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';

const Footer = () => {
	return (
		<>
			<Grid.Container css={{ margin: 0 }} gap={2} alignItems='center'>
				<Grid justify='center' xs={12} sm={6} md={6} xl={12}>
					<Image
						src='/assets/images/Logo4.svg'
						width={140}
						height={140}
						alt='logo'
						hidein={'xs'}
					/>
				</Grid>
				<Spacer />
				<Grid justify='center' xs={12} sm={6} md={6} xl={12}>
					<Text css={{ textAlign: 'center' }} justify='center' weight='bold'>
						© {new Date().getFullYear()} MAHFOD_DEV
						<br /> FRANCE.All rights reserved
					</Text>
				</Grid>

				<Grid justify='center' xs={12} sm={6} md={6} xl={12}>
					<SocialIcon
						color='white'
						url='https://linkedin.com/in/mahfod-addi/'
					/>
					<Spacer />
					<SocialIcon url='https://github.com/Mahfod-dev' />
					<Spacer />
					<SocialIcon url='https://stackoverflow.com/users/16902223/mahfod' />
				</Grid>
			</Grid.Container>
		</>
	);
};
export default Footer;
