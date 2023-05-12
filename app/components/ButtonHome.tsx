'use client';
import Link from 'next/link';
import React from 'react';
import { HiDesktopComputer } from 'react-icons/hi';

export default function ButtonHome() {
	return (
		<Link href={'/'} className="button is-link">
			<HiDesktopComputer />
			<span className="ml-2">Home</span>
		</Link>
	);
}
