import React, { Component } from 'react'
import { connect } from 'react-redux'
import createProject from '../../store/actions/projectActions.js'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component{
  state={
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createProject(this.state)
    this.props.history.push('/');
  }
  render(){
    const {auth} = this.props;
    if(!auth.uid)return <Redirect to='/signIn'/>
    return(
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="inpur-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>
          <div className="inpur-field">
            <label htmlFor="content">Project Content</label>
            <textarea id="content" onChange={this.handleChange} className="materialize-textarea" />
          </div>
          <div className="inpur-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
