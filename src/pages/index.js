import Image from 'next/image';
import { Inter } from 'next/font/google';
import Login from '@/components/loginform/Login';
import Footer from '@/components/layouts/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<main
				className={`relative flex min-h-[93vh] flex-col items-center  justify-center px-10 pt-2 pb-10 ${inter.className}`}
			>
				<Login />
				<div className="absolute w-full bottom-0">
					<Footer />
				</div>
			</main>
		</>
	);
}
