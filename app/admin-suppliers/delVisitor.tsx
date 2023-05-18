'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FiTrash2 } from 'react-icons/fi';

export default function DelVisitor({ visitor }: { visitor: any }) {
	const [modal, setModal] = useState(false);
	const router = useRouter();
	const onsubmit = async (id: number) => {
		await axios.delete(`/api/visitors/${id}`);
		setModal(false);
		router.refresh();
		toast.success('Deleted successfully ..');
	};
	return (
		<>
			<button
				className="button is-danger is-small"
				onClick={() => setModal(!modal)}
			>
				<FiTrash2 />
			</button>
			<div className={modal ? 'modal is-active' : 'modal'}>
				<div className="modal-background"></div>
				<div className="modal-content">
					<div className="box">
						<div className="content">
							<h3>Delete data visitor {visitor.name}</h3>
						</div>
						<div className="control">
							<button
								className="button"
								type="button"
								onClick={() => setModal(false)}
							>
								Close
							</button>
							<button
								type="button"
								className="button is-primary mx-3"
								onClick={async () => await onsubmit(visitor.id)}
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
