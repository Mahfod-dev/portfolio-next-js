import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { darkTheme, lightTheme } from '../themes';
import useDarkMode from 'use-dark-mode';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
	const darkMode = useDarkMode(false);

	return (
		<NextThemesProvider
			defaultTheme='system'
			attribute='class'
			value={{
				light: lightTheme.className,
				dark: darkTheme.className,
			}}>
			<NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
				<Component {...pageProps} />
			</NextUIProvider>
		</NextThemesProvider>
	);
}

export default MyApp;
