import { LoginDto } from '@/types/auth'
import { AxiosResponse, AxiosInstance } from 'axios'

export const UserApi = (instance: AxiosInstance) => ({
	async login(dto: { email: string }) {
		const { data } = await instance.post<LoginDto, { data: { token: string } }>(
			'/auth/login',
			dto
		)
		return data
	},
	async getMe() {
		const { data } = await instance.get('/auth/login')
		return data
	},
})
