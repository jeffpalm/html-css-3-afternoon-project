import React, { Component } from 'react'
import './style/reset.css'
import './style/App.css'

export default class App extends Component {
	constructor() {
		super()
		this.state = {
			scrollY: window.scrollY,
			menuCollapsed: true
		}
		this.toggleMenu = this.toggleMenu.bind(this)
	}
	toggleMenu(e) {
		e.preventDefault()
		const { menuCollapsed } = this.state
		this.setState({ menuCollapsed: !menuCollapsed })
	}
	componentDidMount() {
		window.addEventListener('scroll', () => this.setState({ scrollY: window.scrollY }))
	}
	render() {
		// console.log(this.state)
		const { scrollY, menuCollapsed } = this.state
		return (
			<div className='App' id='home'>
				<nav className={`nav flex fw jc-sb ai-c ${scrollY > 50 ? 'nav-shrink dark' : null}`}>
					<div className='nav-cont rel flex jc-sb ai-c fw'>
						<div className='logo-cont rel flex ai-c'>
							<a className={`logo-cont ${scrollY > 50 ? 'logo-shrink' : null}`} href='#home'>
								<img
									src='http://blackrockdigital.github.io/startbootstrap-agency/assets/img/navbar-logo.svg'
									alt='Logo'
									className={`logo ${scrollY > 50 ? 'logo-shrink' : null}`}
								/>
							</a>
						</div>
						<div className={`nav-link-cont rel ${menuCollapsed ? null : 'expand'}`}>
							<ul className={`nav-link-list flex ${menuCollapsed ? null : 'show-links expand'}`}>
								<li className='nav-link-li'>
									<a href='#services' className='nav-link uppercase'>
										services
									</a>
								</li>
								<li className='nav-link-li'>
									<a href='#portfolio' className='nav-link uppercase'>
										portfolio
									</a>
								</li>
								<li className='na-link-li'>
									<a href='#about' className='nav-link uppercase'>
										about
									</a>
								</li>
								<li className='nav-link-li'>
									<a href='#team' className='nav-link uppercase'>
										team
									</a>
								</li>
								<li className='nav-link-li'>
									<a href='#contact' className='nav-link uppercase'>
										contact
									</a>
								</li>
							</ul>
						</div>
						<button className='menu-btn uppercase jc-c ai-c' onClick={this.toggleMenu}>
							Menu
						</button>
					</div>
				</nav>
				<div className='hero flex col jc-c ai-c fvw'>
					<h3 className='hero-sub w'>Welcome To Our Studio!</h3>
					<h1 className='hero-main w uppercase'>It's Nice to Meet You</h1>
					<a className='hero-btn w uppercase prim-bg flex jc-c ai-c' href='#services'>
						Tell Me More
					</a>
				</div>
				<div id='services' className='flex fw fvh col jc-c'>
					<h2 className='uppercase'>services</h2>
					<span className='italic'>Lorem ipsum dolor sit amet consectetur.</span>
					<div className='serv-card-cont flex jc-sa ai-c fw'>
						<div className='serv-card flex col ai-c jc-se'>
							<span className='img-ph fw prim-bg'>IMAGE PLACEHOLDER</span>
							<h4 className='serv-card-title'>E-commerce</h4>
							<p className='serv-card-text'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, in? Voluptate sequi
								voluptates explicabo nobis quas praesentium vero magnam eaque.
							</p>
						</div>
						<div className='serv-card flex col ai-c jc-se'>
							<span className='img-ph fw prim-bg'>IMAGE PLACEHOLDER</span>
							<h4 className='serv-card-title'>Responsive Design</h4>
							<p className='serv-card-text'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus tempora
								doloremque neque consequuntur quam, dicta exercitationem corporis soluta veniam.
								Accusamus!
							</p>
						</div>
						<div className='serv-card flex col ai-c jc-se'>
							<span className='img-ph fw prim-bg'>IMAGE PLACEHOLDER</span>
							<h4 className='serv-card-title'>Web Security</h4>
							<p className='serv-card-text'>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores impedit est
								voluptatum nemo excepturi voluptatibus quod quo non corporis eveniet!
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
