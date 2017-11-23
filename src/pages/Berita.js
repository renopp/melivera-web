import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import styled from 'styled-components'
import { font } from 'styled-theme'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const Wrapper = styled.div`
	height: 100%;
	position: relative;
	width: 100%;
`

const Row = styled.div`
	display: flex;
	height: 100%;
	margin-top: 5%;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
`

const RowContent = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	margin-top: 1%;
	justify-content: space-around;
	align-items: center;
	flex-direction: row;
`
const ContainerContent = styled.div`
	height: 100%;
	width: 100%;
	margin: 2%;
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

class Berita extends Component {

	onPressButtonSend(event){
		this.props.scroll()
	}

	render() {
		return (
			<Wrapper id="bcc-research">
				<Row>
					<Transition in={this.props.in} timeout={0}>
						{(state) => {
							return (
								<Heading className={state}>Chat with us</Heading>
							)
						}}
					</Transition>
					<Transition in={this.props.in} timeout={300}>
						{(state) => {
							return (
								<RowContent>
									<ContainerContent className={state} style={{display: 'flex', flexDirection:'column', height:600, justifyContent:'center', alignItems:'center'}}>
										<Card style={{height:500, width:500}}>
											<CardHeader
												title="Ask your problem" textStyle={{fontSize: 20}}
											/>
											<CardText>
												<Paper style={{  
													height: 360,
													width: 465,
												}} zDepth={1}
												>
													<TextField  
														hintText="Tell your porblem here"
														multiLine={true}
														fullWidth={true}
														rows={14}
														rowsMax={14}
														margin={10} />
												</Paper>
											</CardText>
											<CardActions style={{display: 'flex', justifyContent: 'flex-end', marginBottom: 5}}>
												<RaisedButton label="Upload Photo"  primary={true}  />
												<RaisedButton label="Send"  primary={true} onClick={this.onPressButtonSend.bind(this)}/>
											</CardActions>
										</Card>
									</ContainerContent>
									<ContainerContent className={state} style={{display: 'flex', flexDirection:'column', justifyContent:'space-around',height:600}}>
										<div>
											<Heading className={state}>Question Asked</Heading>
											<Heading className={state}>1503</Heading>
										</div>
										<div>
											<Heading className={state}>5★ rate question answered</Heading>
											<Heading className={state}>1497</Heading>
										</div>
									</ContainerContent>
								</RowContent>
							)
						}}
					</Transition>
				</Row>
			</Wrapper>
		)
	}
}

export default Berita
