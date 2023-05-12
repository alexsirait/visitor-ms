import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const PUT = async (
	req: Request,
	{ params }: { params: { id: string } }
) => {
	const data = await req.json();
	const visitor = await prisma.visitor.update({
		where: {
			id: Number(params.id),
		},
		data: {
			visitor_id: data.visitorID,
			name: data.name,
			position: data.position,
			person_to_visit: data.person_to_visit,
			purpose_of_visit: data.purpose_of_visit,
			type_visitor: data.type_visitor,
			created_at: data.created_at,
			updated_at: data.updated_at,
			status: data.status,
		},
	});
	return NextResponse.json(visitor);
};

export const DELETE = async (
	req: Request,
	{ params }: { params: { id: string } }
) => {
	const visitor = await prisma.visitor.delete({
		where: {
			id: Number(params.id),
		},
	});
	return NextResponse.json(visitor);
};

export const GET = async (
	req: Request,
	{ params }: { params: { id: string } }
) => {
	const visitor = await prisma.visitor.findUnique({
		where: {
			id: Number(params.id),
		},
	});
	return NextResponse.json(visitor);
};
