import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import HeaderVisitor from '../components/HeaderVisitor';
import ButtonHome from '../components/ButtonHome';
import UpVisitor from '../admin-visitors/upVisitor';
import DelVisitor from '../admin-visitors/delVisitor';
import { useForm, SubmitHandler } from 'react-hook-form';

const prisma = new PrismaClient();

const getVisitors = async () => {
	const res = await prisma.visitor.findMany({
		where: {
			visitor_id: 'asd',
		},
	});
	return res;
};

type Inputs = {
	example: string;
	exampleRequired: string;
};

export default async function page() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
	console.log(watch('example'));
	const [visitors] = await Promise.all([getVisitors()]);
	const session = await getServerSession(authOptions);

	return (
		<>
			<HeaderVisitor />
			<div className="box">
				<div className="mb-4">
					<ButtonHome />
				</div>
				<div className="">
					<form onSubmit={handleSubmit(onSubmit)}>
						<input defaultValue="test" {...register('example')} />
						<input {...register('exampleRequired', { required: true })} />
						{errors.exampleRequired && <span>This field is required</span>}

						<input type="submit" />
					</form>
				</div>
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
						{visitors?.map((visitor: any, index: number) => (
							<tr key={index}>
								<td>{++index}</td>
								<td>{visitor.visitor_id}</td>
								<td>{visitor.name}</td>
								<td>{visitor.position}</td>
								<td>{visitor.company_name}</td>
								<td>{visitor.person_to_visit}</td>
								<td>{visitor.purpose_of_visit}</td>
								<td>{visitor.created_at.toLocaleString()}</td>
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
			</div>
		</>
	);
}
