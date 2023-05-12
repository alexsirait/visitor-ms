'use client';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { BsFillDoorOpenFill } from 'react-icons/bs';
export default function HeaderVisitor() {
	return (
		<div className="content">
			<h1>
				<BsFillDoorOpenFill className="mr-3" />
				<Typewriter words={['Visitor Management System Cladtek']} loop />
			</h1>
		</div>
	);
}
