import { Inter } from 'next/font/google';
import './globals.css';
import AuthProvider from '../context/AuthContext';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<Navbar />
					<Toaster />
					{children}
				</AuthProvider>
			</body>
		</html>
	);
}
