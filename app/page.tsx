'use client';
import React from 'react';
import HeaderVisitor from './components/HeaderVisitor';
import Link from 'next/link';

export default function page() {
	return (
		<>
			<HeaderVisitor />
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
		</>
	);
}
