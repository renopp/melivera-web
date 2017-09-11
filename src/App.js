import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import './css/App.css'

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
			<Transition
				in={this.state.isEntering}
				timeout={500}
			>
				<div className="container">
					<div className="homeImage">
						<img src="/assets/Home/Home.png" id="home"/>
					</div>
					<div className="details">
						BASIC
						<br />
						COMPUTING
						<br />
						COMMUNITY
						<div className="description">
							BCC merupakan komunitas yang berada di bawah naungan <br/>
							Laboratorium Pembelajaran Ilmu Komputer <br/>
							Universitas Brawijaya yang bergerak di <br/>
							bidang teknologi. <br/>
						</div>
					</div>
					<div className="logoContainer">
						<img src="/assets/Logo/bcc-logo-vertical-fit-complete.png" id="logo"/>
					</div>
				</div>
			</Transition>
		)
	}
}

export default App
