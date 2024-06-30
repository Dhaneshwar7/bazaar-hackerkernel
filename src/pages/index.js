import Image from 'next/image';
import { Inter } from 'next/font/google';
import Login from '@/components/loginform/Login';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<main
				className={`flex min-h-[82vh]  flex-col items-center   justify-center p-10 ${inter.className}`}
			>
				<div className="">
					<Login />
				</div>
			</main>
		</>
	);
}
