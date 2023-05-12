import { PrismaClient } from '@prisma/client';
import HeaderVisitor from '../components/HeaderVisitor';
import Chart from '../components/Chart';
const prisma = new PrismaClient();

const getVisitors = async () => {
	const res = await prisma.visitor.findMany({
		select: { created_at: true, updated_at: true, status: true },
	});
	return res;
};

export default async function Home() {
	const [visitors] = await Promise.all([getVisitors()]);

	var currentdate = new Date().toISOString().split('T')[0];

	const count: any | undefined = visitors.filter(
		(x: any) => x.created_at.toISOString().split('T')[0] === currentdate
	);

	const countStatusDone: any | undefined = visitors.filter(
		(x: any) =>
			x.status === 'Done' &&
			x.created_at.toISOString().split('T')[0] === currentdate
	);

	const countStatusNot: any | undefined = visitors.filter(
		(x: any) =>
			x.status === '-' &&
			x.created_at.toISOString().split('T')[0] === currentdate
	);

	const january: any | undefined = visitors.filter(
		(x: any) => x.created_at.getMonth() + 1 === 1
	);
	const february: any | undefined = visitors.filter(
		(x: any) => x.created_at.getMonth() + 1 === 2
	);
	const march: any | undefined = visitors.filter(
		(x: any) => x.created_at.getMonth() + 1 === 3
	);
	const april: any | undefined = visitors.filter(
		(x: any) => x.created_at.getMonth() + 1 === 4
	);
	const may: any | undefined = visitors.filter(
		(x: any) => x.created_at.getMonth() + 1 === 5
	);

	const june: any | undefined = visitors.filter(
		(x: any) => x.created_at.getMonth() + 1 === 6
	);
	const july: any | undefined = visitors.filter(
		(x: any) => x.created_at.getMonth() + 1 === 7
	);
	const august: any | undefined = visitors.filter(
		(x: any) => x.created_at.getMonth() + 1 === 8
	);
	const september: any | undefined = visitors.filter(
		(x: any) => x.created_at.getMonth() + 1 === 9
	);
	const oktober: any | undefined = visitors.filter(
		(x: any) => x.created_at.getMonth() + 1 === 10
	);
	const november: any | undefined = visitors.filter(
		(x: any) => x.created_at.getMonth() + 1 === 11
	);
	const desember: any | undefined = visitors.filter(
		(x: any) => x.created_at.getMonth() + 1 === 12
	);
	return (
		<>
			<HeaderVisitor />

			<Chart
				{...{
					january,
					february,
					march,
					april,
					may,
					june,
					july,
					august,
					september,
					oktober,
					november,
					desember,
					count,
					countStatusDone,
					countStatusNot,
				}}
			/>
		</>
	);
}
