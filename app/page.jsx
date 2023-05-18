'use client';
import React from 'react';
import HeaderVisitor from './components/HeaderVisitor';
import Link from 'next/link';
import { SessionProvider } from 'next-auth/react';

export default function page({ Component, pageProps }) {
	return (
		<>
			<SessionProvider session={pageProps?.session}>
				<HeaderVisitor />
				<div className="">
					<div className="box">
						<div className="content">
							<Link
								href={'/form-visitor'}
								className="card-footer-item p-5 has-text-weight-bold"
							>
								<h2>Visitor/Guest</h2>
							</Link>
						</div>
					</div>
					<div className="box">
						<div className="content">
							<Link
								href={'/form-client'}
								className="card-footer-item p-5 has-text-weight-bold"
							>
								<h2>Client/Investor/Customer</h2>
							</Link>
						</div>
					</div>
					<div className="box">
						<div className="content">
							<Link
								href={'/form-supplier'}
								className="card-footer-item p-5 has-text-weight-bold"
							>
								<h2>Supplier</h2>
							</Link>
						</div>
					</div>
					<div className="p-6"></div>
					<div className="box">
						<div className="content">
							<Link
								href={'/admin'}
								className="card-footer-item p-5 has-text-weight-bold"
							>
								<h2>Admin</h2>
							</Link>
						</div>
					</div>
				</div>
			</SessionProvider>
		</>
	);
}
