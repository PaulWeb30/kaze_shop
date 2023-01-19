import instance from './index'
import { AxiosResponse } from 'axios'

export const UserApi = {
	async login(dto: { email: string }): Promise<AxiosResponse<any>> {
		const { data } = await instance.post('/auth/login', dto)
		return data
	},
}
