import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const POST = async (req: Request) => {
	const body = await req.json();
	const visitor = await prisma.visitor.create({
		data: {
			visitor_id: body.visitor_id,
			name: body.name,
			position: body.position,
			person_to_visit: body.person_to_visit,
			company_name: body.company_name,
			purpose_of_visit: body.purpose_of_visit,
			type_visitor: body.type_visitor,
			status: body.status,
		},
	});
	return NextResponse.json(visitor);
};
