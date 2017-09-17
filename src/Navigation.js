import React, { Component } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Menu from 'mdi-react/MenuIcon'

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

	@media (max-width: 768px) {
		margin-top: 20px;
	}
`

const MenuIcon = styled(Menu)`
	fill: #777;
`

class Navigation extends Component {
	render() {
		const menus = ['HOME', 'MISI', 'DEPARTEMEN', 'RESEARCH', 'TUTORIAL', 'BERITA', 'KONTAK']
		return (
			<Wrapper>
				<MenuWrapper><MenuIcon/></MenuWrapper>
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