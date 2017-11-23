import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import styled from 'styled-components'
import { font } from 'styled-theme'

const Wrapper = styled.div`
	height: 100%;
	position: relative;
`

const Row = styled.div`
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

const Image = styled.img`
	width: auto;
	height: 40%;
	user-select: none;
	user-drag: none; 
	margin-top: 20px;
	opacity: 0;
	transform: translate(0, 50px);
	transition: all 500ms ease-out;
	
	&.entered {
		opacity: 1;
		transform: translate(0, 0);
	}

	@media (max-width: 768px) {
		width: 100%;
		height: auto;
	}
`

const Heading = styled.h1`
	font-family: ${font('title')};
	font-size: 48px;
	margin: 0;
	font-weight: 300;
	display: block;
	color: #565656;
	user-select: none;
	text-align: center;
	opacity: 0;
	transform: translate(0, 50px);
	transition: all 500ms ease-out;
	
	&.entered {
		opacity: 1;
		transform: translate(0, 0);
	}

	@media (max-width: 768px) {
		text-align: center;
		font-size: 36px;
	}
`

const Text = styled.p`
	font-family: ${font('primary')};
	font-size: 18px;
	font-weight: 300;
	color: #565656;
	padding-left: 5px;
	text-align: center;
	padding: 0 100px;
	opacity: 0;
	transform: translate(0, 50px);
	transition: all 500ms ease-out;
	
	&.entered {
		opacity: 1;
		transform: translate(0, 0);
	}

	@media (max-width: 768px) {
		font-size: 16px;
		padding: 0;
	}
`

class Misi extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isEntering: false
		}
	}

	render() {
		return (
			<Wrapper id="MISI">
				<Row>
					<Transition in={this.props.in} timeout={0}>
						{(state) => {
							return (
								<Heading className={state}>Mission</Heading>
							)
						}}
					</Transition>
					<Transition in={this.props.in} timeout={300}>
						{(state) => {
							return (
								<Text className={state}>
									Melivera memfasilitasi beekepers yang tertarik
						untuk meningkatkan tingkat produksi madu lebah.
								</Text>
							)
						}}
					</Transition>
				</Row>
			</Wrapper>
		)
	}
}

export default Misi
