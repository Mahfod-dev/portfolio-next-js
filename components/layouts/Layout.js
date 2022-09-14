import Head from 'next/head';

export const Layout = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || 'Portfolio Mahfod'}</title>
				<meta http-equiv='X-UA-Compatible' content='IE=7' />
				<meta name='author' content='Addi Mahfod' />
				<meta
					name='description'
					content={`
                   Information portfolio ${title} 
                `}
				/>
				<meta name='keywords' content={`XXXX,portfolio,cv,${title}`} />
			</Head>
			<main>{children}</main>
		</>
	);
};
