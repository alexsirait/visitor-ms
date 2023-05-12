'use client';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, SyntheticEvent } from 'react';
import toast from 'react-hot-toast';
export default function AddVisitor() {
	const [modal, setModal] = useState(false);
	const [visitorID, setVisitorID] = useState(
		'C' + Math.floor(Math.random() * 9000 + 1000)
	);
	const [name, setName] = useState('');
	const [companyName, setCompanyName] = useState('');
	const [position, setPosition] = useState('');
	const [personToVisit, setPersonToVisit] = useState('');
	const [purposeOfVisit, setPurposeOfVisit] = useState('');
	const router = useRouter();
	const status = '-';
	const typeVisitor = 'Visitor/Guest';

	const onsubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		await axios.post('/api/visitors', {
			visitor_id: visitorID,
			name: name,
			position: position,
			person_to_visit: personToVisit,
			company_name: companyName,
			purpose_of_visit: purposeOfVisit,
			type_visitor: typeVisitor,
			status: status,
		});
		setVisitorID('');
		setName('');
		setPosition('');
		setPersonToVisit('');
		setPurposeOfVisit('');
		setCompanyName('');
		setModal(false);
		router.refresh();
		toast.success('Successfully submitted ..');
	};
	return (
		<>
			<div className="content has-text-centered">
				<h2>Visitor/Guest</h2>
			</div>
			<form onSubmit={onsubmit}>
				<div className="field">
					<label className="label">Visitor ID</label>
					<div className="control">
						<input
							type="text"
							className="input"
							readOnly
							placeholder="Enter visitor ID .."
							value={visitorID}
							onChange={(e) => setVisitorID(e.target.value)}
						/>
					</div>
				</div>
				<div className="field">
					<label className="label">Name</label>
					<div className="control">
						<input
							type="text"
							className="input"
							placeholder="Enter name .."
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
				</div>
				<div className="field">
					<label className="label">Position</label>
					<div className="control">
						<input
							type="text"
							className="input"
							placeholder="Enter position .."
							value={position}
							onChange={(e) => setPosition(e.target.value)}
						/>
					</div>
				</div>
				<div className="field">
					<label className="label">Company Name</label>
					<div className="control">
						<input
							type="text"
							className="input"
							placeholder="Enter company name .."
							value={companyName}
							onChange={(e) => setCompanyName(e.target.value)}
						/>
					</div>
				</div>
				<div className="field">
					<label className="label">Person to visit</label>
					<div className="control">
						<input
							type="text"
							className="input"
							placeholder="Enter want to visit .."
							value={personToVisit}
							onChange={(e) => setPersonToVisit(e.target.value)}
						/>
					</div>
				</div>
				<div className="field">
					<label className="label">Purpose of Visit</label>
					<div className="control">
						<input
							type="text"
							className="input"
							placeholder="Enter remark .."
							value={purposeOfVisit}
							onChange={(e) => setPurposeOfVisit(e.target.value)}
						/>
					</div>
				</div>
				<div className="control mt-5">
					<Link href={'/'} className="button">
						Close
					</Link>
					<button type="submit" className="button is-primary mx-3">
						Save
					</button>
				</div>
			</form>
		</>
	);
}
