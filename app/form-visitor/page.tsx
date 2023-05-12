'use client';
import React from 'react';
import Link from 'next/link';
import HeaderVisitor from '../components/HeaderVisitor';
import AddVisitor from './addVisitor';

export default function page() {
	return (
		<>
			<HeaderVisitor />
			<div className="box">
				<AddVisitor />
			</div>
		</>
	);
}
