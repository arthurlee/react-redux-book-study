import React from 'react'

// 无状态函数版本
export function HelloApp() {
	return <h1>Hello world from HelloApp!</h1>
}

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello world!</h1>
				<HelloApp />
			</div>
		)
	}
}
