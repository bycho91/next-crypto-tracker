import Head from 'next/head';
import Navbar from './Navbar';
import Searchbar from './Searchbar';


const Layout = ({children, title='CryptoDB'}) => {
	return (
		<div className="layout">
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="header">
				<Navbar />
			</header>

			<main>
				{children}
			</main>
		</div>
	)
}

export default Layout
