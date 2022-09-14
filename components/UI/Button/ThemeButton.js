import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';

const ThemeButton = () => {
	const { setTheme } = useNextTheme();
	const { isDark } = useTheme();

	return (
		<>
			<Switch
				checked={isDark}
				color='secondary'
				onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
			/>
		</>
	);
};

export default ThemeButton;
