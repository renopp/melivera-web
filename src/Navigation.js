import React, { Component } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Menu from 'mdi-react/MenuIcon'
import Close from 'mdi-react/CloseIcon'

const Wrapper = styled.div`
	width: 99px;
	height: 100%;
	margin: 0;
	position: fixed;
`

const List = styled.ul`
	list-style-type: none;
	position: absolute;
	height: calc(100% - 160px);
	margin: 0; 
	padding: 0;
	padding-top: 160px;
	
	@media (max-width: 768px) {
		display: none;
	}
`

const Item = styled.li`
	font-family: ${font('primary')};
	font-weight: 100;
	color: #777;
	display: flex;
	height: calc(100% / 7);
	align-items: center;
	opacity: 0;
	transition: opacity 900ms cubic-bezier(0.86, 0, 0.07, 1);	

	&.active {
		opacity: 1;
	}
`

const Number = styled.div`
	width: 50px;
	text-align: center;
`

const Title = styled.div`
	width: 100px;
	flex: 1;
	padding-left: 10px;
`

const Line = styled.div`
	height: 100%;
	width: 1px;
	margin: auto;
	background-color: #c2c2c2;

	@media (max-width: 768px) {
		display: none;
	}
`

const LineWraper = styled.div`
	margin: auto;
	width: 3px;

	@media (max-width: 768px) {
		display: none;
	}
`

const LineActive = styled.div`
	position: absolute;
	background-color: ${palette(0, 'primary')}};
	height: calc(calc(100% - 160px) / 7);
	width: 3px;
	top: ${props => `calc(160px + calc(${props.currentPage} * calc(calc(100% - 160px) / 7)))` };
	transition: top 900ms cubic-bezier(0.86, 0, 0.07, 1);
`

const MenuWrapper = styled.div`
	position: absolute;
	width: 50px;
	display: flex;
	justify-content: center;
	margin-top: 50px;
	cursor: pointer;
	z-index: 99;

	@media (max-width: 768px) {
		margin-top: 20px;
	}
`

const MenuIcon = styled(Menu)`
	fill: #777;
`

const Backdrop = styled.div`
	position: fixed;
	width: 0;
	height: 100%;
	background-color: black;
	opacity: 0;
	transition: opacity 300ms cubic-bezier(0.86, 0, 0.07, 1),		
							width 0s linear 300ms;	

	&.active {
		width: 100%;
		opacity: 0.8;
		transition: opacity 300ms cubic-bezier(0.86, 0, 0.07, 1);
	}
`

const SideMenu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	height: 100%;
	width: 300px;
	background-color: #00BCD4;
	z-index: 99;
	transform: translate(-300px, 0);
	opacity: 0;
	transition: all 300ms cubic-bezier(0.86, 0, 0.07, 1);
	box-shadow: 2px 0px 5px 0px rgba(0,0,0,0.40);
	
	&.active {
		transform: translate(0, 0);
		opacity: 1;
	}

	@media (max-width: 768px) {
		width: 100%;
		transform: translate(-100%, 0);
	}
`

const CloseIcon = styled(Close)`
	fill: #fff;
	position: absolute;
	right: 20px;
	top: 20px;
	cursor: pointer;
	width: 32px;
	height: 32px;
`

const Logo = styled.img`
	width: 150px;
	height: auto;
	margin-bottom: 15px;
	user-select: none;
	user-drag: none; 
`

const SideBarList = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 0;
`

const SideBarItem = styled.li`
	font-family: ${font('primary')};
	font-size: 24px;
	margin: 5px 0;
	text-align: center;
	color: #ccc;
	cursor: pointer;

	&.active {
		color: white;
	}
`

class Navigation extends Component {
	constructor(props) {
		super(props)

		this.state = {
			sideOpen: false
		}
	}

	change(e, i) {
		this.setState({sideOpen: false})
		this.props.changePage(e, i)
	}

	render() {
		const menus = ['HOME', 'MISSION', 'DIVISION', 'RESEARCH', 'PARTNER', 'CHAT WITH US','CONTACT']
		return (
			<Wrapper>
				<Backdrop 
					onClick={() => this.setState({sideOpen: false})}
					className={this.state.sideOpen ? 'active' : ''}
				/>
				<MenuWrapper onClick={() => this.setState({sideOpen: true})}><MenuIcon/></MenuWrapper>
				<SideMenu className={this.state.sideOpen ? 'active' : ''}>
					<CloseIcon onClick={() => this.setState({sideOpen: false})} />
					<Logo src="/assets/Logo/melivera-hitam.png" />
					<SideBarList>
						{ menus.map((e, i) => {
							return (
								<SideBarItem 
									className={this.props.currentPage === i ? 'active' : ''} key={i}
									onClick={() => this.change(this.props.currentPage, i)}
								>
									{e}
								</SideBarItem>
							)}
						)}
					</SideBarList>
				</SideMenu>
				<List>
					{
						menus.map((e, i) => {
							return (
								<Item className={this.props.currentPage === i ? 'active' : ''} key={i}>
									<Number>{ '0' + i }</Number>
									<Title>{e}</Title>
								</Item>
							)}
						)
					}
				</List>
				<Line />
				<LineWraper>
					<LineActive currentPage={this.props.currentPage} />
				</LineWraper>
			</Wrapper>
		)
	}
}

export default Navigation