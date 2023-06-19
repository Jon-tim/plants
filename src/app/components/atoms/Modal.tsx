import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

interface props {
	onClose: () => void;
	children: ReactNode;
}

const Modal = ({ onClose, children }: props) => {
	return ReactDOM.createPortal(
		<div className="fixed top-0 left-0 w-full h-full bg-dark-green/60 backdrop-blur-sm flex items-center justify-center">
			<div className="modal rounded-lg p-5 bg-white">
				<button
					onClick={onClose}
					className=" bg-red-500 mb-4 text-white py-1 px-2 rounded-md"
				>
					Close
				</button>
				{children}
			</div>
		</div>,
		document.body
	);
};

export default Modal;
