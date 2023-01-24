import React from 'react'
import cl from './spinner.module.scss'
const Spinner = () => {
	return (
		<div className={cl.body}>
			<div className={cl.waviy}>
				<span>K</span>
				<span>A</span>
				<span>Z</span>
				<span>E</span>
				<span>S</span>
				<span>H</span>
				<span>O</span>
				<span>P</span>
			</div>
		</div>
	)
}

export default Spinner
