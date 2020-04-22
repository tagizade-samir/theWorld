import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { SignIn } from './Components/SignIn/SignIn';
import {MainBottomTabNav} from './Navigation/MainBottomTabNav'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'admin',
      password: 'deveducation',
      email: 'admin@deveducation.com',
      usernameInput: '',
      passwordInput: '',
      colorText: 'black',
      colorPass: 'black',
      isLogged: false
    }
  }

  onUsernameChange = (text) => {
    this.setState({
      usernameInput: text
    })
    this.setState({colorText: 'black'})
  }

  onPasswordChange = (text) => {
    this.setState({
      passwordInput: text
    })
    this.setState({colorPass: 'black'})
  }

  signIn = () => {
    const { usernameInput, passwordInput, email, username, password } = this.state
    if (usernameInput !== '' && passwordInput !== '') {
      if ((usernameInput == username || usernameInput == email) && passwordInput == password) {
        this.setState({ usernameInput: '' })
        this.setState({ passwordInput: '' })
        this.setState({isLogged: true})
      } else {
        if (usernameInput !== username && usernameInput !== email) {
          this.setState({colorText: 'red'})
        } else if (passwordInput !== password) {
          this.setState({colorPass: 'red'})
        }
      }
    } else {
      console.log('Username or password is empty')
    }
  }

  render() {
    const {
      usernameInput,
      passwordInput,
      colorText,
      colorPass
    } = this.state

    return (
      <React.Fragment>
        {!this.state.isLogged ? (
          <SignIn
            onPasswordChange={this.onPasswordChange}
            onUsernameChange={this.onUsernameChange}
            usernameInput={usernameInput}
            passwordInput={passwordInput}
            colorText={colorText}
            colorPass={colorPass}
            signIn={this.signIn} />
        ) : (
            <NavigationContainer>
              <MainBottomTabNav
                data={{
                  username: this.state.username,
                  email: this.state.email
                }} />
            </NavigationContainer>
          )}
      </React.Fragment>
    )
  }
}

export default App;
