import React, { Component } from 'react';

class Form extends Component {

  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }


    render() {
    let {formName} = this.props
    let {username, password} = this.state

        return (
        <div class = "form-container">
          <form onSubmit={this.handleSubmit}>
            <h1 className="formName">{formName}</h1>
              <label htmlFor="username">Username:</label>
              <input type="text" autoComplete="off" id="username" name="username" value={username} onChange={this.handleChange}/>
              <label htmlFor="password">Password:</label>
              <input type="password" autoComplete="off" id="password" name="password" value={password} onChange={this.handleChange}/>
            <button className="form-btn" type="submit" value="Submit">Submit</button>
          </form>
        </div>
      
    );
  }

}

export default Form;