'use client';
import React, { useState } from 'react';
import UpVisitor from './upVisitor';
import DelVisitor from './delVisitor';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { useForm } from 'react-hook-form';

export default function MainSearch({ visitors, session }: any) {
	const [search, setSearch] = useState('');
	const { register, handleSubmit } = useForm();
	const onSubmit = (data: any) => setSearch(data.search);

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="field mb-5">
					<div className="control mb-2">
						<label className="label">Visitor ID</label>
						<input
							placeholder="Visitor ID .."
							className="input"
							{...register('search')}
						/>
					</div>
					<div className="control">
						<input className="button" type="submit" />
					</div>
				</div>
			</form>
			{search !== '' && (
				<table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
					<thead>
						<tr>
							<th></th>
							<th>Visitor ID</th>
							<th>Name</th>
							<th>Position</th>
							<th>Company</th>
							<th>Person to Visit</th>
							<th>Purpose of Visit</th>
							<th>Visiting Time</th>
							<th>Visit Completion Time</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{visitors
							?.filter((visitor: any) => visitor.visitor_id === search)
							.map((visitor: any, index: number) => (
								<tr key={index}>
									<td>{++index}</td>
									<td>{visitor.visitor_id}</td>
									<td>{visitor.name}</td>
									<td>{visitor.position}</td>
									<td>{visitor.company_name}</td>
									<td>{visitor.person_to_visit}</td>
									<td>{visitor.purpose_of_visit}</td>
									<td>{visitor.created_at.toLocaleString() + ''}</td>
									{visitor.status == 'Done' ? (
										<>
											<td>{visitor.updated_at.toLocaleString()}</td>
										</>
									) : (
										<>
											<td>-</td>
										</>
									)}
									<td>
										{visitor.status !== 'Done' && (
											<>
												<UpVisitor visitor={visitor} />
											</>
										)}
										{session && <DelVisitor visitor={visitor} />}
										{visitor.status === 'Done' && !session && (
											<span>
												<IoIosCheckmarkCircleOutline />
											</span>
										)}
									</td>
								</tr>
							))}
					</tbody>
				</table>
			)}
		</>
	);
}
