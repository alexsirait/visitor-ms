'use client';
import React from 'react';
import { Bar } from 'react-chartjs-2';

const labels = ['Count Day', 'Finished', 'Unfinished'];

export default function ChartVisitorDay({
	count = 0,
	countStatusDone,
	countStatusNot,
}) {
	const countDay = Object.keys(count).length;
	const countDone = Object.keys(countStatusDone).length;
	const countNot = Object.keys(countStatusNot).length;
	const data = {
		labels: labels,
		datasets: [
			{
				label: 'Visitor per day',
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				data: [countDay, countDone, countNot],
			},
		],
	};
	return (
		<div className="px-5 py-5">
			<Bar data={data} height={'80px'} />
		</div>
	);
}
