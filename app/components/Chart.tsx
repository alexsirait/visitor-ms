'use client';
import React, { useState } from 'react';
import ChartVisitorDay from './ChartVisitorDay';
import ChartVisitorMonth from './ChartVisitorMonth';
import Link from 'next/link';

export default function Chart({
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
}: any) {
	const [chart, setChart] = useState('Day');
	return (
		<div className="box">
			<div className="select is-primary">
				<select defaultValue={chart} onChange={(e) => setChart(e.target.value)}>
					<option disabled>Choose Chart</option>
					<option value="Day">Day</option>
					<option value="Month">Month</option>
				</select>
			</div>
			<Link href={`/visitors`} className="button is-primary ml-4">
				Visitors
			</Link>

			{chart == 'Day' && (
				<ChartVisitorDay
					count={count}
					countStatusDone={countStatusDone}
					countStatusNot={countStatusNot}
				/>
			)}
			{chart == 'Month' && (
				<ChartVisitorMonth
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
					}}
				/>
			)}
		</div>
	);
}
