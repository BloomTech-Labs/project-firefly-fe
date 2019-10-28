import React, { Component } from 'react'
import axios from 'axios'
import { signInWithGoogle } from '../../firebase/firebase.utils.js'
import { doFacebookSignIn } from '../../firebase/firebase.utils.js'

import 'bootstrap/dist/css/bootstrap.css'
import './onboarding-css/Slogin.css'

export default class Slogin extends Component {
	state = {
		credentials: {
			email: '',
			password: '',
			passwordCheck: ''
		}
	}

	handleChange = e => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		})
		console.log(this.state.credentials)
	}

	onSubmit = e => {
		e.preventDefault()
		console.log('submit', this.state.credentials)

		axios
			.post('#', this.state.credentials)
			.then(res => {
				console.log(res)
			})
			.catch(err => {
				console.log(err)
			})
	}
	componentDidMount() {}

	render() {
		return (
			<div id='login-box'>
				<div class='left'>
					<h1>SIGN UP</h1>

					{/* <input type='text' name='username' placeholder='Username' /> */}
					<input
						type='email'
						name='email'
						placeholder='E-mail'
						value={this.state.credentials.email}
						onChange={this.handleChange}
					/>
					<p className='promise'>
						We will never share your credentials with anyone!
					</p>

					<input
						type='password'
						name='password'
						placeholder='Password'
						value={this.state.credentials.password}
						onChange={this.handleChange}
					/>

					<input
						type='password'
						name='passwordCheck'
						placeholder='Retype password'
						value={this.state.credentials.passwordCheck}
						onChange={this.handleChange}
					/>

					<input
						className='signup-submit'
						type='submit'
						name='signup_submit'
						value='Sign me up'
					/>
				</div>

				<div class='right flex'>
					<div class='test'>
						<button onClick={doFacebookSignIn} class='social-signin facebook'>
							LOG IN WITH FACEBOOK
						</button>
						<button onClick={signInWithGoogle} class='social-signin google'>
							LOG IN WITH GOOGLE
						</button>
					</div>
					<span class='loginwith'>{/* <br /> */}</span>
				</div>
				<div class='or'>OR</div>
				<p className='log-footer'>
					Already have an account ? <a href='./Signin'>Click Here</a>
				</p>
			</div>
		)
	}
}
