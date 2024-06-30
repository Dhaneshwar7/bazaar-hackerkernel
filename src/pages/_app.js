import Layout from '@/components/layouts/Layout';
import '@/styles/globals.css';
import { BazaarProvider } from '@/utils/BazzarReducer';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class">
			<BazaarProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</BazaarProvider>
		</ThemeProvider>
	);
}
