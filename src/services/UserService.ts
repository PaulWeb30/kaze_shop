import {
	CreateUserDto,
	LoginDto,
	AuthResponse,
	ChangeUserInfoDto,
	ChangeUserPasswordDto,
	ForgotPasswordDto,
} from '@/types/auth'
import { AxiosInstance, AxiosResponse } from 'axios'
import axios from 'axios'
import { API_URL } from './index'
export const UserApi = (instance: AxiosInstance) => ({
	async login(dto: LoginDto) {
		const { data } = await axios.post<LoginDto, { data: AuthResponse }>(
			API_URL + '/auth/login',
			dto
		)
		return data
	},
	async registration(dto: CreateUserDto) {
		const { data } = await axios.put<CreateUserDto, { data: AuthResponse }>(
			API_URL + '/auth/signup',
			dto
		)
		return data
	},
	async changeInfo(dto: ChangeUserInfoDto) {
		const { data } = await instance.patch<
			ChangeUserInfoDto,
			{ data: AuthResponse }
		>('/user/update', dto)
		return data
	},
	async changePassword(dto: ChangeUserPasswordDto) {
		const { data } = await instance.patch<
			ChangeUserPasswordDto,
			{ data: AuthResponse }
		>('/auth/change', dto)
		return data
	},
	async logout() {
		const { data } = await instance.post<
			ChangeUserPasswordDto,
			{ data: AuthResponse }
		>('/auth/logout')
		return data
	},
	async forgotPassword(dto: ForgotPasswordDto) {
		const { data } = await instance.post<
			ForgotPasswordDto,
			{ data: AuthResponse }
		>('/auth/logout')
		return data
	},
})
