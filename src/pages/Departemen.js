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

const RowBox = styled.div`
	padding: 0 100px;
	width: 100%;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
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

const Image = styled.img`
	width: 150px;
`

const Name = styled.h3`
	margin: 5px;
	color: #7c7e7e;
	font-family: ${font('primary')};
`

const Box = styled.div`
	background-color: #e4eff3;
	border: 1px solid #999;
	border-radius: 3px;
	width: 180px;
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	margin: 0 10px;
	padding: 10px;
	opacity: 0;
	transform: translate(50px);
	transition: height 50ms ease-in, width 50ms ease-in, opacity 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

	&.entered {
		opacity: 1;
		transform: translate(0, 0);
	}

	&:hover {
		height: 350px;
		width: 200px;
	}
`

const Desc = styled.p`
	color: #7c7e7e;
	font-family: ${font('primary')};
	font-size: 12px;
	text-align: center;

	${Box}:hover & {
		font-size: 14px;
	}
`

class Departemen extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isEntering: false
		}
	}

	render() {
		return (
			<Wrapper id="departemen">
				<Row>
					<Transition in={this.props.in} timeout={0}>
						{(state) => {
							return (
								<Heading className={state}>Departemen Kami</Heading>
							)
						}}
					</Transition>
					<Transition in={this.props.in} timeout={300}>
						{(state) => {
							return (
								<Text className={state}>
									Basic Computing Community memiliki empat departemen yang mengkategorikan
									sesuai dengan kemampuan anggota kami untuk menjadikan kolaborasi
									yang lebih baik.
								</Text>
							)
						}}
					</Transition>
					<RowBox id="main">
						<Transition in={this.props.in} timeout={300}>
							{(state) => {
								return (
									<Box className={state}>
										<Image src="/assets/Department/Asset-Profile-PR.png" />
										<Name>Public Relations</Name>
										<Desc>Departemen yang berfokus dalam melakukan
								kerjasama dengan organisasi lain dan menjaga hubungan
								baik dengan partner-partner yang sudah berkolaborasi bersama
								Basic Computing Community
										</Desc>
									</Box>
								)
							}}
						</Transition>
						<Transition in={this.props.in} timeout={600}>
							{(state) => {
								return (
									<Box className={state}>
										<Image src="/assets/Department/Asset-Profile-Creative.png" />
										<Name>Creative</Name>
										<Desc>Departemen yang berfokus pada User Interface dan
								juga User Experience bertujuan untuk branding produk
								dan kegiatan di Basic Computing Community
										</Desc>
									</Box>
								)
							}}
						</Transition>
						<Transition in={this.props.in} timeout={900}>
							{(state) => {
								return (
									<Box className={state}>
										<Image src="/assets/Department/Asset-Profile-RnD.png" />
										<Name style={{ fontSize: '14px' }}>Research & Development</Name>
										<Desc>Departemen yang berfokus dalam mengembangkan produk
								dari Basic Computing Community dan mempelajari teknologi-teknologi
								terbaru untuk dikembangkan bersama departemen lain
										</Desc>
									</Box>
								)
							}}
						</Transition>
						<Transition in={this.props.in} timeout={1200}>
							{(state) => {
								return (
									<Box className={state}>
										<Image src="/assets/Department/Asset-Profile-Tm.png" />
										<Name>Talent Management</Name>
										<Desc>Departemen yang berfokus dalam mengembangkan kemampuan
								dari civitas Fakultas Ilmu Komputer untuk menjadikan kemampuan
								civitas lebih baik lagi
										</Desc>
									</Box>
								)
							}}
						</Transition>
					</RowBox>
				</Row>
			</Wrapper>
		)
	}
}

export default Departemen
