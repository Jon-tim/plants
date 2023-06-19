import Button from "../atoms/Button";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="hero-bg h-full w-full p-4 max-w-6xl mx-auto">
			<section className="mt-10 flex flex-col gap-4">
				<h1 className="capitalize text-5xl lg:text-7xl lg:w-[650px]">
					that one catalogue for <span className="">plants</span>
				</h1>
				<p className="lg:text-lg lg:w-2/3 bg-white/50 backdrop-blur-lg p-2 rounded-lg">
					Discover a diverse collection of vibrant flowers and lush
					greenery. Find your perfect green companion, get inspired,
					and bring the beauty of nature into your surroundings.
					Explore a world of botanical wonders at your fingertips.
				</p>
				<Link
					href=""
					className="bg-greens rounded-lg w-max px-4 text-center py-3 cursor-pointer duration-300 transition-all hover:bg-light-green group flex"
				>
					<p className="text-dark-accent capitalize group-hover:text- transition-all duration-300">
						explore the greenry
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						className="ml-2 rotate-180 -translate-x-1 fill-dark-green  transition-all duration-300 inline-block group-hover:-translate-x-0"
					>
						<path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
					</svg>
				</Link>
			</section>
		</section>
	);
}
