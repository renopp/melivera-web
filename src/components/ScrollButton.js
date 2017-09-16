import React, { Component } from 'react'
import styled from 'styled-components'
import { font } from 'styled-theme'
import ArrowDown from 'mdi-react/ChevronDoubleDownIcon'

const Button = styled.a`
	width: 200px;
	padding: 5px 10px;
	border: 1px solid #318bf3;
	border-radius: 24px;
	font-family: ${font('primary')};
	background-color: none;
	text-align: center;
	font-size: 16px;
	color: #318bf3;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 768px) {
		align-self: center;
	}
`

const ArrowDownIcon = styled(ArrowDown) `
	fill: #318bf3;
	margin-right: 5px;
`

class ScrollButton extends Component {
	constructor(props) {
		super(props)

		this.state = {
			text: 'SCROLL TO FIND OUT',
		}
	}

	componentWillMount() {
		if (typeof window.orientation !== 'undefined') {
			this.setState({ text: 'SWIPE TO FIND OUT' })
		}
	}

	render() {
		return (
			<Button><ArrowDownIcon /> {this.state.text}</Button>
		)
	}
}

export default ScrollButton