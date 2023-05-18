import Link from 'next/link';
import HeaderVisitor from '../components/HeaderVisitor';

export default async function page() {
	return (
		<>
			<HeaderVisitor />
			<div className="">
				<div className="box">
					<div className="content">
						<Link
							href={'/admin-visitors'}
							className="card-footer-item p-5 has-text-weight-bold"
						>
							<h2>Visitor/Guest</h2>
						</Link>
					</div>
				</div>
				<div className="box">
					<div className="content">
						<Link
							href={'/admin-clients'}
							className="card-footer-item p-5 has-text-weight-bold"
						>
							<h2>Client/Investor/Customer</h2>
						</Link>
					</div>
				</div>
				<div className="box">
					<div className="content">
						<Link
							href={'/admin-suppliers'}
							className="card-footer-item p-5 has-text-weight-bold"
						>
							<h2>Supplier</h2>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
