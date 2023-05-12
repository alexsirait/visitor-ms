// import React from 'react';
// import axios from 'axios';
// import HeaderVisitor from '@/app/components/HeaderVisitor';
// import ButtonHome from '@/app/components/ButtonHome';
// const getVisitors = async (ids: any) => {
// 	const res = await axios.get(`http://localhost:3000/api/visitors/${ids}`);
// 	return res;
// };
// export default async function Page({ params }: { params: any }) {
// 	const [visitors] = await Promise.all([getVisitors(params.id)]);
// 	return (
// 		<p>
// 			<>
// 				<HeaderVisitor />
// 				<div className="box">
// 					<div className="mb-4">
// 						<ButtonHome />
// 					</div>
// 					<div className="is-flex">
// 						<label className="label">Name</label>
// 						<label>{visitors?.data.name}</label>
// 					</div>
// 				</div>
// 			</>
// 		</p>
// 	);
// }
