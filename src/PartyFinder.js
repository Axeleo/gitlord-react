import React from "react";
import axios from 'axios';

export default class PartyFinder extends React.Component {

  constructor() {
    super()
    this.state = {
      owner: '',
      repoName: '',
      res: {}
    }
  }

  update = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  handleSubmit = () => {
    this.getHeroData()
    console.log("submit")
  }

  getHeroData = () => {
    axios.get("https://gitlord-node.herokuapp.com/heros", { params: { owner: this.state.owner, reponame: this.state.reponame}})
      .then(res => {
        this.setState({res: res})
        console.log(res);
      });
  }

  render(){
    var resKeys = Object.keys(this.state.res);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="owner" placeholder="Owner of Repo" onChange={this.update} type="text"/>
          <input name="repoName" placeholder="Name of the repo" onChange={this.update} type="text"/>
          <button>Gather Party</button>
        </form>
        <div>{resKeys.map(user => {
          <div>{user}</div>
        })}</div>
      </div>
    )
  }
}