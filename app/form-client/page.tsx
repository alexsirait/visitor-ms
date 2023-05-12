'use client';
import React from 'react';
import Link from 'next/link';
import HeaderVisitor from '../components/HeaderVisitor';
import AddClient from './addClient';

export default function page() {
	return (
		<>
			<HeaderVisitor />
			<div className="box">
				<AddClient />
			</div>
		</>
	);
}
