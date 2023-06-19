"use client";
import Link from "next/link";
import Modal from "../atoms/Modal";
import { useState } from "react";
import Logo from "../atoms/Logo";

export default function Header() {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<section className={`hero p-4 lg:pt-6`}>
			<nav className="flex items-center justify-between bg-white/50 p-3 rounded-lg backdrop-blur-lg max-w-6xl mx-auto">
				<Logo />
				<div>
					<div
						onClick={toggleModal}
						className="bg-greens rounded-lg w-max px-4 text-center py-3 cursor-pointer duration-300 transition-all hover:bg-light-green block group"
					>
						<p className="text-dark-accent capitalize group-hover:text- transition-all duration-300">
							register / log in
						</p>
					</div>
				</div>
			</nav>
			{showModal && (
				<Modal onClose={toggleModal}>
					<h2>Modal Content</h2>
					<p>This is the content of the modal.</p>
				</Modal>
			)}
		</section>
	);
}
