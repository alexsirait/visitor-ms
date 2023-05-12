// 'use client';
// import HeaderVisitor from '../components/HeaderVisitor';
// import ButtonHome from '../components/ButtonHome';
// import { useForm } from 'react-hook-form';
// import { useRouter } from 'next/navigation';

// export default function Visitor() {
// 	const { push } = useRouter();
// 	const { register, handleSubmit } = useForm();
// 	const onSubmit = (data: any) => push(`/search/${data.search}`);
// 	return (
// 		<>
// 			<HeaderVisitor />
// 			<div className="box">
// 				<div className="mb-4">
// 					<ButtonHome />
// 				</div>
// 				<div>
// 					<form onSubmit={handleSubmit(onSubmit)}>
// 						<input {...register('search')} />
// 						<input type="submit" />
// 					</form>
// 				</div>
// 			</div>
// 		</>
// 	);
// }
