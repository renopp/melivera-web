import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import styled from 'styled-components'
import { font } from 'styled-theme'
import ScrollButton from '../components/ScrollButton'

const Wrapper = styled(Grid)`
	height: 100%;
`

const FullRow = styled(Row)`
	height: 100%;
`

const Column = styled(Col)`
	display: flex;
	height: 100%;
	justify-content: center;
	flex-direction: column;
	padding-bottom: 15%;
	@media (max-width: 768px) {
		height: auto;
	}
`

const Image = styled.img`
	width: calc(100% - 50px);
	height: auto;

	@media (max-width: 768px) {
		width: 100%;
	}
`

const Heading = styled.h1`
	font-family: ${font('title')};
	font-size: 48px;
	margin: 0;
	font-weight: 300;
	display: block;
	color: #565656;
	@media (max-width: 768px) {
		text-align: center;
	}
`

const Text = styled.p`
	font-family: ${font('primary')};
	font-size: 20px;
	font-weight: 300;
	color: #565656;
	padding-left: 5px;

	@media (max-width: 768px) {
		text-align: center;
	}
`

class MainPage extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isEntering: false
		}
	}

	render() {
		return (
			<Wrapper fluid>
				<FullRow>
					<Column xs={12} md={6}>
						<Image src="/assets/Home/Home.png"/>
					</Column>
					<Column first-xs xs={12} md={6}>
						<Heading>BASIC</Heading>
						<Heading>COMPUTING</Heading>
						<Heading>COMMUNITY</Heading>
						<Text>
							BCC merupakan komunitas yang berada dibawah naungan
							Laboratorium Pembelajaran Ilmu Komputer 
							Universitas Brawijaya yang bergerak 
							dibidang teknologi.
						</Text>
						<ScrollButton />
					</Column>
				</FullRow>
			</Wrapper>
		)
	}
}

export default MainPage
