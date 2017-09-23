import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
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
	render() {
		return (
			<Wrapper id="kontak">
				<Row>
					<Transition in={this.props.in} timeout={0}>
						{(state) => {
							return (
								<Heading className={state}>Hubungi Kami</Heading>
							)
						}}
					</Transition>
					<Transition in={this.props.in} timeout={300}>
						{(state) => {
							return (
								<Text className={state}	>
									Untuk informasi lebih lanjut tanyakan kepada kami melalui
									kontak yang kami cantumkan dibawah ini
								</Text>
							)
						}}
					</Transition>
					<Transition in={this.props.in} timeout={400}>
						{(state) => {
							return (
								<Logo className={state} src="/assets/Logo/bcc-logo-horizontal-fit-complete.png" />
							)
						}}
					</Transition>
					<Transition in={this.props.in} timeout={500}>
						{(state) => {
							return (
								<BoxRow>
									<Box className={state}>
										<BoxIcon src="/assets/Kontak/Line@.png" />
										<BoxTextLeft>LINE@</BoxTextLeft><ChevronRightIcon /><BoxTextRight>@bccfilkom</BoxTextRight>
									</Box>
									<Box className={state}>
										<TwitterIcon />
										<BoxTextLeft>Twitter</BoxTextLeft><ChevronRightIcon /><BoxTextRight>@bccfilkom</BoxTextRight>
									</Box>
									<Box className={state}>
										<IGIcon />
										<BoxTextLeft>Instagram</BoxTextLeft><ChevronRightIcon /><BoxTextRight>@bccfilkom</BoxTextRight>
									</Box>
									<Box className={state}>
										<YTIcon />
										<BoxTextLeft>YouTube</BoxTextLeft><ChevronRightIcon /><BoxTextRight>bcc filkom ub</BoxTextRight>
									</Box>
									<Box className={state}>
										<FBIcon />
										<BoxTextLeft>Facebook</BoxTextLeft><ChevronRightIcon /><BoxTextRight>bcc filkom ub</BoxTextRight>
									</Box>
								</BoxRow>
							)
						}}
					</Transition>
					<Transition in={this.props.in} timeout={600}>
						{(state) => {
							return (
								<Text className={state}>
									Laboratorium Pembelajaran Ilmu Komputer<br />
									Fakultas Ilmu Komputer Universitas Brawijaya Gedung B Ruang B1.8<br />
									Jl. Veteran No.8 Polinema<br />
									Malang 65145<br />
									Indonesia
								</Text>
							)
						}}
					</Transition>
				</Row>
			</Wrapper>
		)
	}
}

export default Kontak
