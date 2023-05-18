import { PrismaClient } from '@prisma/client';
import DelVisitor from './delVisitor';
import AddVisitor from './addVisitor';
import UpVisitor from './upVisitor';
import { ButtonSignIn, ButtonSignOut } from '../components/ButtonAuth';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import HeaderVisitor from '../components/HeaderVisitor';
import ButtonHome from '../components/ButtonHome';
import MainSearch from '../search-visitor/mainSearch';

const prisma = new PrismaClient();

const getVisitors = async () => {
	const res = await prisma.visitor.findMany({
		where: {
			type_visitor: 'Client/Investor/Customer',
		},
	});
	return res;
};

export default async function Visitor() {
	const [visitors] = await Promise.all([getVisitors()]);
	const session = await getServerSession(authOptions);

	return (
		<>
			<HeaderVisitor />
			<div className="box">
				<div className="mb-4">
					{/* <AddVisitor /> */}
					<ButtonHome />
					{!session ? <ButtonSignIn /> : <ButtonSignOut />}
				</div>
				<MainSearch visitors={visitors} session={session} />
			</div>
		</>
	);
}
