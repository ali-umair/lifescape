import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
			>
				{children}
				<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2 text-ellipsis p-7">
					<a
						className="flex items-center gap-2 hover:underline hover:underline-offset-4"
						href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							aria-hidden
							src="/file.svg"
							alt="File icon"
							width={16}
							height={16}
						/>
						Learn
					</a>
					<a
						className="flex items-center gap-2 hover:underline hover:underline-offset-4"
						href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							aria-hidden
							src="/window.svg"
							alt="Window icon"
							width={16}
							height={16}
						/>
						Examples
					</a>
					<a
						className="flex items-center gap-2 hover:underline hover:underline-offset-4"
						href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							aria-hidden
							src="/globe.svg"
							alt="Globe icon"
							width={16}
							height={16}
						/>
						Go to nextjs.org →
					</a>
				</footer>
			</body>
		</html>
	);
}
