import { Toaster } from 'react-hot-toast';
import 'bulma/css/bulma.min.css';

export const metadata = {
	title: 'Visitor Management System',
	description: 'Visitor Management System Cladtek',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<div>
					<Toaster />
				</div>
				<main>
					<section className="section">
						<div className="container">
							<div className="columns is-centered">
								<div className="column is-full">{children}</div>
							</div>
						</div>
					</section>
				</main>
			</body>
		</html>
	);
}
