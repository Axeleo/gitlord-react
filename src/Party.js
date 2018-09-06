import React from "react";
import { until } from "async";
import Hero from './Hero'

export default class Party extends React.Component {

  constructor(){
    super()
    // this.state = {
    //   props: this.props
    // }
  }

  render() {
    console.log(this.props)
    if (this.props.userData) {
      return (
        <div>
          {Object.keys(this.props.userData).map(user => {
            <Hero name={user} level={this.props.userData[user]} />
          })}
        </div>
      )
    } else {
    return 
    }
  }
}