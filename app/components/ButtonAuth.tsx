'use client';
import { signIn, signOut } from 'next-auth/react';
import React from 'react';
import { GiFingerPrint } from 'react-icons/gi';

export function ButtonSignIn() {
	return (
		<button onClick={() => signIn()} className="button is-info ml-3">
			<GiFingerPrint className="mr-3" />
			Admin
		</button>
	);
}

export function ButtonSignOut() {
	return (
		<button onClick={() => signOut()} className="button is-danger ml-3">
			<GiFingerPrint className="mr-3" />
			Sign Out
		</button>
	);
}
