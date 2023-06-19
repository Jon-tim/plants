import { ReactNode } from "react";

interface props {
	children: ReactNode;
	fn: Function;
}

export default function Button({ children, fn }: props) {
	return (
		<section className="bg-greens rounded-lg w-max px-4 text-center py-3 cursor-pointer duration-300 transition-all hover:bg-light-green group">
			<p className="text-dark-accent capitalize group-hover:text- transition-all duration-300">
				{children}
			</p>
		</section>
	);
}
