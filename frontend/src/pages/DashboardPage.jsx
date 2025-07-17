

import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";
import logo from "../assets/logo.png";

const HomePage = () => {
	const { user, logout } = useAuthStore();

	const handleLogout = () => {
		logout();
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{ duration: 0.5 }}
			className="max-w-md w-full mx-auto mt-10 p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-opacity-90 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
		>
			<div className="flex flex-col items-center text-center space-y-4">
				<motion.img
					src={logo}
					alt="App Logo"
					className="mt-2 w-28 h-28 opacity-80 mix-blend-screen"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				/>

				<motion.h1
					className="text-2xl font-bold text-white"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
				>
					Hey {user?.name || "Developer"}! 👋
				</motion.h1>

				<motion.h2
					className="text-base text-gray-300"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
				>
					Welcome to your dashboard
				</motion.h2>

				<motion.p
					className="text-sm text-gray-400"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
				>
					Quick overview of your profile and activity.
				</motion.p>
			</div>

			{/* Info Cards */}
			<div className="mt-6 space-y-4">
				<motion.div
					className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 shadow-sm"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
				>
					<h3 className="text-base font-semibold text-green-400 mb-2">👤 Profile</h3>
					<p className="text-sm text-gray-300">Name: {user.name}</p>
					<p className="text-sm text-gray-300">Email: {user.email}</p>
				</motion.div>

				<motion.div
					className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 shadow-sm"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7 }}
				>
					<h3 className="text-base font-semibold text-green-400 mb-2">📊 Activity</h3>
					<p className="text-sm text-gray-300">
						<span className="font-bold">Joined:</span>{" "}
						{new Date(user.createdAt).toLocaleDateString("en-US", {
							year: "numeric",
							month: "short",
							day: "numeric",
						})}
					</p>
					<p className="text-sm text-gray-300">
						<span className="font-bold">Last Login:</span> {formatDate(user.lastLogin)}
					</p>
				</motion.div>
			</div>

			{/* Logout Button */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.8 }}
				className="mt-5"
			>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={handleLogout}
					className="w-full py-2.5 px-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:from-red-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-sm"
				>
					Logout
				</motion.button>
			</motion.div>
		</motion.div>
	);
};

export default HomePage;