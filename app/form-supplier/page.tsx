'use client';
import React from 'react';
import Link from 'next/link';
import HeaderVisitor from '../components/HeaderVisitor';
import AddSupplier from './addSupplier';

export default function page() {
	return (
		<>
			<HeaderVisitor />
			<div className="box">
				<AddSupplier />
			</div>
		</>
	);
}
