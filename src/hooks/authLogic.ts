import axios from 'axios';
import { IUser } from 'types/userTypes';

export async function getEmployee(token: string) {
		const res = await axios.get<IUser>(
			`${process.env.NEXT_PUBLIC_API_ACCOUNTING_URL}/getEmployeeByToken`,
			{
				headers: {
						 Authorization: `Bearer ${token}`,
				},
			}
		);
		return res.data;
}
