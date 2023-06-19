import "./globals.css";
import { Josefin_Sans, Cormorant_Infant } from "next/font/google";

const josephin = Josefin_Sans({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--jose",
});
const cormorant = Cormorant_Infant({
	subsets: ["latin"],
	weight: ["400", "700"],
	style: ["normal", "italic"],
	variable: "--cor",
});

export const metadata = {
	title: "Plants",
	description: "List of all plants in the world",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={` ${josephin.variable} ${cormorant.variable}`}
		>
			<body>{children}</body>
		</html>
	);
}
