import React, { Component } from 'react'
import BezierEasing from 'bezier-easing'
import ScrollSwipe from 'scroll-swipe'
import MainPage from './pages/MainPage'
import Misi from './pages/Misi'
import BCCResearch from './pages/BCCResearch'
import Tutorial from './pages/Tutorial'
import Berita from './pages/Berita'
import Kontak from './pages/Kontak'
import Departemen from './pages/Departemen'
import Navigation from './Navigation'
import theme from './themes/default'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import 'flexboxgrid2'

const Root = styled.div`
	height: 100%;
`

const Wrapper = styled.div`
	padding-left: 150px;
	padding-right: 50px;
	height: 100%;
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 992px) {
		padding-left: 10px;
		padding-right: 10px;
	}
`

const Logo = styled.img`
	height: 120px;
	position: fixed;
	top: 20px;
	left: 70px;

	@media (max-width: 992px) {
		display: none;
	}
`

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			activePage: 0,
			show: [false, false, false, false, false, false, false],
			scrollY: 0,
		}
	}

	componentDidMount() {
		window.onbeforeunload = function () {
			window.scrollTo(0, 0)
		}

		this.scrollListener = new ScrollSwipe({
			target: document, // Element must be a single dom-node per ScrollSwipe Instance
			scrollSensitivity: 0, // The lower the number, the more sensitive
			scrollPreventDefault: true, // prevent default option for scroll events
			touchPreventDefault: true, // prevent default option for touch events
			scrollCb: (e) => this.handleScroll(e),  // The action you wish to perform when a scroll reacts (details below)
		})

		setTimeout(() => {
			let items = this.state.show.slice(0)
			items[0] = true
			this.setState({ show: items })
		}, 500)
	}

	componentWillUnmount() {
	}

	handleScroll(event) {
		let currentY = this.state.scrollY

		if (event.intent == 0 && currentY <= 0) return this.scrollListener.listen()
		if (event.intent == 1 && currentY >= 6 * window.innerHeight) return this.scrollListener.listen()

		if (event.intent == 0) {
			this.updatePage(this.state.activePage, -1)
			this.setState({
				activePage: --this.state.activePage,
			})
		} else if (event.intent == 1) {
			this.updatePage(this.state.activePage, 1)
			this.setState({
				activePage: ++this.state.activePage,
			})
		}

		let multiplier = 1
		if (event.intent == 0) multiplier = -1

		const easing = BezierEasing(0.86, 0, 0.07, 1)

		let time = 0
		let timerID = setInterval(() => {
			let step = Math.round(currentY + easing(time / 1000) * window.innerHeight * multiplier)
			window.scrollTo(0, step)
			time += 3.5
			// console.log(step)

			if (event.intent && window.pageYOffset >= this.state.scrollY + window.innerHeight) {
				this.setState({
					scrollY: currentY + window.innerHeight
				})
				clearInterval(timerID)
				this.scrollListener.listen()
			} else if (!event.intent && window.pageYOffset <= this.state.scrollY - window.innerHeight) {
				this.setState({
					scrollY: currentY - window.innerHeight
				})
				clearInterval(timerID)
				this.scrollListener.listen()
			}
		}, 1)
	}

	updatePage(page, key) {
		let items = this.state.show.slice(0)
		items[page] = false
		this.setState({ show: items })

		setTimeout(() => {
			items[page + key] = true
			this.setState({ show: items })
			console.log(this.state.show)
		}, 750)
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				<Root>
					<Logo src="/assets/Logo/bcc-logo-vertical-fit-complete.png" />
					<Navigation currentPage={this.state.activePage} />
					<Wrapper ref={(div) => { this.wrapper = div }}>
						<MainPage in={this.state.show[0]} />
						<Misi in={this.state.show[1]} />
						<Departemen in={this.state.show[2]} />
						<BCCResearch in={this.state.show[3]} />
						<Tutorial in={this.state.show[4]} />
						<Berita in={this.state.show[5]} />
						<Kontak in={this.state.show[6]} />
					</Wrapper>
				</Root>
			</ThemeProvider>
		)
	}
}

export default App
