'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState, SyntheticEvent } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import toast from 'react-hot-toast';
export default function AddVisitor() {
	const [modal, setModal] = useState(false);
	const [visitorID, setVisitorID] = useState('');
	const [name, setName] = useState('');
	const [position, setPosition] = useState('');
	const [wantToVisit, setWantToVisit] = useState('');
	const [remark, setRemark] = useState('');
	const router = useRouter();
	const status = '-';

	const onsubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		await axios.post('/api/visitors', {
			visitorID: visitorID,
			name: name,
			position: position,
			wantToVisit: wantToVisit,
			status: status,
			remark: remark,
		});
		setVisitorID('');
		setName('');
		setPosition('');
		setWantToVisit('');
		setRemark('');
		setModal(false);
		router.refresh();
		toast.success('Successfully submitted ..');
	};
	return (
		<>
			<button
				className="button is-primary mr-3"
				onClick={() => setModal(!modal)}
			>
				<FiPlusCircle />
				<span className="ml-2">Add Visitor</span>
			</button>
			<div className={modal ? 'modal is-active' : 'modal'}>
				<div className="modal-background"></div>
				<div className="modal-content">
					<div className="box">
						<div className="content">
							<h3>Add New Visitor</h3>
						</div>
						<form onSubmit={onsubmit}>
							<div className="field">
								<label className="label">Visitor ID</label>
								<div className="control">
									<input
										type="text"
										className="input"
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
								<label className="label">Want to visit</label>
								<div className="control">
									<input
										type="text"
										className="input"
										placeholder="Enter want to visit .."
										value={wantToVisit}
										onChange={(e) => setWantToVisit(e.target.value)}
									/>
								</div>
							</div>
							<div className="field">
								<label className="label">Remark</label>
								<div className="control">
									<input
										type="text"
										className="input"
										placeholder="Enter remark .."
										value={remark}
										onChange={(e) => setRemark(e.target.value)}
									/>
								</div>
							</div>
							<div className="control mt-5">
								<button
									type="button"
									className="button"
									onClick={() => setModal(!modal)}
								>
									Close
								</button>
								<button type="submit" className="button is-primary mx-3">
									Save
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
