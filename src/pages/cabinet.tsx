import React from 'react'
import { withAuth } from '@/hoc/RequiredAuth'
import axios from 'axios'
import { NextPage } from 'next'
interface Props {
	todo: { id: number; title: string }
}
const Cabinet: NextPage<Props> = ({ todo }) => {
	if (!todo) {
		return <h1>loading</h1>
	}
	return (
		<main className='content'>
			<h1>{todo.title}</h1>
		</main>
	)
}

export const getServerSideProps = withAuth(async context => {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/todos/1'
	)
	const todo = await response.data
	return { props: { todo } }
})

export default Cabinet
