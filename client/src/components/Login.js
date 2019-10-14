import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        this.props.history.push('/protected')
      })
      .catch(err => console.log('Ahhh BUG', err));
  };

  render(){
    return (
      <div className='form-container'>
      <form onSubmit={this.login}>
          <input
              type='text'
              name='username'
              placeholder='Username'
              value={this.state.credentials.username}
              onChange={this.handleChange}
          />
          <input
              type='password'
              name='password'
              placeholder='Password'
              value={this.state.credentials.password}
              onChange={this.handleChange}
          />
          <button>Log In</button>
      </form>
  </div>
    );
  };
};

export default Login;
