import React, { Component } from 'react'
import MainPage from './pages/MainPage'
import theme from './themes/default'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

const Wrapper = styled.div`
	padding-left: 150px;
	padding-right: 50px;

	@media (max-width: 768px) {
		padding-left: 0px;
		padding-right: 0px;
	}
`

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isEntering: false
		}
	}

	componentDidMount() {
		setTimeout(() => this.setState({ isEntering: true }), 2000)
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				<Wrapper>
					<MainPage />
				</Wrapper>
			</ThemeProvider>
		)
	}
}

export default App
