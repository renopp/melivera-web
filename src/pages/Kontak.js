import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import styled from 'styled-components'
import { font } from 'styled-theme'
import FB from 'mdi-react/FacebookIcon'
import Twitter from 'mdi-react/TwitterIcon'
import IG from 'mdi-react/InstagramIcon'
import YT from 'mdi-react/YoutubeIcon'
import ChevronRight from 'mdi-react/ChevronRightIcon'

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
`

const Row = styled.div`
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
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

const FBIcon = styled(FB) `
	fill: white;
	height: 32px;
	width: 32px;
`

const TwitterIcon = styled(Twitter) `
	fill: white;
	height: 32px;
	width: 32px;
`

const IGIcon = styled(IG) `
	fill: white;
	height: 32px;
	width: 32px;
`

const YTIcon = styled(YT) `
	fill: white;
	height: 32px;
	width: 32px;
`

const ChevronRightIcon = styled(ChevronRight) `
	fill: white;
	height: 16px;
	width: 16px;
	margin: 0 5px;
`

const BoxRow = styled.div`
	text-align: center;
	width: 100%;
`

const Box = styled.span`
	background-color: black;
	border-radius: 20px;
	padding: 5px 10px;
	color: white;
	display: inline-flex;
	flex-direction: row;
	align-items: center;
	margin: 5px 0;
	justify-content: space-between;
	margin: 5px;

	opacity: 0;
	transition: all 500ms ease-out;
	
	&.entered {
		opacity: 1;
	}

	@media(max-width: 768px) {
		padding: 2px 10px;
	}
`
const ContainerInput = styled.div`
	display: flex;
	flex-direction: column;
`

const BoxIcon = styled.img`
	width: 32px;
	height: 32px;
`

const BoxTextLeft = styled.span`
	text-align: right;
	width: 100px;
`

const BoxTextRight = styled.span`
	text-align: left;
	width: 120px;
`

const Logo = styled.img`
	height: 120px;
	width: auto;
	margin: 20px 0;
	opacity: 0;
	transform: translate(0, 50px);
	transition: all 500ms ease-out;
	
	&.entered {
		opacity: 1;
		transform: translate(0, 0);
	}

	@media(max-width: 768px) {
		display: none;
	}
`


class Kontak extends Component {
	constructor(props) {
		super(props)
		this.state = { email: '', country: '', open: false }
	}

	handleOpen() {
		this.setState({ open: true })
	}

	handleClose() {
		this.setState({ email:'',country:'',open: false })
		this.props.scroll()
	}

	handleChangeEmail(event) {
		this.setState({ email: event.target.value, })
	}

	handleChangeCountry(event) {
		this.setState({ country: event.target.value, })
	}

	render() {
		const actions = [
			<FlatButton label="Back to home" primary={true} onClick={this.handleClose.bind(this)} />,
		]

		console.log(this.state)
		return (
			<Wrapper id="kontak">
				<Dialog
					title="Thanks for contact us"
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
				We will immidiately contact you back
				</Dialog>
				<Row>
					<Transition in={this.props.in} timeout={0}>
						{(state) => {
							return (
								<Heading className={state}>Ooops, sorry</Heading>
							)
						}}
					</Transition>
					<Transition in={this.props.in} timeout={200}>
						{(state) => {
							return (
								<Text className={state}	>
									they are offline for a while, your question have sent to their inbox and will be replied immidiately.
									Please give us your contact :
								</Text>
							)
						}}
					</Transition>
					<Transition in={this.props.in} timeout={350}>
						{(state) => {
							return (
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<TextField value={this.state.email} hintText="Your Email" floatingLabelText="Email" onChange={this.handleChangeEmail.bind(this)} />
									<TextField value={this.state.country} hintText="Your Country" floatingLabelText="Country" onChange={this.handleChangeCountry.bind(this)} />
									<RaisedButton label="Submit" primary={true} style={{ margin: 12 }} onClick={this.handleOpen.bind(this)}/>
								</div>
							)
						}}
					</Transition>
				</Row>
			</Wrapper>
		)
	}
}

export default Kontak
