import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
		<>
			<main
				className={`flex min-h-[85vh]   flex-col items-center  bg-red-300 justify-between p-10 ${inter.className}`}
			>
				<div>
					<div>
						Login Form
					</div>
					<div>
						<form action=""></form>

					</div>
				</div>
			</main>
		</>
	);
}
