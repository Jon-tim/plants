import Header from "./components/molecules/Header";
import Hero from "./components/molecules/Hero";

export default function Home() {
	return (
		<main className="main h-screen overflow-hidden">
			<section className="main-bd w-full h-full backdrop-blur-sm bg-white/30">
				<Header />
				<Hero />
			</section>
		</main>
	);
}
