import {
	Navbar,
	Link,
	Text,
	Avatar,
	Dropdown,
	Image,
	link,
} from '@nextui-org/react';
import ThemeButton from '../Button/ThemeButton';

export const NavBar = () => {
	const collapseItems = ['home', 'about', 'skills', 'projects', 'contact'];

	return (
		<Navbar
			isBordered
			variant='sticky'
			css={{ alignItems: 'center', width: '100%' }}>
			<Navbar.Toggle showIn='xs' />
			<Navbar.Brand
				css={{
					'@xs': {
						w: '12%',
					},
				}}>
				<Text b color='inherit' hideIn='xs' css={{ marginBottom: '20px' }}>
					<Image
						src='/assets/images/Logo4.svg'
						width={120}
						height={120}
						alt='logo'
					/>
				</Text>
			</Navbar.Brand>
			<Navbar.Content
				enableCursorHighlight
				activeColor='secondary'
				hideIn='xs'
				variant='highlight'>
				<Navbar.Link href='#home'>Home</Navbar.Link>
				<Navbar.Link href='#about'>About</Navbar.Link>
				<Navbar.Link href='#skills'>Skills</Navbar.Link>
				<Navbar.Link href='#projects'>Projects</Navbar.Link>
				<Navbar.Link href='#contact'>Contact</Navbar.Link>
			</Navbar.Content>
			<Navbar.Content
				css={{
					'@xs': {
						w: '12%',
						jc: 'flex-end',
					},
				}}>
				<Dropdown placement='bottom-right'>
					<Navbar.Item>
						<Dropdown.Trigger>
							<ThemeButton />
						</Dropdown.Trigger>
					</Navbar.Item>
				</Dropdown>
			</Navbar.Content>
			<Navbar.Collapse>
				{collapseItems.map((item, index) => (
					<Navbar.CollapseItem
						key={item}
						activeColor='primary'
						css={{
							color: index === collapseItems.length - 1 ? '$error' : '',
							opacity: 1,
						}}
						isActive={index === 2}>
						<Link
							color='secondary'
							css={{
								minWidth: '100%',
							}}
							href={`#${item}`}>
							{item}
						</Link>
					</Navbar.CollapseItem>
				))}
			</Navbar.Collapse>
		</Navbar>
	);
};
