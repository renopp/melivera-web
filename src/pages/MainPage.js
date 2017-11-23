import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import styled from 'styled-components'
import { font } from 'styled-theme'
import Avatar from 'react-avatar'
import ScrollButton from '../components/ScrollButton'

const Row = styled.div`
	height: 100%;
	justify-content: center;
	overflow: hidden;
	display: flex;
	flex-direction: row;

	@media (max-width: 992px) {
		flex-direction: column;
	}
`

const ProfessorGroup = styled.div`

`

const LeftColumn = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	padding-bottom: 5%;
	justify-content: space-around
`

const Column = styled.div`
	display: flex;
	height: 100%;
	justify-content: center;
	flex-direction: column;
	padding-bottom: 5%;

	@media (max-width: 992px) {
		height: auto;
		padding-bottom: 0;
	}
`

const ColumnFirst = styled(Column) `
	display: flex;
	flex-direction: row;
	height: 100%;
	padding-bottom: 5%;
`

const Image = styled.img`
	width: calc(100% - 50px);
	height: auto;
	user-select: none;
	user-drag: none;
	opacity: 0;
	transition: all 400ms ease-out;

	&.entered {
		opacity: 1;
	}

	@media (max-width: 992px) {
		width: 100%;
	}
`

const Logo = styled.img`
	width: 100px;
	height: auto;
	align-self: center;
	margin-top: 15px;
	margin-bottom: 15px;
	user-select: none;
	user-drag: none; 

	@media (min-width: 993px) {
		display: none;
	}
`

const HeadingWrapper = styled.div`
	transform: translate(0, 50px);
	transition: all 400ms ease-out;
	opacity: 0;

	&.entered {
		opacity: 1;
		transform: translate(0, 0);
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

	@media (max-width: 992px) {
		text-align: center;
		font-size: 36px;
	}
`
const InCollaborateContainer = styled.div`
	display: flex;
	flex-direction: column;
	transition: all 400ms ease-out;
`
const CollaborationHeadText = styled.text`
	font-family: ${font('primary')};
	font-size: 30px;
	font-weight: 10;
	color: #565656;
`

const ProfessorProfile = styled.div`
	display: flex;
	flex-direction: column;
	transition: all 400ms ease-out;
`
const ProfessorName = styled.text`
	font-family: ${font('primary')};
	font-size: 10px;
	font-weight: 10;
	color: #565656;
`
const Text = styled.p`
	font-family: ${font('primary')};
	font-size: 20px;
	font-weight: 300;
	color: #565656;
	padding-left: 5px;
	opacity: 0;
	transform: translate(0, 50px);
	transition: all 700ms ease-out;
	
	&.entered {
		opacity: 1;
		transform: translate(0, 0);
	}

	@media (max-width: 992px) {
		text-align: center;
		font-size: 16px;
	}
`

class MainPage extends Component {
	render() {
		return (
			<Row className="row" id="main">
				<LeftColumn style={{ width: '100%'}}>
					<Transition in={this.props.in} timeout={300}>
						{(state) => {
							return (
								<ProfessorGroup style={{ display: 'flex', flexDirection: 'column' }}>
									<CollaborationHeadText style={{ alignSelf: 'center' }}>In Collaboration with</CollaborationHeadText>
									<ProfessorGroup style={{ display: 'flex', justifyContent: 'space-around' }}>
										<ProfessorProfile style={{ alignItems: 'center', flexWrap: 'nowrap' }}>
											<Avatar style={{ marginTop: 20 }} round={true} src="https://preview.ibb.co/nQdGa6/joanna_mcgrenere.jpg" />
											<ProfessorName>
												Prof. Smith
											</ProfessorName>
											<ProfessorName >
												Universtiy of California
											</ProfessorName>
										</ProfessorProfile>
										<ProfessorProfile style={{ alignItems: 'center', flexWrap: 'nowrap' }}>
											<Avatar style={{ marginTop: 20 }} round={true} src="https://preview.ibb.co/i4q7hm/1_IMG_4149b.jpg" />
											<ProfessorName >
												Prof. Nakagawa
											</ProfessorName>
											<ProfessorName >
												Universtiy of Tokyo
											</ProfessorName>
										</ProfessorProfile>
										<ProfessorProfile style={{ alignItems: 'center', flexWrap: 'nowrap' }}>
											<Avatar style={{ marginTop: 20 }} round={true} src="https://preview.ibb.co/h3tkJR/faculty_sridhar.jpg" />
											<ProfessorName >
												Prof. Jack Barry
											</ProfessorName>
											<ProfessorName >
												Michigan Universtiy
											</ProfessorName>
										</ProfessorProfile>
									</ProfessorGroup>
								</ProfessorGroup>
							)
						}}
					</Transition>
				</LeftColumn >
				<Column className="col-xs-12 col-lg-6">
					<Transition in={this.props.in} timeout={1}>
						{(state) => {
							return (
								<HeadingWrapper className={state}>
									<Heading>Melivera Hub</Heading>
								</HeadingWrapper>
							)
						}}
					</Transition>
					<Transition in={this.props.in} timeout={301}>
						{(state) => {
							return (
								<Text className={state}>
									Ask any problem to the professor and experienve beekepers
								</Text>
							)
						}}
					</Transition>
					<Transition in={this.props.in} timeout={300}>
						{(state) => {
							return (
								<ScrollButton className={state} press={() => this.props.scroll()} />
							)
						}}
					</Transition>
				</Column>
			</Row>
		)
	}
}

export default MainPage
