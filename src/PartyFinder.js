import React from "react";
import axios from 'axios';
import Party from './Party'


// No need for this to be a component right now
export default class PartyFinder extends React.Component {

  constructor() {
    super()
    this.state = {
      owner: '',
      repoName: '',
      res: {
        data: ''
      },
      users: {}
    }
  }

  update = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.getHeroData()
    // let users = this.state.res.data
    // for (let key in (users)) {
    //   key = Math.round(users[key] / 200)
    // }
    console.log("submit")
  }

  getHeroData = () => {
    console.log("hero")
    axios.get("https://gitlord-node.herokuapp.com/heros", 
      { params: { owner: this.state.owner, repoName: this.state.repoName}})
        .then(res => {
          this.setState({res: res})
            console.log(res);
      });
  }

  render(){
    const users = Object.keys(this.state.res.data);
    const userData = this.state.res.data
    console.log(users)
    if(userData) {
      console.log('its happening')
      return (
        <div className="party-finder">
          <Party usersData={userData} />
          <form onSubmit={this.handleSubmit}>
            <input name="owner" placeholder="Owner of Repo" onChange={this.update} type="text" />
            <input name="repoName" placeholder="Name of the repo" onChange={this.update} type="text" />
            <button>Gather Party</button>
          </form>
        </div>
      )
    } else {
      return (
        <div className="party-finder">
          <Party usersData={userData}/>
          <form onSubmit={this.handleSubmit}>
            <input name="owner" placeholder="Owner of Repo" onChange={this.update} type="text"/>
            <input name="repoName" placeholder="Name of the repo" onChange={this.update} type="text"/>
            <button>Gather Party</button>
          </form>
        </div>
      )
    }
  }
}