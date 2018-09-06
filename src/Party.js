import React from "react";
import Hero from './Hero'

export default class Party extends React.Component {

  constructor(){
    super()
    this.state = {
      props: this.props
    }
  }

  render() {
   
    console.log(this.props)
    if (this.props.usersData) {
      let arr = Object.values(this.props.usersData);
      let max = Math.max(...arr);
      const users = this.props.usersData
      console.log('prepping party memes')
      console.log(this.props.usersData);
      return (
        <div className='party-list'>
          {Object.keys(users).map(user => {
            return <Hero name={user} exp={users[user]} gitlord={users[user] === max ? true : false}/>
          })}
        </div>
      )
    } else {
      return <div className='party-list'></div>
    }
  }
}