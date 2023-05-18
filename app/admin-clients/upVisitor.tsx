'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState, SyntheticEvent } from 'react';
import { toast } from 'react-hot-toast';
import { FiEdit3 } from 'react-icons/fi';

export default function UpVisitor({ visitor }: { visitor: any }) {
	const [modal, setModal] = useState(false);
	const [visitorID, setVisitorID] = useState(visitor.visitor_id);
	const [name, setName] = useState(visitor.name);
	const [position, setPosition] = useState(visitor.position);
	const [wantToVisit, setWantToVisit] = useState(visitor.want_to_visit);
	const [remark, setRemark] = useState(visitor.remark);
	const [status, setStatus] = useState(visitor.status);
	const router = useRouter();

	const onupdate = async (e: SyntheticEvent) => {
		e.preventDefault();
		await axios.put(`/api/visitors/${visitor.id}`, {
			visitorID: visitorID,
			name: name,
			position: position,
			wantToVisit: wantToVisit,
			remark: remark,
			status: status,
		});
		setVisitorID('');
		setName('');
		setPosition('');
		setWantToVisit('');
		setRemark('');
		setModal(false);
		router.refresh();
		toast.success('Successfully updated ..');
	};
	return (
		<>
			<button
				className="button is-warning is-small"
				onClick={() => setModal(!modal)}
			>
				<FiEdit3 />
			</button>
			<div className={modal ? 'modal is-active' : 'modal'}>
				<div className="modal-background"></div>
				<div className="modal-content">
					<div className="box">
						<div className="content">
							<h3>Edit Data Visitor</h3>
						</div>
						<form onSubmit={onupdate}>
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
							<div className="field">
								<label className="label">Status</label>
								<div className="control">
									<div className="select is-fullwidth">
										<select
											value={status}
											onChange={(e) => setStatus(e.target.value)}
										>
											<option value="-">-</option>
											<option value="Done">Done</option>
										</select>
									</div>
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
