import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://some-domain.com/api/',
	withCredentials: true,
})

export default instance