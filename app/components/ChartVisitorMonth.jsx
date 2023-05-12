'use client';
import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const labels = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'Oktober',
	'November',
	'Desember',
];

export default function ChartVisitorMonth({
	january = 0,
	february = 0,
	march = 0,
	april = 0,
	may = 0,
	june = 0,
	july = 0,
	august = 0,
	september = 0,
	oktober = 0,
	november = 0,
	desember = 0,
}) {
	const januaryLength = Object.keys(january).length;
	const februaryLength = Object.keys(february).length;
	const maretLength = Object.keys(march).length;
	const aprilLength = Object.keys(april).length;
	const mayLength = Object.keys(may).length;
	const juneLength = Object.keys(june).length;
	const julyLength = Object.keys(july).length;
	const augustLength = Object.keys(august).length;
	const septemberLength = Object.keys(september).length;
	const oktoberLength = Object.keys(oktober).length;
	const novemberLength = Object.keys(november).length;
	const desemberLength = Object.keys(desember).length;
	const data = {
		labels: labels,
		datasets: [
			{
				label: 'Visitor per month',
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				data: [
					januaryLength,
					februaryLength,
					maretLength,
					aprilLength,
					mayLength,
					juneLength,
					julyLength,
					augustLength,
					septemberLength,
					oktoberLength,
					novemberLength,
					desemberLength,
				],
			},
		],
	};
	return (
		<div className="px-5 py-5">
			<Line data={data} height={'80px'} />
		</div>
	);
}
