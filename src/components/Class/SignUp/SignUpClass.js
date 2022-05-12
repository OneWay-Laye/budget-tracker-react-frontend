import React, { Component } from 'react'

class SignUp extends Component {
  constructor (porps) {
    super(porps)

    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
    }
  }

handleChange = event => this.setState({
  [event.target.name]: event.target.value
})

onSignUp = event => {
  event.preventDefault()

  const
}
}
