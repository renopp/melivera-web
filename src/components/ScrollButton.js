import React, { Component } from 'react'
import styled from 'styled-components'
import { font } from 'styled-theme'
import ArrowDown from 'mdi-react/ChevronDoubleDownIcon'

const Button = styled.span`
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
	cursor: pointer;
	transition: all 0.25s;
	user-select: none;
	opacity: 0;
	transform: translate(0, 50px);
	transition: all 700ms ease-out;
	
	&.entered {
		opacity: 1;
		transform: translate(0, 0);
	}

	@media (max-width: 768px) {
		align-self: center;
	}

	&:hover {
		color: #ffffff;
		background-color: #318bf3;
	}
`

const ArrowDownIcon = styled(ArrowDown) `
	transition: fill 0.25s;
	fill: #318bf3;
	margin-right: 5px;

	${Button}:hover & {
		fill: #ffffff;
	}
`

const Text = styled.span`
	user-select: none;
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
			<Button className={this.props.className} onClick={() => this.props.press()}><ArrowDownIcon /> <Text>{this.state.text}</Text></Button>
		)
	}
}

export default ScrollButton