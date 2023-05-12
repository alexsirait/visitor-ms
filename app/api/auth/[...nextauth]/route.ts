import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: {
					label: 'Username',
					type: 'text',
					placeholder: 'alexsirait',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req: Request | any) {
				const password = credentials?.password;
				const username = credentials?.username;
				if (username === 'admin' && password === '123456') {
					const user: { id: number; name: string; username: string } | any = {
						id: 1,
						name: 'Admin',
						username: username,
					};
					return user;
				} else {
					return null;
				}
			},
		}),
	],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
